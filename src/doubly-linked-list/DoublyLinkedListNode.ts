import IDoublyLinkedListNode from "./IDoublyLinkedListNode";

class DoublyLinkedListNode<T> implements IDoublyLinkedListNode<T> {
      public value: T;
      public prev: IDoublyLinkedListNode<T> | null;
      public next: IDoublyLinkedListNode<T> | null;
      constructor(value: T) {
            this.value = value;
            this.next = null;
            this.prev = null;
        }
}

export default DoublyLinkedListNode;
