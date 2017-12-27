function MergeSort(name) {
    var me = this;

    // Properties
    me.name = name;
};

/**
 * Get name
 */
MergeSort.prototype.getName = function () {
    var me = this;
    return me.name;
};

/**
 * Set name
 */
MergeSort.prototype.setName = function (name) {
    var me = this;
    me.name = name;
};

MergeSort.prototype.sort = function (arr) {
    if (arr.length < 2) return arr;

    let left = arr.splice(0, arr.length/2);
    let right = arr;

    let res = this.merge(this.sort(left), this.sort(right));

    return res;
}


MergeSort.prototype.merge = function (arrA, arrB) {
    var res = [];
    let j = 0;
    let i = 0;

    while (i != arrA.length || j != arrA.length) {

        if (i == arrA.length) {
            res = res.concat(arrB.splice(j, arrB.length - j));
            break;
        }

        if (j == arrB.length) {
            res = res.concat(arrA.splice(i, arrA.length - i));
            break;
        }

        if (arrA[i] < arrB[j]) {
            res.push(arrA[i++]);
        } else {
            res.push(arrB[j++]);
        }
    }

    return res;
};

module.exports = MergeSort;
