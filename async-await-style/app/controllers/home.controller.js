var homeModel = require("../models/home.models");

module.exports.sayHello = async function (req, res) {
    var msg = await homeModel.sayHello();
    res.end(msg);
}
