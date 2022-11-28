export interface NodeDataStruct {
  desc: string
  num: number
}

export class ListNode {
  public data: NodeDataStruct | null = null
  public next: ListNode
  public prev: ListNode
  constructor(data: NodeDataStruct) {
    this.data = data
  }
}

export class DoublyLinkedList {
  public head: ListNode
  public tail: ListNode
  private size: number = 0
  constructor() { }
  len(): number {
    return this.size
  }
  search(pos: number): ListNode | null {
    if (pos < 0 || pos >= this.size) {
      return null
    }
    if (pos === 0) {
      return this.head
    }
    if (pos === this.size - 1) {
      return this.tail
    }
    let cur = this.head
    let idx = 0
    while (idx++ < pos) {
      cur = cur.next
    }
    return cur
  }
  insert(pos: number, node: ListNode): boolean {
    if (pos < 0 || pos > this.size) {
      return false
    }
    if (pos === 0) {
      if (!this.head) {
        this.head = node
        this.tail = node
        this.size++
      }
    } else if (pos == this.size) {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    } else {
      let current = this.head
      let idx = 0
      while (idx++ < pos) {
        current = current.next
      }
      current.prev.next = node
      node.prev = current
      current.prev = node
    }
    this.size++
    return true
  }
  append(node: ListNode) {
    // 链表为空
    if (!this.tail) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      node.prev = this.tail
      this.tail = node
    }
    this.size++
  }
  delete(pos: number): boolean {
    if (pos < 0 || pos >= this.size) {
      return false
    }
    if (pos === 0) {
      this.head.next.prev = null
      this.head = this.head.next
      this.size--
    } else if (pos === this.size - 1) {
      this.tail.prev.next = null
      this.tail = this.tail.prev
    } else {
      let cur = this.head
      let idx = 0 
      while(idx++ < pos) {
        cur = cur.next
      }
      cur.prev.next = cur.next
      cur.next.prev = cur.prev
      cur = null
      this.size-- 
    }
    return true
  }
  print() {
    let cur = this.head
    let idx = 0 
    while(idx++ < this.size) {
      console.log(cur.data.desc)
      cur = cur.next
    }
  }
}

