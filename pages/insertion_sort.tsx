
export default function InsertionSort(){
    let arr = [4,6,2,9,1,2,5,1,5,2,7,11,0,29,10];


    function insertionSort(arr: number[], low: number, high: number){
        for(let i = low; i < high; i++){
            let tmp = arr[i];
            let j = i - 1;
            while(j >= 0 && arr[j] > tmp){
                arr[j+1] = arr[j];
                j--;
            }
            arr[j+1] = tmp;
        }
    }

    console.log(arr, 0, arr.length);
    insertionSort(arr, 0, arr.length);
    console.log(arr);
    
    return (<div className="main-container">
        
    </div>);
}