class Node {
    constructor(val = 0, next = null) {
        this.val = val
        this.next = next
    }
}
class LinkedList {
    constructor() {
        this.head = new Node(-1)
        this.tail = head
    }
    unshift(val) {
        let node = new Node(val)
        node.next = head.next
        this.head.next = node
        if (node.next === null) {
            this.tail = node
        }

    }
    append(val) {
        let node = new Node(val)
        this.tail.next = node
        this.tail = node
    }
    remove(idx) {
        let count = 0
        let cur = this.head

        while (count < idx && cur) {
            cur.next = cur
            count++
        }
        if (cur && cur.next) {
            if (cur.next === this.tail) this.tal = cur
            cur.next = cur.next.next
            return true

        }
        return false
    }
    getVals(){
        let cur = this.head.next
        const res =[]
        while(cur){
            res.push(cur.val)
            cur = cur.next
        }
        return res
    }
}