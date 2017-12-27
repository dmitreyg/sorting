/**
 * Created by dima on 7/28/2017.
 */


let Heap = (function () {





})();


let heapSort = (function() {

return {

    minHeapify: function (arr, i) {
        let left = i*2 + 1;
        let right = i*2 + 2;
        let smallest = i;
        let heapSize = arr.length;

        //console.log('minHeapify (' + i + ')' );

        if (left < heapSize && arr[left] < arr[smallest]) {
            smallest = left;
        }

        if (right < heapSize && arr[right] < arr[smallest]) {
            smallest = right;
        }

        if (smallest !== i) {
            this.swap(arr, smallest, i);
            this.minHeapify(arr, smallest);
        }
    },

    maxHeapify: function (arr, i) {
        //maintain heap property: for every node other than root a[parent(i)] >= a[i]
        //root must be larger than its children
        console.log('maxHeapify (' + i + ')' );

        let left = i*2 + 1;
        let right = i*2 + 2;
        let heapSize = arr.length;
        let largest = i;



        if (left < heapSize && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            this.swap(arr, i, largest);
            this.maxHeapify(arr, largest);
        }
    },

    sort: function (arr) {
        let res = [];
        for (let i = arr.length -1; i >= 0; i--) {
            this.buildHeap(arr);
            res.push(arr[0]);
            arr.splice(0,1);
        }
        return res;
    },

    swap: function (arr, i, j) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    },

    buildHeap: function (arr) {
        for (let i = Math.floor(arr.length/2); i >= 0; i--) {
            this.minHeapify(arr, i);
        }

        return arr;
    },

    print: function (arr) {
        arr.map(a=>console.log(a + ','));
    }
}

})();

let array = [5,3,6,9,4,7,5,4,2,8];
let res = heapSort.sort(array);
//let res = heapSort.buildHeap(array);
heapSort.print(res);

//heapSort.maxHeapify(array, 0);
//heapSort.print(array);
//heapSort.minHeapify(array, 0);
//heapSort.print(array);





