const User = require('../model/User');

module.exports.home_get = (req, res) => {
    res.render('home');
}

// Function: Handle Errors for All routes
const handleError = (err) => {
    let errors = { username: "", email: "", password: ""}

    // check for duplicate email
    if (err.code === 11000) {
        errors.email = "Email already exists, please try another one"
        return errors;
    }
    
    // validation errors
    Object.values(err.errors).forEach(({properties}) => {
        errors[properties.path] = properties.message;
    })

    return errors;
}

/* 
------------------------------ 
        GET "register" page
------------------------------ 
*/

module.exports.register_get = (req, res) => {
    res.render('register')
}

/* 
------------------------------
        GET "login" page
------------------------------ 
 */

module.exports.login_get = (req, res) => {
    res.render('login')
}

/* 
------------------------------ 
        GET "dashboard"
------------------------------ 
*/

module.exports.dashboard_get = (req, res) => {
    res.render('dashboard')
}

/* 
------------------------------
        POST "register" new
------------------------------ 
*/

module.exports.register_post = async(req, res) => {
    const { username,  email, password } = req.body;
    
    try {
        const newUser = await User.create({username, email, password});
        res.status(201).json(newUser)
    } 
    catch (err) {
        const error = handleError(err)
        res.status(400).send({Error: "user not created", error})
    }
}

/* 
------------------------------ 
          POST "login" user
------------------------------
*/

module.exports.login_post = (req, res) => {
    const { email, password } = req.body;
    
    try {
        // res.status(201).json({ newUser })
    } 
    catch (err) {
        // res.status(500).json({ Error: err.message})
    }
}