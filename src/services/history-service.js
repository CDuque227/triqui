const History = require('../../../triqui/src/models/db/history');
var mongoose = require('mongoose');

let insertData = (values) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
            History.create(values, (err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            });
    }).
    catch((error) => {
        reject(false)
    })
}

let getData = async () =>{
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
            History.find({},(err, result) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(result);
                }
            });
    }).
    catch((error) => {
        reject(error)
    })
}

module.exports = {
    insertData,
    getData
}
