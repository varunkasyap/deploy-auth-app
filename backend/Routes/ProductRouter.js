const ensureAuthenticated = require('../Middlewares/Auth');

const router = require('express').Router();

router.get('/', ensureAuthenticated, (req, res) => {
    res.status(200).json([
        {
            name: "Equity Value",
            price: 5634
        },
        {
            name: "Commodity Value",
            price: 2345
        },
        {
            name: "Currency Value",
            price: 1234
        }
    ]);
});

module.exports = router;


// const ensureAuthenticated = require('../Middlewares/Auth');

// const router = require('express').Router();

// router.get('/', ensureAuthenticated, (req, res) => {
//     console.log('---- logged in user detail ---', req.user);
//     res.status(200).json([
//         {
//             name: "mobile",
//             price: 10000
//         },
//         {
//             name: "tv",
//             price: 20000
//         }
//     ])
// });

// module.exports = router;