const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');

// Do work here
// router.get('/', storeController.homePage);
// router.get('/add', storeController.addStore);
// router.post('/add', storeController.createStore);

// module.exports = router;


// router.get('/', (req,res) => {
//     /*const wes = { name: 'Wes', age: 100, cool: true };
//     //res.json(wes);
//     //res.json(req.query);
//     res.render('hello', {
//         name: 'Wes',
//         dog: req.query.dog
//     });
//     */
// });

router.get('/', storeController.homePage);

router.get('/add', storeController.addStore);

router.post('/add', storeController.createStore);

router.get('/reverse/:name', (req,res) => {
    const converse = [...req.params.name].reverse().join('');
    res.send(converse);
});

module.exports = router;