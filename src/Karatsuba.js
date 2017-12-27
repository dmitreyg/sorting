var bigdecimal = require("bigdecimal");

function Karatsuba(name) {
    var me = this;

    // Properties
    me.name = name;
};

/**
 * Get name
 */
Karatsuba.prototype.getName = function () {
    var me = this;
    return me.name;
};

/**
 * Set name
 */
Karatsuba.prototype.setName = function (name) {
    var me = this;
    me.name = name;
};

Karatsuba.prototype.multiply = function (x, y) {
    if (x.length < 2 && y.length < 2) return parseInt(x) * parseInt(y);

    let n = Math.max(x.length, y.length);
    let m = parseFloat(Math.ceil(n/2));

    let x_H = Math.floor(parseFloat (x)/Math.pow(10, m));
    let x_L = parseFloat(x) % Math.pow(10, m);

    let y_H = Math.floor(parseFloat(y) / Math.pow(10, m));
    let y_L = parseFloat(y) % Math.pow(10, m);

    let a = this.multiply(x_H.toString(), y_H.toString());
    let d = this.multiply(x_L.toString(), y_L.toString());
    let e = this.multiply((x_H + x_L).toString(), (y_H + y_L).toString()) - a - d;

    return a*(Math.pow(10, m*2)) + e*Math.pow(10, m) + d;
};

module.exports = Karatsuba;