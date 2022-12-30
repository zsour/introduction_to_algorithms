
export default function BucketSort(){

    let arr = [0.44, 0.92, 0.12, 0.08, 0.89, 0.32, 0.21, 0.85, 0.53, 0.39, 0.02, 0.35, 0.18, 0.76];

    function insertionSort(arr: number[]){
        for(let i = 1; i < arr.length; i++){
            let tmp = arr[i];
            let j = i - 1;

            while(j >= 0 && arr[j] > tmp){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    
    function bucketSort(arr: number[]){
        let buckets: number[][] = [];
        for(let i = 0; i <= 10; i++){
            buckets.push([]);
        }

        for(let i = 1; i <= arr.length; i++){
            buckets[Math.floor(10 * arr[i - 1])].push(arr[i - 1]);
        }

        let result = [];
        for(let i = 0; i < buckets.length; i++){
            insertionSort(buckets[i]);
            result.push(...buckets[i]);
        }

        return result;
    }

    console.time("Bucket sort");
    let sorted = bucketSort(arr);
    console.timeEnd("Bucket sort");
    console.log(sorted);
    
    
    return (<div className="main-container">
        
    </div>);
}