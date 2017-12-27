function InversionsCounter(name) {
    let me = this;

    // Properties
    me.name = name;
    me.count = 0;
};

/**
 * Get name
 */
InversionsCounter.prototype.getName = function () {
    let me = this;
    return me.name;
};

/**
 * Set name
 */
InversionsCounter.prototype.setName = function (name) {
    var me = this;
    me.name = name;
};

/**
 * Get name
 */
InversionsCounter.prototype.getCount = function () {
    let me = this;
    return me.count;
};


InversionsCounter.prototype.countInversions = function (array) {
    if (array.length < 2) return array;

    var left = array.splice(0, array.length/2);

    return this.merge(this.countInversions(left), this.countInversions(array));
}


InversionsCounter.prototype.merge = function (left, right) {
    var me = this;
    let res = [];

    while (true) {

        if (left.length == 0) {
            return res.concat(right);
        }

        if (right.length == 0) {
            return res.concat(left);
        }


        if (left[0] < right [0]) {
            res.push(left.shift());
        } else {
            me.count += left.length;
            res.push(right.shift());
        }
    }

    return res;
}


module.exports = InversionsCounter;