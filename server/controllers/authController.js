const bcrypt = require ('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body,
              db = req.app.get('db');

        let user = await db.user.check_user(username);
        if (user[0]) {
            return res.status(400).send("User already exisits");
        }

        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let newUser = await db.user.register_user(username, hash);

        let userCart = await db.cart.create_order(newUser[0].user_id);
        let sessionUser = {...newUser[0], ...userCart[0]};
        req.session.user = sessionUser;
        res.status(201).send(req.session.user);
    },
    login: async (req, res) => {
        const {username, password} = req.body,
              db = req.app.get('db');

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
    },
    editPassword: async (req, res) => {
        const db = req.app.get('db')
        const {newPassword} = req.body
        
        if(req.session.user){  
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(newPassword, salt)
            const user = await db.users.edit_password(hash)
            delete user[0].password
            res.status(200).send(req.session.user)
        }
    },
    checkPassword: async (req, res) => {
        const db = req.app.get('db')
        const {currentPassword} = req.body
        console.log(currentPassword)
        const {username} = req.session.user
        const user = await db.users.check_user(username)
        const authorized = bcrypt.compareSync(currentPassword, user[0].password)
        if(!authorized){
            res.status(200).send('password does not match')
        }
        delete user[0].password
        req.session.user = user
        res.status(200).send(req.session.user)
    }
}