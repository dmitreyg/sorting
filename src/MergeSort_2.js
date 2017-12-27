function MergeSort_2(name) {
    var me = this;

    // Properties
    me.name = name;
};

/**
 * Get name
 */
MergeSort_2.prototype.getName = function () {
    var me = this;
    return me.name;
};

/**
 * Set name
 */
MergeSort_2.prototype.setName = function (name) {
    var me = this;
    me.name = name;
};

MergeSort_2.prototype.sort = function(arr) {
    var test = arr;
    if (arr.length < 2) return arr;

    let left = arr.splice(0, arr.length/2);
    let right = arr;


    this.merge(this.sort(left), this.sort(right));
};


MergeSort_2.prototype.merge = function (left, right) {
    let res = [];

    while(left.length > 0 || right.length > 0) {
        if (left.length == 0) {
            res = res.concat(right);
            break;
        }

        if (right.length == 0) {
            res = res.concat(left);
            break;
        }

        if (left[0] < right[0]) {
            res.push(left.shift());
        } else {
            res.push(right.shift());
        }
    }

    return res;
};

module.exports = MergeSort_2;