
interface IPriorityElement{
    priority: number;
    name: string;
}

interface IMinHeap{
    arr: IPriorityElement[];
    minHeapify: Function;
    buildMinHeap: Function;
    getMin: Function;
    insert: Function;
    heapSize: number;
}

class MinHeap implements IMinHeap{

    arr: IPriorityElement[];
    heapSize: number;

    constructor(arr: IPriorityElement[]){
        this.arr = arr;
        this.buildMinHeap();
        this.heapSize = arr.length;
    }

    minHeapify(arr: IPriorityElement[], index: number){
        let left  = (index << 1) + 1;
        let right = (left + 1);

        let min = index;
        if(left < this.heapSize && arr[left].priority < arr[index].priority){
            min = left;
        }

        if(right < this.heapSize && arr[right].priority < arr[index].priority){
            min = right;
        }

        if(min !== index){
            [arr[index], arr[min]] = [arr[min], arr[index]];
            this.minHeapify(arr, min);
        }
    }

    buildMinHeap(){
        for(let i = Math.floor(this.arr.length / 2); i >= 0; i--){
            this.minHeapify(this.arr, i);
        }
    }   

    parent(pos: number){
        return Math.floor(pos / 2);
    }

    insert(element: IPriorityElement){
        console.log(this.heapSize);
        this.heapSize += 1;

        if(this.heapSize === 0){
            this.arr[0] = element;
            return;
        }

        let pos = this.heapSize + 1;
        this.arr[pos] = element;
        let parent = this.parent(pos);

        while(this.arr[pos].priority < this.arr[parent].priority){
            [this.arr[pos], this.arr[parent]] = [this.arr[parent], this.arr[pos]];
            pos = parent;
            parent = this.parent(pos);
        }   
    }

    getMin(): IPriorityElement | undefined{        
        let popped = this.arr[0];
        let tmp = this.heapSize - 1;

        if(this.heapSize === 0){
            return undefined;
        }

        if(this.heapSize === 1){
            this.heapSize--;
            return popped; 
        }
        [this.arr[0], this.arr[tmp]] = [this.arr[tmp], this.arr[0]];
        this.heapSize--;
        this.minHeapify(this.arr, 0);
        
        return popped;
    }
}




export default function PriorityQueue(){

    let listOfItems: IPriorityElement[] =   [   {priority: 1, name: "Daniel"}, 
                                                {priority: 2, name: "Jesper"},
                                                {priority: 7, name: "Johan"}, 
                                                {priority: 3, name: "Niklas"}, 
                                                {priority: 4, name: "Rasmus"}, 
                                                {priority: 3, name: "Omar"}, 
                                                {priority: 1, name: "Rune"}, 
                                                {priority: 1, name: "Yvonne"},  
                                            ];
    let minHeap = new MinHeap(listOfItems);
    let min = minHeap.getMin();

    while(min !== undefined){
        console.log(min);
        min = minHeap.getMin();
    }


    


    return (<div className="main-container">
        
    </div>);
}