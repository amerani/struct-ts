export interface IBinaryTreeNode<K, V> {
      key: K;
      value: V;
      left?: IBinaryTreeNode<K, V>;
      right?: IBinaryTreeNode<K, V>;
      parent?: IBinaryTreeNode<K, V>;
}

export class BinaryTreeNode<K, V> implements IBinaryTreeNode<K, V> {
      public key: K;
      public value: V;
      public left?: IBinaryTreeNode<K, V>;
      public right?: IBinaryTreeNode<K, V>;
      public parent?: IBinaryTreeNode<K, V>;

      constructor(
            key: K,
            value: V,
            left?: IBinaryTreeNode<K, V>,
            right?: IBinaryTreeNode<K, V>,
            parent?: IBinaryTreeNode<K, V>,
      ) {
            this.key = key;
            this.value = value;
            this.left = left || null;
            this.right = right || null;
            this.parent = parent || null;
      }
}
