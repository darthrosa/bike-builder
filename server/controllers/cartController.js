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
        const {order_item_id} = req.body,
            db = req.app.get('db');

        db.cart.remove_from_cart({order_item_id})
        .then(data => res.sendStatus(200))
        .catch(err => res.status(500).send(err));
    }
}