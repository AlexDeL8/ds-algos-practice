interface Array<T> {
    bubbleSort(this: number[]): void,
    mergeSort(this: number[]): void,
    quickSort(this: number[]): void
}

async function closureLog(log: string) {
    await setTimeout(() => console.log(log), 1000)
}

Array.prototype.bubbleSort = async function(this: number[]) {
    console.log("Starting bubble sort")
    debugger;
    for(let limit = this.length-1; limit > 0; limit--) {
        let left = 0
        let right = 1
        let swapped = false
        while(right <= limit) {
            if(this[right] < this[left]) {
                let temp = this[left]
                this[left] = this[right]
                this[right] = temp
                swapped = true
                await closureLog(`${this} \n`)
            }
            left++
            right++
        }
        if(!swapped) {
            console.log("Didn't perform any swaps, array is sorted")
            break
        }
    }
    console.log(`SORTED: ${this}`)
}

Array.prototype.mergeSort = function(this: number[]) {
    console.log("Starting merge sort")
    debugger;
}

Array.prototype.quickSort = function(this:number[]) {
    console.log("Starting quick sort")
    debugger;
}

const randomArr1 = [48, 8, 299, 19, 65, 87, 20, 132]
randomArr1.bubbleSort()

const randomArr2 = [543, 700, 56, 90, 123, 24, 5, 999]
randomArr2.mergeSort()

const randomArr3 = [774, 10, 45, 87, 436, 1, 8, 10]
randomArr3.quickSort()
