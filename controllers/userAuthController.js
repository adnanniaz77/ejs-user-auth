module.exports.home_get = (req, res) => {
    res.render('home')
}

module.exports.register_get = (req, res) => {
    res.render('register')
}

module.exports.login_get = (req, res) => {
    res.render('login')
}

module.exports.dashboard_get = (req, res) => {
    res.render('dashboard')
}

module.exports.register_post = (req, res) => {
    res.send("Registration")
}

module.exports.login_post = (req, res) => {
    res.send('login user')
}