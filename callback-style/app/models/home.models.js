module.exports.sayHello = function (callback) {
    setTimeout(() => {
        var msg = "Hello world ! - callback style";
        callback(msg);
    }, 2000);
}
