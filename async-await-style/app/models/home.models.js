module.exports.sayHello = async function () {
    var data = new Promise(function (resolve, reject) {
        setTimeout(() => {
            var msg = "Hello world ! - async/await style";
            resolve(msg);
        }, 2000);
    });

    return await data;
}
