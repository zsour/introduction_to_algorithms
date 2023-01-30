
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

    findPredecessor(node: IBinaryNode): IBinaryNode{
            if(node.left){
                return this.findPredecessor(node.left);
            }else if(node.right){
                return this.findPredecessor(node.right);
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

    delete(nodeToDelete: IBinaryNode, currentNode: IBinaryNode | null = this.root): any{
        if(currentNode === null){
            return null;
        }

        if(currentNode === nodeToDelete){
            if(currentNode.left === null && currentNode.right === null){
                // When the node has no children, simply remove it.
                if(currentNode.parent){
                    // Not root.
                    if(currentNode.parent.left === currentNode){
                        this.size--;
                        currentNode.parent.left = null;
                        return currentNode;
                    }else if(currentNode.parent.right === currentNode){
                        this.size--;
                        currentNode.parent.right = null;
                        return currentNode;
                    }

                }else{
                    // Current node is root.
                    this.size--;
                    this.root = null;
                    return currentNode;
                }
            }

            if(currentNode.left && currentNode.right){
                // When the node has two children.
                let predecessor: IBinaryNode = this.findPredecessor(currentNode);

                if(currentNode.parent){
                    // Not root.

                    // Remove previous reference to predecessor from its parent.
                    if(predecessor.parent && predecessor.parent.left === predecessor){
                        predecessor.parent.left = null;
                    }else if(predecessor.parent && predecessor.parent.right === predecessor){
                        predecessor.parent.right = null;
                    }

                    if(currentNode.parent.left === currentNode){
                        currentNode.parent.left = predecessor;
                        predecessor.parent = currentNode.parent;
                        this.size--;
                        return currentNode;
                    }

                    if(currentNode.parent.right === currentNode){
                        currentNode.parent.right = predecessor;        
                        predecessor.parent = currentNode.parent;
                        this.size--;
                        return currentNode;
                    }
                }else{
                    // Current node id root.
                    this.root = predecessor;
                    predecessor.parent = null;
                    this.size--;
                    return currentNode;
                }

            }

            if(currentNode.left || currentNode.right){
                if(currentNode.parent){
                    if(currentNode.left){
                        if(currentNode.parent.left === currentNode){

                        }
                    }else if(currentNode.right){
    
                    }
                }else{
                    if(currentNode.left){
                        this.size--;
                        this.root = currentNode.left;
                        currentNode.left.parent = null;
                        return currentNode;
                    }else if(currentNode.right){
                        this.size--;
                        this.root = currentNode.right;
                        currentNode.right.parent = null;
                        return currentNode;
                    }
                }
            }
        }else{
            if(currentNode.value > nodeToDelete.value){
                return this.delete(nodeToDelete, currentNode.left);
            }else if(currentNode.value <= nodeToDelete.value){
                return this.delete(nodeToDelete, currentNode.left);
            }
        }

        return null;
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

    
    binarySearchTree.inOrderTreeWalk();
    
   
    

    return (<div className="main-container">
        
    </div>);
}