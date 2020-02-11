const bcrypt = require ('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body,
              db = req.app.get('db');

        let user = await db.check_user(username);
        if (user[0]) {
            return res.status(400).send("User already exisits");
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let newUser = await db.register_user(username, hash);

        let userCart = await db.cart.create_order(newUser[0].user_id);
        let sessionUser = {...newUser[0], ...userCart[0]};
        req.session.user = sessionUser;
        req.status(201).send(req.session.user);
    },
    login: async (req, res) => {
        const {username, password} = req.body,
              db = req.app.use('db');

        let user = await db.user.check_user(username);
        if (!user[0]){
            return res.status(400).send('User not found')
        }
        const userAuth = bcrypt.compareSync(password, user[0].password)
        if (!userAuth){
            return res.status(401).send('Invalid Passowrd')
        }
        delete user[0].password;
        req.session.user = user[0];
        res.status(202).send(req.session.user);
    },
    logout: (req, res) => {
        req.session.destroy();
        res.sendStatus(200)
    }
}