interface Array<T> {
    bubbleSort(this: number[]): void,
    mergeSort(this: number[]): void,
    quickSort(this: number[]): void
}

Array.prototype.bubbleSort = function(this: number[]) {
    console.log("bubble sort")
}

Array.prototype.mergeSort = function(this: number[]) {
    console.log("merge sort")
}

Array.prototype.quickSort = function(this:number[]) {
    console.log("quick sort")
}

const randomArr = [48, 8, 299, 19, 65, 87, 20, 132]
randomArr.bubbleSort()