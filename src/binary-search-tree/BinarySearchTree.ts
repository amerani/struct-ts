import { BinaryTreeNode, IBinaryTreeNode } from "./BinaryTreeNode";

export interface IBinarySearchTree<K, V> {
      root: IBinaryTreeNode<K, V>;
      search(key: K, node: IBinaryTreeNode<K, V>): IBinaryTreeNode<K, V>;
      insert(key: K, value: V, node: IBinaryTreeNode<K, V>): IBinaryTreeNode<K, V>;
      delete(key: K, node: IBinaryTreeNode<K, V>): void;
      traverse(callback: TraverseFunc<K, V>, node: IBinaryTreeNode<K, V>): void;
}

export type TraverseFunc<K, V> = (node: IBinaryTreeNode<K, V>) => void;

export class BinarySearchTree<K, V> implements IBinarySearchTree<K, V> {
      public root: IBinaryTreeNode<K, V>;
      public size: number;

      constructor() {
            this.root = null;
            this.size = 0;
      }

      public search(key: K, node?: IBinaryTreeNode<K, V>): IBinaryTreeNode<K, V> {
            if (node === null || node.key === key) { return node; }
            if (key < node.key) {
                  return this.search(key, node.left);
            }
            if (key > node.key) {
                  return this.search(key, node.right);
            }
      }

      public insert(key: K, value: V, node: IBinaryTreeNode<K, V>): IBinaryTreeNode<K, V> {
            if (node == null) {
                  const newNode = new BinaryTreeNode(key, value, null, null, node.parent);
                  if(this.root === null) {
                        this.root = newNode;
                  }
                  this.size += 1;
                  return newNode;
            }
            if (key === node.key) {
                  return new BinaryTreeNode(key, value, node.left, node.right, node);
            }
            if (key < node.key) {
                  return new BinaryTreeNode(
                        node.key,
                        node.value,
                        this.insert(key, value, node.left),
                        node.right,
                        node,
                  );
            }
            return new BinaryTreeNode(
                  node.key,
                  node.value,
                  node.left,
                  this.insert(key, value, node.right),
                  node,
            );
      }

      public delete(key: K, node?: IBinaryTreeNode<K, V>): void {
            if (node == null) return;
            if (key < node.key) {
                  this.delete(key, node.left);
                  return;
            }
            if (key > node.key) {
                  this.delete(key, node.right);
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
                  this.delete(successor.key, successor);
                  this.size -= 1;
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

      public traverse(callback: TraverseFunc<K, V>, node: IBinaryTreeNode<K, V>) {
            if (node == null) { return; }
            this.traverse(callback, node.left);
            callback(node);
            this.traverse(callback, node.right);
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
