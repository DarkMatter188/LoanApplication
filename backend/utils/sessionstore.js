const sessionstore=require('sessionstore');

var store=sessionstore.createSessionStore({

    type: 'mongodb',
        host: 'localhost',         // optional
        port: 3000,               // optional
        dbName: 'loan',            // optional
        collectionName: 'sessions',// optional
        timeout: 10000,
        url: 'mongodb://0.0.0.0:27017/loanApp'
});



module.exports=store;