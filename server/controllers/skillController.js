module.exports = {
    getSkill: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        
        const products = await db.products.get_skill_products(id)
        res.status(200).send(products)
    }
}