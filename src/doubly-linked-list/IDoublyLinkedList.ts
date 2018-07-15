import {IDoublyLinkedListNode} from "./IDoublyLinkedListNode";

export interface IDoublyLinkedList<T> {
      head?: IDoublyLinkedListNode<T>;
      tail?: IDoublyLinkedListNode<T>;
      length: number;

      of(collection: T[]): IDoublyLinkedList<T>;
      from(...values: T[]): IDoublyLinkedList<T>;

      push(value: T): IDoublyLinkedList<T>;
      pop(): T;
      unshift(value: T): IDoublyLinkedList<T>;
      shift(): T;
      insertBefore(node: IDoublyLinkedListNode<T>, value: T): IDoublyLinkedList<T>;
      insertAfter(node: IDoublyLinkedListNode<T>, value: T): IDoublyLinkedList<T>;
      remove(value: T): IDoublyLinkedList<T>;
      removeNode(node: IDoublyLinkedListNode<T>): IDoublyLinkedList<T>;
      find(value: T): IDoublyLinkedListNode<T>;
}
