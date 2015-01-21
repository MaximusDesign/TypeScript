//// [emitDefaultParametersFunctionExpressionES6.ts]
var lambda1 = (y = "hello") => { }
var lambda2 = (x: number, y = "hello") => { }
var lambda3 = (x: number, y = "hello", ...rest) => { }
var lambda4 = (y = "hello", ...rest) => { }

var x = function (str = "hello", ...rest) { }
var y = (function (num = 10, boo = false, ...rest) { })()
var z = (function (num: number, boo = false, ...rest) { })(10)

//// [emitDefaultParametersFunctionExpressionES6.js]
var lambda1 = function (y = "hello") {
};
var lambda2 = function (x, y = "hello") {
};
var lambda3 = function (x, y = "hello", ...rest) {
};
var lambda4 = function (y = "hello", ...rest) {
};
var x = function (str = "hello", ...rest) {
};
var y = (function (num = 10, boo = false, ...rest) {
})();
var z = (function (num, boo = false, ...rest) {
})(10);
