
export default function MergeSort(){
    let arr = [4,6,2,9,1,2,5,1,5,2,7,11,0,29,10,8];


    function merge(arr: number[], low: number, middle: number, high: number){
        let nl = middle - low + 1;
        let nr = high - middle;

        let left = [];
        let right = [];

        for(let i = 0; i < nl; i++){
            left.push(arr[low+i]);
        }

        for(let i = 0; i < nr; i++){
            right.push(arr[middle + i + 1]);
        }
        

        let i = 0;
        let j = 0;
        let k = low;

        while(i < nl && j < nr){
            if(left[i] <= right[j]){
                arr[k] = left[i];
                i++;
            }else{
                arr[k] = right[j];
                j++;
            }

            k++;
        }

        while(i < nl){
            arr[k] = left[i];
            i++;
            k++;
        }

        while(j < nr){
            arr[k] = right[j];
            j++;
            k++;
        }
        
    }  

    function mergeSort(arr: number[], low: number, high: number){
        if(low >= high){
            return;
        }

        let middle = low + Math.floor((high - low) / 2);

        mergeSort(arr, low, middle);
        mergeSort(arr, middle + 1, high);
        merge(arr, low, middle, high);
    }


    // Fix - first index is undefined.
    console.log(arr);
    mergeSort(arr, 0, arr.length);
    console.log(arr);
    

    return (<div className="main-container">
        
    </div>);
}