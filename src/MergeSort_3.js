function MergeSort_3(name) {
    var me = this;

    // Properties
    me.name = name;
};

/**
 * Get name
 */
MergeSort_3.prototype.getName = function () {
    var me = this;
    return me.name;
};

/**
 * Set name
 */
MergeSort_3.prototype.setName = function (name) {
    var me = this;
    me.name = name;
};

MergeSort_3.prototype.sort = function (array) {

    if (array.length < 2) return array;

    let left = array.splice(0, array.length/2);


    return this.merge(this.sort(left), this.sort(array));
};

MergeSort_3.prototype.merge = function (left, right) {
    var res = [];

    while (true) {
        if (left.length == 0) return res.concat(right);

        if (right.length == 0) return res.concat(left);

        if (left[0] < right [0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }

    return res;
};

module.exports = MergeSort_3;