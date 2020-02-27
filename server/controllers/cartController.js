const stripe= require('stripe')(process.env.SECRET_STRIPE_KEY);

module.exports = {
    getCart: (req, res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.cart.get_cart(id)
        .then(cart => res.status(200).send(cart))
        .catch(err => res.status(500).send(err));
    },
    addToCart: (req, res) => {
        const {customer_order_id, product_id, price} = req.body,
              db = req.app.get('db');

        db.cart.add_to_cart({order_id: customer_order_id, product_id, price})
        .then(data => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },
    removeFromCart: (req,res) => {
        const {id} = req.params,
              db = req.app.get('db');

        db.cart.remove_from_cart(id)
        .then(bb_order_items => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    },
    payment: (req, res) => {
        const {token:{id}, totalPrice, customer_order_id, user_id, username} = req.body;
        const db = req.app.get('db');

        stripe.charges.create(
            {
                amount: totalPrice,
                currency: 'usd',
                soucre: id,
                description: 'Purchase'
            },
            async(err) => {
                if(err){
                    return res.status(500).send(err)
                } else {
                    await db.cart.payment_complete(customer_order_id)
                    await db.cart.create_order(user_id)
                    let user = await db.user.check_user(username)
                    req.session.user = user[0]
                    return res.status(200).send(req.session.user);
                }
            }
        )
    }
}