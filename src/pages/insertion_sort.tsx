import ArrayVisualizer from "../components/ArrayVisualizer";
import { useEffect, useState } from "react";
export default function InsertionSort(){

    function buildRandomArray(){
        let tmp = [1,2,3,4,5,6,7,8];
        for(let i = 0; i < 8; i++){
            let randomIndex = Math.floor(Math.random() * tmp.length);
            [tmp[i], tmp[randomIndex]] = [tmp[randomIndex], tmp[i]];
        }

        return tmp;
    }

    const [unsortedArr, setUnsortedArr] = useState<number[]>([]);
  

    useEffect(() => {
        if(unsortedArr.length === 0){
            let tmp = buildRandomArray();
            setUnsortedArr((prev: number[]) => {
                return tmp;
            });
        }
    }, []);

    let arrayCellOrder = [0,1,2,3,4,5,6,7];
    

    async function insertionSort(low: number, high: number){
        let arr = unsortedArr;
        for(let i = low; i < high; i++){
            
            let tmp = arr[i];
            let j = i - 1;
            while(j >= 0 && arr[j] > tmp){
                await swapAnimation(j+1, j).then(() => {
                    [arrayCellOrder[j+1], arrayCellOrder[j]] = [arrayCellOrder[j], arrayCellOrder[j+1]];
                    [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
                    j--;
                });
            } 
        }    
    }

    function getLeftPos(index: number){
        return index*58 + 10;
    }

    interface AnimationSequence{
        seq: AnimationStep[];
    }

    interface AnimationStep{
        delay: number;
        property: string;
        value: string;
    }

    function delay(ms: number){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, ms);
        });
    }

    function getCell(arrPos: number){
        return document.getElementById(`${arrayCellOrder[arrPos]}`);
    }

    async function stepByStepAnimation(element: HTMLElement | null, animationSequence: AnimationSequence){
        
        if(element){        
            for(let i = 0; i < animationSequence.seq.length; i++){     
                // @ts-ignore
                element.style[animationSequence.seq[i].property] = animationSequence.seq[i].value;
                await delay(animationSequence.seq[i].delay);
            }
        }
    }

    function swapAnimation(index1: number, index2: number){
        return new Promise((resolve, reject) => {
            let left = getCell(index1);
            let right = getCell(index2);
            let animationSequenceLeft: AnimationSequence = {seq: [
                {property: "top", delay: 400, value: "-55px"}, 
                {property: "left", delay: 400, value: `${getLeftPos(index2)}px`},
                {property: "top", delay: 400, value: `15px`}
            ]
            };
    
            let animationSequenceRight: AnimationSequence = {seq: [
                {property: "top", delay: 400, value: "70px"}, 
                {property: "left", delay: 400, value: `${getLeftPos(index1)}px`},
                {property: "top", delay: 400, value: `15px`}
            ]
            };
    
            if(left && right){
                let promises = [];
        
                promises.push(stepByStepAnimation(left, animationSequenceLeft));
                promises.push(stepByStepAnimation(right, animationSequenceRight));
    
                Promise.all(promises).then(() => {
                    resolve(true);
                });
            }
        });
    }

       
    function generateArrayCells(arr: number[]){
        let jsx = [];
        for(let i = 0; i < arr.length; i++){
            jsx.push(<span className="array-cell" style={{
                left: `${getLeftPos(i)}px`
            }} id={`${i}`} key={`${i}`}>
                <p className="array-cell-text">
                    {`${arr[i]}`}
                </p>
            </span>);
        }

        return jsx;
    }
    
    return (<div className="main-container">
        <ArrayVisualizer>

            {generateArrayCells(unsortedArr)}
        </ArrayVisualizer>


        <div className="transition-button" onClick={() => {
            insertionSort(0, unsortedArr.length);
        }}>
            <p>Sort!</p>
        </div>
    </div>);
}