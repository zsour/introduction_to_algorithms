
export default function QuickSort(){

    let arr = [4,6,2,9,1,2,5,1,5,2,7,11,0,29,10];
    
    function partition(arr: number[], left: number, right: number){
        let tmp = left;
        let pivot = arr[left];
    
        while(left <= right){
            while(arr[left] < pivot) left++;
            while(arr[right] > pivot) right--;

            if(left <= right){
                [arr[left], arr[right]] = [arr[right], arr[left]];
                left++;
                right--;
            } 
        }

        [arr[left - 1], arr[tmp]] = [arr[tmp], arr[left - 1]];
        return left;
    }

    function randomizedPartition(arr: number[], left: number, right:number){
        let randomIndex = Math.floor((Math.random() * (right - left)) + left);
        [arr[randomIndex], arr[left]] = [arr[left], arr[randomIndex]];
        return partition(arr, left, right);
    }

    function quickSort(arr: number[], left: number, right: number){
        if(left >= right) return;

        let pivot = randomizedPartition(arr, left, right);            
        quickSort(arr, left, pivot-1);
        quickSort(arr, pivot, right);
    }

    console.time("Quick sort");
    quickSort(arr, 0, arr.length -1);
    console.timeEnd("Quick sort");
    console.log(arr);
    

    return (<div className="main-container">
        
    </div>);
}