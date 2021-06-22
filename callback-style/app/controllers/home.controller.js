var homeModel = require("../models/home.models");

module.exports.sayHello = function (req, res) {
    homeModel.sayHello(function (msg) {
        res.end(msg);
    });
}
