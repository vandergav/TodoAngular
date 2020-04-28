// var db = require('../dbconnection.js');
// db.connect((err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('MySql Connected...')
// })

//@desc     Sign-in transaction
//@route    PUT /api/v1/transactions/sign-in
//@access   Protected
exports.signinTransaction = async (db, req, res, next) => {
    const username = req.body.username
    const password = req.body.password
    // if (username === 'demo' && password === 'demo') {
    //     res.json({
    //         name: 'SitePoint Reader',
    //         token: jwtToken
    //     });
    // }
    res.send(422, 'Invalid username and password');
}