function hasCycle(head) {
    if (head === null) {
      return false; // empty list has no cycle
    }
    
    let slow = head;
    let fast = head.next;
    
    while (fast !== null && fast.next !== null) {
      if (slow === fast) {
        return true; // cycle found
      }
      
      slow = slow.next;
      fast = fast.next.next;
    }
    
    return false; // no cycle found
  }