const stripe = require('stripe')("sk_test_51OJiJgSHqKSNDjqq2yvXq0QFAEs76tHus5ZritXlXzN3LZU4FIX14dYNZt8am0foTMeYSugk8R9ktG8pMiQgOeIq00x0Vo0URC")
const checkout = async(req,res)=>{
    try {
       const lineItems=  req.body.map(item=>{
            return {
                price_data:{
                    currency:"inr",
                    product_data:{
                        name:item.name
                    },
                    unit_amount:(item.price)*100
                },
                quantity:item.quantity
            }

        });
        const session =await stripe.checkout.sessions.create({
            payment_method_types:['card'],
            mode:"payment",
            line_items:lineItems,
            success_url:"https://lukeecommprep.netlify.app/payment/success",
            cancel_url:"https://lukeecommprep.netlify.app/payment/cancel"
        })
        res.json({id:session.id})
        
    } catch (error) {
      console.log(error);
    }

}


module.exports =checkout