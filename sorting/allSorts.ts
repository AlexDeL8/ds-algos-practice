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

function mergeSort(nums: number[]): number[] {
    debugger;
    if (nums.length < 2) return nums;
	let mid = Math.floor(nums.length / 2);
	let left = nums.slice(0, mid);
	let right = nums.slice(mid);
	
	function merge(left: number[], right: number[]) {
        debugger;
		let result = []
		let lLen = left.length
		let rLen = right.length 
		let l = 0
		let r = 0;
		while(l < lLen && r < rLen) {
			if(left[l] < right[r]) {
				result.push(left[l]);
                l++
			}
			else {
				result.push(right[r]);
                r++
			}
		}  
		return result.concat(left.slice(l)).concat(right.slice(r));
	}
	return merge(mergeSort(left), mergeSort(right));
}

Array.prototype.quickSort = function(this:number[]) {
    console.log("Starting quick sort")
    debugger;
}

const randomArr1 = [48, 8, 299, 19, 65, 87, 20, 132]
randomArr1.bubbleSort()

const randomArr2 = [543, 700, 56, 90, 123, 24, 5, 999]
console.log("Starting merge sort")
const randomArr2Sorted = mergeSort(randomArr2)
console.log(`SORTED: ${randomArr2Sorted}`)

const randomArr3 = [774, 10, 45, 87, 436, 1, 8, 10]
randomArr3.quickSort()
