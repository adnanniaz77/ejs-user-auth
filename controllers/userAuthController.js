const User = require('../model/User');

module.exports.home_get = (req, res) => {
    res.render('home');
}

const handleError = (err) => {
    return err.message
}

/* ------------------------------ 
        GET "register" page
 ------------------------------ */

module.exports.register_get = (req, res) => {
    res.render('register')
}

/* ------------------------------
        GET "login" page
 ------------------------------ */

module.exports.login_get = (req, res) => {
    res.render('login')
}

/* ------------------------------ 
        GET "dashboard"
 ------------------------------ */

module.exports.dashboard_get = (req, res) => {
    res.render('dashboard')
}

/* ------------------------------
        POST "register" new user
 ------------------------------ */

module.exports.register_post = async(req, res) => {
    const { username,  email, password } = req.body;
    
    try {
        const newUser = await User.create({username, email, password});
        if(!newUser) res.status(400).json({msg: 'Something went wrong'})
        res.status(201).json({User: newUser})
    } 
    catch (err) {
        const error = handleError(err)
        res.status(500).json({Error: error})
    }
}

/* ------------------------------ 
          POST "login" user
 ------------------------------ */

module.exports.login_post = (req, res) => {
    const { email, password } = req.body;
    
    try {
        // res.status(201).json({ newUser })
    } 
    catch (err) {
        // res.status(500).json({ Error: err.message})
    }
}