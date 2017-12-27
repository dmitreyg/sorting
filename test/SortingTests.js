let MergeSort = require('../src/MergeSort');
let MergeSort2 = require('../src/MergeSort_2');
let MergeSort3 = require('../src/MergeSort_3');
let InversionsCounter = require('../src/InversionsCounter');

module.exports = {
    setUp: function (callback) {
        this.mergeSort = new MergeSort();;
        this.mergeSort2 = new MergeSort2();
        this.mergeSort3 = new MergeSort3();
        this.inversionsCounter = new InversionsCounter();
        callback();
    },

    tearDown: function (callback) {
        // clean up
        callback();
    },

    testMerge1: function (test) {
        let left = [1,3,5];
        let right = [2,4,6];

        let res = this.mergeSort.merge(left, right);
        test.deepEqual(res, [1,2,3,4,5,6]);
        console.log()
        test.done();
    },

    testMergeSort1: function (test) {
        let src = [1, 3, 5, 2, 4, 6];
        let res = this.mergeSort.sort(src);
        test.deepEqual(res, [1, 2, 3, 4, 5, 6], 'merge sort test failed');
        test.done();
    },


    testMerge3: function (test) {
        let left = [1, 3, 5];
        let right = [2, 4, 6];
        let res = this.mergeSort3.merge(left, right);
        test.deepEqual(res, [1, 2, 3, 4, 5, 6]);
        test.done();
    },

    testMergeSort3: function (test) {
      let array = [1,3,5,2,4,6];
      let res = this.mergeSort3.sort(array);
      test.deepEqual(res, [1,2,3,4,5,6]);
      test.done();
    },

    testInversionsCounterMerge: function (test) {
        let left = [1, 3, 4];
        let right = [2, 5, 6];
        let res = this.inversionsCounter.merge(left, right);
        test.deepEqual(res, [1, 2, 3, 4, 5, 6]);
        test.done();
    },

    testInversionCounter: function (test) {
        let array = [1,3,5,2,4,6];
        let res = this.inversionsCounter.countInversions(array);
        test.deepEqual(3, this.inversionsCounter.getCount());
        test.done();
    }

};

