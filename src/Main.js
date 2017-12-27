let mergeSort = require('./MergeSort');
let karatsuba = require('./Karatsuba');
var bigdecimal = require("bigdecimal");

let kara = new karatsuba;

let res = kara.multiply("3141592653589793238462643383279502884197169399375105820974944592", "2718281828459045235360287471352662497757247093699959574966967627");

console.log(new bigdecimal.BigDecimal(res));

/*
let sort = new mergeSort();
sort.setName('Test Name');
console.log('Name: ' + sort.getName());

let r = sort.sort([9,3,0,5,6]);

console.log(r);
    */