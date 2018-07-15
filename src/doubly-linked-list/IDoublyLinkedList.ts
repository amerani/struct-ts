interface IDoublyLinkedList<T> {
      head: IDoublyLinkedListNode<T> | null;
      tail: IDoublyLinkedListNode<T> | null;
      length: number;

      of(collection: T[]): IDoublyLinkedList<T>;
      from(...values: T[]): IDoublyLinkedList<T>;

      push(value: T): IDoublyLinkedList<T>;
      pop(): T|null;
      unshift(value: T): IDoublyLinkedList<T>;
      shift(): T|null;
      insertBefore(node: IDoublyLinkedListNode<T>, value: T): IDoublyLinkedList<T>;
      insertAfter(node: IDoublyLinkedListNode<T>, value: T): IDoublyLinkedList<T>;
      remove(value: T): IDoublyLinkedList<T>;
      removeNode(node: IDoublyLinkedListNode<T>): IDoublyLinkedList<T>;
      find(value: T): IDoublyLinkedListNode<T>|null;
}
