import {DoublyLinkedList} from "../doubly-linked-list/DoublyLinkedList";
import {IQueue} from "./IQueue";

export class Queue<T> implements IQueue<T> {
      private linkedList: DoublyLinkedList<T>;

      constructor() {
            this.linkedList = new DoublyLinkedList<T>();
      }

      public get length(): number {
            return this.linkedList.length;
      }

      public enqueue(value: T): IQueue<T> {
            this.linkedList.push(value);
            return this;
      }

      public dequeue(): T {
            return this.linkedList.shift();
      }

      public peek(): T {
            return this.linkedList.head.value;
      }
}
