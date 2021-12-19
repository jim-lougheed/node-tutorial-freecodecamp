const authorize = (req, res, next) => {
    const { user } = req.query;
    if (user === 'jim') {
        req.user = { name: 'jim', id: 3}
        next();
    } else {
        res.status(401).send('Unathorized')
    }
}

module.exports = authorize;