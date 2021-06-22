var homeModel = require("../models/home.models");

module.exports.sayHello = function (req, res) {
    var msg = homeModel.sayHello();
    msg.then(
        function (value) {
            res.end(value);
        },
        function (error) {
            console.log(error);
        }
    )
}
