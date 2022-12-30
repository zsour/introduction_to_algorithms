
export default function RadixSort(){

    let arr = ["452","612","211","947","177","332","139","930","589", "888", "634", "271", "123", "844"];
    
    function countingSort(arr: string[], k: number, digit: number){
        let b = [];
        let c = [];

        for(let i = 0; i <= k; i++){
            c.push(0);
        }
        
        for(let i = 0; i < arr.length; i++){
            let index = Number(arr[i].at(digit));   
            c[index] += 1;
        }

        for(let i = 1; i < c.length; i++){
            c[i] += c[i-1];
        }
  
        for(let i = arr.length - 1; i >= 0; i--){
            let index = Number(arr[i].at(digit));
            b[c[index] - 1] = arr[i];
            c[index] = c[index] - 1;
        }

        return b;
    }

    function radixSort(arr: string[], digit: number){
        for(let i = digit - 1; i >= 0; i--){
            arr = countingSort(arr, 9, i);
        }

        return arr;
    }

    console.time("Radix sort");
    let sorted = radixSort(arr, 3);
    console.timeEnd("Radix sort");
    console.log(sorted);
    
    
    return (<div className="main-container">
        
    </div>);
}