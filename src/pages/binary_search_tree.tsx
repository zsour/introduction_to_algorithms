
interface IBinaryNode{
    left: IBinaryNode | null;
    right: IBinaryNode | null;
    parent: IBinaryNode | null;
    value: number;
}


interface IBinarySearchTree{
    insert: Function;
    delete: Function;
    inOrderTreeWalk: Function;
    root: IBinaryNode | null;
    size: number;
}

class BinarySearchTree implements IBinarySearchTree{

    root: IBinaryNode | null;
    size: number;
    constructor() {
        this.size = 0;
        this.root = null;
    }

    findPredecessor(node: IBinaryNode | null): IBinaryNode | null{
            if(!node){
                return null;
            }

            if(node.left){
                return this.findPredecessor(node.left);
            }else{
                return node;
            }
    }


    insert(nodeToInsert: IBinaryNode, currentNode: IBinaryNode | null = this.root){

        if(this.root === null){

            this.root = nodeToInsert;
            this.size++;
            return;
        }


        if(currentNode){
            if(currentNode.value > nodeToInsert.value){
                if(currentNode.left === null){
                    currentNode.left = nodeToInsert;
                    nodeToInsert.parent = currentNode;
                    return;
                }else{
                    this.insert(nodeToInsert, currentNode.left);
                }
            }
    
            if(currentNode.value <= nodeToInsert.value){
                if(currentNode.right === null){
                    currentNode.right = nodeToInsert;
                    nodeToInsert.parent = currentNode;
                    return;
                }else{
                    this.insert(nodeToInsert, currentNode.right);
                }
            }
        }

    }

    delete(nodeToDelete: IBinaryNode | null | undefined, currentNode: IBinaryNode | null = this.root): any{
        if(!nodeToDelete || !currentNode){
            return null;
        }else if(nodeToDelete.value < currentNode.value){
            currentNode.left = this.delete(nodeToDelete, currentNode.left);
            return currentNode;
        }else if(nodeToDelete.value > currentNode.value){
            currentNode.left = this.delete(nodeToDelete, currentNode.left);
            return currentNode;
        }else{
            if(currentNode.left === null && currentNode.right === null){
                currentNode = null;
                return currentNode;
            }

            if(nodeToDelete.left === null){
                currentNode = currentNode.right;
                return currentNode;
            }else if(nodeToDelete.right === null){
                currentNode = currentNode.left;
                return currentNode;
            }


            let aux = this.findPredecessor(currentNode.right);
            if(aux){
                currentNode.value = aux.value;
                currentNode.right = this.delete(aux, currentNode.right);
                return currentNode;
            }
        }
    }


    inOrderTreeWalk(currentNode: IBinaryNode | null = this.root){
        if(currentNode !== null){
            if(currentNode.left !== null){
                this.inOrderTreeWalk(currentNode.left)
            }

                console.log(currentNode.value);
                

            if(currentNode.right !== null){
                this.inOrderTreeWalk(currentNode.right);
            }
        }
    }
}


export default function BinarySearchTreePage(){

    let binarySearchTree = new BinarySearchTree();
    let node: IBinaryNode = {left: null, right: null, value: 5, parent: null};
     
    binarySearchTree.insert(node);


    let nodes: IBinaryNode[] = [
        {left: null, right: null, value: 2, parent: null},
        {left: null, right: null, value: 4, parent: null},
        {left: null, right: null, value: 3, parent: null},
        {left: null, right: null, value: 6, parent: null},
    ];

    for(let i = 0; i < nodes.length; i++){
        binarySearchTree.insert(nodes[i]);
    }
    
    console.log(binarySearchTree.delete(binarySearchTree.root?.right, binarySearchTree.root));

    binarySearchTree.inOrderTreeWalk();

    

    return (<div className="main-container">
        
    </div>);
}