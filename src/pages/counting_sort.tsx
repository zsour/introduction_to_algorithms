
export default function CountingSort(){

    let arr = [4,6,2,9,1,2,5,1,5,2,7,11,0,29,10];
    
    function countingSort(arr: number[], k: number){
        let b = [];
        let c = [];

        for(let i = 0; i <= k; i++){
            c.push(0);
        }
        
        for(let i = 0; i < arr.length; i++){
            c[arr[i]] += 1;
        }

        for(let i = 1; i < c.length; i++){
            c[i] += c[i-1];
        }
  
        for(let i = arr.length - 1; i >= 0; i--){
            b[c[arr[i]] - 1] = arr[i];
            c[arr[i]] = c[arr[i]] - 1;
        }

        return b;
    }

    function findMax(arr: number[]){
        let largest = arr[0];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] > largest) largest = arr[i];
        }
        return largest;
    }

    console.time("Counting sort");
    let sorted = countingSort(arr, findMax(arr));
    console.timeEnd("Counting sort");
    console.log(sorted);
    
    return (<div className="main-container">
        
    </div>);
}