
export default function HeapSort(){

    let arr = [4,6,2,9,1,2,5,1,5,2,7,11,0,29,10];
    let heapSize = arr.length;

    function maxHeapify(arr: number[], index: number){
        let left = (index << 1) + 1;
        let right = left + 1;

        let largest = index;
        if(left < heapSize && arr[left] > arr[index]){
            largest = left;
        }

        if(right < heapSize && arr[right] > arr[largest]){
            largest = right;
        }

        if(largest !== index){
            [arr[largest], arr[index]] = [arr[index], arr[largest]];
            maxHeapify(arr, largest);
        }
    }

    function buildMaxHeap(arr: number[]){
        for(let i = Math.floor(arr.length / 2); i >= 0; i--){
            maxHeapify(arr, i);
        }
    }

    function heapSort(arr: number[]){
        buildMaxHeap(arr);
        for(let i = arr.length - 1; i > 0; i--){
            [arr[0], arr[i]] = [arr[i], arr[0]];
            heapSize--;
            maxHeapify(arr, 0);
        }
    }
    
    console.time("Heap sort");
    heapSort(arr);
    console.timeEnd("Heap sort");
    console.log(arr);
    

    return (<div className="main-container">
        
    </div>);
}