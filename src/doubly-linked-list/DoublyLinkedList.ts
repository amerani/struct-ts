import {DoublyLinkedListNode} from "./DoublyLinkedListNode";
import {IDoublyLinkedList} from "./IDoublyLinkedList";
import {IDoublyLinkedListNode} from "./IDoublyLinkedListNode";

export class DoublyLinkedList<T> implements IDoublyLinkedList<T> {
      public head?: IDoublyLinkedListNode<T>;
      public tail?: IDoublyLinkedListNode<T>;
      public length: number;
      constructor() {
            this.head = null;
            this.tail = null;
            this.length = 0;
      }

      public of(collection: T[]): IDoublyLinkedList<T> {
            const list = new DoublyLinkedList<T>();
            collection.forEach((item) => list.push(item));
            return list;
      }

      public from(...values: T[]): IDoublyLinkedList<T> {
            const list = new DoublyLinkedList<T>();
            values.forEach((item) => list.push(item));
            return list;
      }

      public push(value: T): IDoublyLinkedList<T> {
            if (this.tail === null) {
                  this.unshift(value);
              } else {
                  this.insertAfter(this.tail, value);
              }
            return this;
      }

      public pop(): T {
            if (this.tail === null) { return null; }
            const value = this.tail.value;
            this.removeNode(this.tail);
            return value;
      }

      public unshift(value: T): IDoublyLinkedList<T> {
            if (this.head === null) {
                  const newNode = new DoublyLinkedListNode<T>(value);
                  this.head = newNode;
                  this.tail = newNode;
                  this.length++;
              } else {
                  this.insertBefore(this.head, value);
              }
            return this;
      }

      public shift(): T {
            if (this.head === null) { return null; }
            const value = this.head.value;
            this.removeNode(this.head);
            return value;
      }

      public insertBefore(node: IDoublyLinkedListNode<T>, value: T): IDoublyLinkedList<T> {
            const newNode = new DoublyLinkedListNode<T>(value);
            newNode.next = node;
            if (node.prev === null) {
                this.head = newNode;
            } else {
                newNode.prev = node.prev;
                node.prev.next = newNode;
            }
            node.prev = newNode;
            this.length++;
            return this;
      }

      public insertAfter(node: IDoublyLinkedListNode<T>, value: T): IDoublyLinkedList<T> {
            const newNode = new DoublyLinkedListNode<T>(value);
            newNode.prev = node;
            if (node.next === null) {
                this.tail = newNode;
            } else {
                newNode.next = node.next;
                node.next.prev = node;
            }
            node.next = newNode;
            this.length++;
            return this;
      }

      public remove(value: T): IDoublyLinkedList<T> {
            const node = this.find(value);
            if (node === null) { return this; }
            this.removeNode(node);
            return this;
      }

      public removeNode(node: IDoublyLinkedListNode<T>): IDoublyLinkedList<T> {
            if (node === null) { return this; }
            if (node.prev == null) {
                  if (node.next !== null) {
                        node.next.prev = null;
                        this.head = node.next;
                  }
            } else {
                node.prev.next = node.next;
            }
            if (node.next == null) {
                  if (node.prev !== null) {
                        node.prev.next = null;
                        this.tail = node.prev;
                  }
            } else {
                node.next.prev = node.prev;
            }
            this.length--;
            return this;
      }

      public find(value: T): IDoublyLinkedListNode<T> {
            if (this.length === 0) { return null; }
            let cur = this.head;
            while (cur) {
                if (cur.value === value) { return cur; }
                cur = cur.next;
            }
            return cur;
      }
}
