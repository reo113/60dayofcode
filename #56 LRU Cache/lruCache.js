/** 
 * https://leetcode.com/problems/lru-cache/
 * Time O(1) | Space O(N)
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = {};
        this.tail = {};
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    addToFront(node) {
        const temp = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = temp;
        temp.prev = node;
    }

    get(key) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            this.removeNode(node);
            this.addToFront(node);
            return node.value;
        }
        return -1;
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;
            this.removeNode(node);
            this.addToFront(node);
        } else {
            if (this.map.size === this.capacity) {
                const leastRecent = this.tail.prev;
                this.removeNode(leastRecent);
                this.map.delete(leastRecent.key);
            }
            const newNode = { key, value, prev: null, next: null };
            this.map.set(key, newNode);
            this.addToFront(newNode);
        }
    }
}

let obj = new LRUCache(2)
obj.put(1,1)
obj.put(2,2)
console.log(obj.get(1))
obj.put(3,3)
console.log(obj.get(2))
obj.put(4,4)
console.log(obj.get(1))
console.log(obj.get(3))
console.log(obj.get(4))