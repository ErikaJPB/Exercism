class Node<TElement> {
  value: TElement;

  next?: Node<TElement>;
  prev?: Node<TElement>;

  constructor(value: TElement) {
    this.value = value;
  }
}

export class LinkedList<TElement> {
  first?: Node<TElement>;

  last?: Node<TElement>;

  public push(element: TElement) {
    const node = new Node(element);

    if (this.last) {
      this.last.next = node;
      node.prev = this.first;
    } else {
      this.first = node;
    }
    this.last = node;
  }

  public pop(): TElement {
    if (!this.last) throw new Error("Cannot pop from an empty list");

    const node = this.last;
    this.last = node.prev;

    if (this.last) {
      this.last.next = undefined;
    } else {
      this.first = undefined;
    }
    return node.value;
  }

  public shift(): TElement {
    if (!this.first) throw new Error("Cannot shift from an empty list");

    const node = this.first;
    this.first = node.next;

    if (this.first) {
      this.first.prev = undefined;
    } else {
      this.last = undefined;
    }
    return node.value;
  }

  public unshift(element: TElement) {
    const node = new Node(element);

    if (this.first) {
      this.first.prev = node;
      node.next = this.first;
    } else {
      this.last = node;
    }
    this.first = node;
  }

  public delete(element: TElement) {
    let node = this.first;
    while (node) {
      if (node.value === element) {
        if (node.prev) {
          node.prev.next = node.next;
        } else {
          this.first = node.next;
        }

        if (node.next) {
          node.next.prev = node.prev;
        } else {
          this.last = node.prev;
        }
        return;
      }
      node = node.next;
    }
  }

  public count(): unknown {
    let count = 0;
    let node = this.first;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
}
