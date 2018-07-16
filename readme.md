# struct-ts
data structure library written in typescript

## installation
npm
```sh
npm install struct-ts
```
yarn
```sh
yarn add struct-ts
```

## usage
```js
import { DoublyLinkedList } from 'struct-ts';
const dll = new DoublyLinkedList();
dll.push(1).push(2);
```

## library

### `DoublyLinkedList`
```js
of(arrayLike)
from(1, 2, 3)
push(1)
pop()
unshift(1)
insertBefore(node, 2)
insertAfter(node, 3)
remove(1)
removeNode(node)
find(1)
length
```

### `Stack`
```js
push(1)
pop()
peek()
```

### `Queue`
```js
enqueue(1)
dequeue()
peek()
length
```