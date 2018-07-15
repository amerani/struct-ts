import IDoublyLinkedListNode from "./IDoublyLinkedListNode";

class DoublyLinkedListNode<T> implements IDoublyLinkedListNode<T> {
      public value: T;
      public prev?: IDoublyLinkedListNode<T>;
      public next?: IDoublyLinkedListNode<T>;
      constructor(value: T) {
            this.value = value;
            this.next = null;
            this.prev = null;
        }
}

export default DoublyLinkedListNode;
