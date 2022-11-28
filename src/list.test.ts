import { ListNode, DoublyLinkedList } from './list'

describe('LinkList', () => {
  let DLinkList: DoublyLinkedList
  beforeEach(() => {
    DLinkList = new DoublyLinkedList()
    const node1 = new ListNode({ desc: '这是1个节点', num: 1 })
    const node2 = new ListNode({ desc: '这是2个节点', num: 2 })
    const node3 = new ListNode({ desc: '这是3个节点', num: 3 })
    const node4 = new ListNode({ desc: '这是4个节点', num: 4 })
    DLinkList.append(node1)
    DLinkList.append(node2)
    DLinkList.append(node3)
    DLinkList.append(node4)
  })

  test('add 4 node, list should return size of 4 ', () => {

    expect(DLinkList.len()).toBe(4)
  })

  test('should return node1 at pos 0', () => {
    expect(DLinkList.search(0).data.num).toBe(1)
  })

  test('should return node2 at pos 1', () => {
    expect(DLinkList.search(1).data.num).toBe(2)
  })

  test('should return null if pos out of range', () => {
    expect(DLinkList.search(4)).toBe(null)
  })

  test('should return true if delete success', () => {
    expect(DLinkList.delete(0)).toBe(true)
    expect(DLinkList.search(2).data.num).toBe(4)
    expect(DLinkList.len()).toBe(3)
  })

  test('should return true when insert at last pos', () => {
    const pos = DLinkList.len()
    DLinkList.insert(pos, new ListNode({ desc: '这是5个节点', num: 5 }))
    expect(DLinkList.len()).toBe(5)
    expect(DLinkList.search(4).data.num).toBe(5)
  })
})