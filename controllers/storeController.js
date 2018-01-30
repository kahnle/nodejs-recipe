
/*
exports.homePage = (req,res) => {
    console.log(req.name);
    res.render('hello');
}

exports.addStore = (req, res) => {
    //res.send('It works');
    res.render('editStore', { title: 'Add Store' });
}

exports.createStore = (req, res) => {
    res.json(req.body);
}
*/

/*
exports.myMiddleware = (req, res, next) => {
    req.name = 'Wes';
    if(req.name == 'Wes') {
        throw Error('That is a stupid name');
    }
    next();
};

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');
};
*/
const mongoose = require('mongoose');
const Store    = mongoose.model('Store');

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index');
}

exports.addStore = (req, res) => {
    res.render('editStore', { title: 'Add Store' });
}

exports.createStore = async (req, res) => {
    //res.json(req.body);
    const store = new Store(req.body);
    await store.save();
    console.log('It works!');
}