import { BinaryTreeNode, IBinaryTreeNode } from "./BinaryTreeNode";

export interface IBinarySearchTree<K, V> {
      root: IBinaryTreeNode<K, V>;
      size: number;
      search(key: K): IBinaryTreeNode<K, V>;
      insert(key: K, value: V): void;
      delete(key: K): void;
      traverse(callback: TraverseFunc<K, V>): void;
      min(): IBinaryTreeNode<K, V>;
      max(): IBinaryTreeNode<K, V>;
}

export type TraverseFunc<K, V> = (node: IBinaryTreeNode<K, V>) => void;

export class BinarySearchTree<K, V> implements IBinarySearchTree<K, V> {
      public root: IBinaryTreeNode<K, V>;
      public size: number;

      constructor() {
            this.root = null;
            this.size = 0;
      }

      public insert(key: K, value: V): void {
            this.insertRecursive(key, value, this.root);
      }

      public search(key: K): IBinaryTreeNode<K, V> {
            return this.searchRecursive(key, this.root);
      }

      public delete(key: K): void {
            this.deleteRecursive(key, this.root);
      }

      public traverse(callback: TraverseFunc<K, V>): void {
            this.traverseRecursive(callback, this.root);
      }

      public min(node?: IBinaryTreeNode<K, V>) {
            if (node == null) { node = this.root; }
            let curNode = node;
            while (curNode.left) {
                  curNode = curNode.left;
            }
            return curNode;
      }

      public max(node?: IBinaryTreeNode<K, V>) {
            if (node == null) { node = this.root; }
            let curNode = node;
            while (curNode.right) {
                  curNode = curNode.right;
            }
            return curNode;
      }

      private searchRecursive(key: K, node: IBinaryTreeNode<K, V>): IBinaryTreeNode<K, V> {
            if (node === null || node.key === key) { return node; }
            if (key < node.key) {
                  return this.searchRecursive(key, node.left);
            }
            if (key > node.key) {
                  return this.searchRecursive(key, node.right);
            }
      }

      private insertRecursive(key: K, value: V, node: IBinaryTreeNode<K, V>): IBinaryTreeNode<K, V> {
            if (node == null) {
                  node = new BinaryTreeNode(key, value, null, null, node);
                  this.size += 1;
            } else if (key === node.key) {
                  node.value = value;
            } else if (key < node.key) {
                  node.left = this.insertRecursive(key, value, node.left);
                  node.left.parent = node;
            } else {
                  node.right = this.insertRecursive(key, value, node.right);
                  node.right.parent = node;
            }
            if (this.root == null) { this.root = node; }
            return node;
      }

      private deleteRecursive(key: K, node: IBinaryTreeNode<K, V>): void {
            if (node == null) { return; }
            if (key < node.key) {
                  this.deleteRecursive(key, node.left);
                  return;
            }
            if (key > node.key) {
                  this.deleteRecursive(key, node.right);
                  return;
            }
            // both children
            if (node.left && node.right) {
                  // successor = right sub tree's left most child
                  const successor = this.min(node.right);
                  // copy successor key and value to node
                  node.key = successor.key;
                  node.value = successor.value;
                  // delete successor
                  this.deleteRecursive(successor.key, successor);
            } else if (node.left) {
                  // set node's parent to left child
                  this.replaceNodeParent(node, node.left);
                  this.size -= 1;
            } else if (node.right) {
                  // set node's parent to right child
                  this.replaceNodeParent(node, node.right);
                  this.size -= 1;
            } else {
                  // set node's parent to null
                  this.replaceNodeParent(node, null);
                  this.size -= 1;
            }
      }

      private traverseRecursive(callback: TraverseFunc<K, V>, node: IBinaryTreeNode<K, V>) {
            if (node == null) { return; }
            this.traverseRecursive(callback, node.left);
            callback(node);
            this.traverseRecursive(callback, node.right);
      }

      private replaceNodeParent(node: IBinaryTreeNode<K, V>, newNode?: IBinaryTreeNode<K, V>) {
            if (node.parent) {
                  if (node.parent.left) {
                        node.parent.left = newNode;
                  } else {
                        node.parent.right = newNode;
                  }
            }
            if (newNode) {
                  newNode.parent = node.parent;
            }
      }
}
