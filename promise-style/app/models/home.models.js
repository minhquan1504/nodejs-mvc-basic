module.exports.sayHello = function () {
    var data = new Promise(function (resolve, reject) {
        setTimeout(() => {
            var msg = "Hello world ! - Promise style";
            resolve(msg);
        }, 2000);
    });

    return data;
}
