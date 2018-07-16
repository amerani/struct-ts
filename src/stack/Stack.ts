import { DoublyLinkedList } from "../doubly-linked-list";

export interface IStack<T> {
      push(value: T): IStack<T>;
      pop(): T;
      peek(): T;
}

export class Stack<T> implements IStack<T> {
      private linkedList: DoublyLinkedList<T>;
      constructor() {
            this.linkedList = new DoublyLinkedList();
      }
      public push(value: T): IStack<T> {
            this.linkedList.push(value);
            return this;
      }
      public pop(): T {
            return this.linkedList.pop();
      }
      public peek(): T {
            return this.linkedList.tail.value;
      }
}
