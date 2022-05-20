const data = require('./data/data.controller')
const users = require("./users/users.controller")

function features(app={}){
    users(app)
    data(app)
}

module.exports = features