
let array = [6,3,8,4,9,1,2];
let n = array.length;


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    this.root = buildTree(array)
  }
    }

function sortArray(array) {
  const sorted = array.sort((a,b) => a - b);
  return sorted;
}

function deleteDuplicates(array) {
  const uniques = [...new Set(array)];
  return uniques;
}

function sortedArrayToBST(array, start, end) {
  if (start > end) {
    return null;
  }
  let mid = parseInt((start + end) / 2);
  let newNode = new Node(array[mid]);
  newNode.left = sortedArrayToBST(array, start, mid - 1);
  newNode.right = sortedArrayToBST(array, mid + 1, end);
  return newNode;
}

function buildTree(array) {
  const sortedArray = sortArray(array);
  const uniqueValuesArray = deleteDuplicates(sortedArray);
  const n = uniqueValuesArray.length;
  const root = sortedArrayToBST(uniqueValuesArray, 0, n - 1);
  return root;
}

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

let newTree = new Tree(array);
console.log(newTree)
prettyPrint(newTree.root);