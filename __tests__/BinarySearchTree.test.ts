import { BinarySearchTree } from "../src";

let tree: BinarySearchTree<number, number>;
beforeEach(() => {
      tree = new BinarySearchTree<number, number>();
});

test("should be empty", () => {
      expect(tree.size).toBe(0);
      expect(tree.root).toBeNull();
});

test("should be size 1", () => {
      tree.insert(1, 1);
      expect(tree.size).toBe(1);
      expect(tree.root.key).toBe(1);
      expect(tree.root.value).toBe(1);
});

test("should insert to right", () => {
      tree.insert(1, 1);
      tree.insert(2, 2, tree.root);
      expect(tree.size).toBe(2);
      expect(tree.root.right.value).toBe(2);
});

test("should insert to left", () => {
      tree.insert(3, 0);
      tree.insert(2, 0, tree.root);
      tree.insert(4, 0, tree.root);
      expect(tree.size).toBe(3);
      expect(tree.root.left.key).toBe(2);
      expect(tree.root.right.key).toBe(4);
});

test("should search", () => {
      tree.insert(3, -3);
      tree.insert(2, -2, tree.root);
      tree.insert(4, 0, tree.root);
      expect(tree.size).toBe(3);
      const node = tree.search(2, tree.root);
      expect(node.value).toBe(-2);
      expect(node.parent.value).toBe(-3);
});

test("should have correct parent", () => {
      tree.insert(9, -9);
      tree.insert(1, -1, tree.root);
      tree.insert(2, -2, tree.root);
      const node = tree.search(2, tree.root);
      expect(node.parent.key).toBe(1);
      expect(node.parent.value).toBe(-1);
});

test("should delete", () => {
      tree.insert(9, -9);
      tree.insert(1, -1, tree.root);
      tree.insert(2, -2, tree.root);
      tree.delete(1, tree.root);
      expect(tree.size).toBe(2);
      const node = tree.search(1, tree.root);
      expect(node).toBeNull();
});

test("should delete root", () => {
      tree.insert(9, -9, tree.root);
      tree.insert(7, -7, tree.root);
      tree.insert(20, -20, tree.root);
      tree.insert(18, -18, tree.root);
      tree.delete(9, tree.root);
      expect(tree.size).toBe(3);
      expect(tree.root.key).toBe(18);
      const node = tree.search(9, tree.root);
      expect(node).toBeNull();
});
