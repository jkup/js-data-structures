function LinkedList(){
  this.head = null;
}

LinkedList.prototype.push = function(val){
    var current;

    var node = {
       value: val,
       next: null
    };

    if(!this.head){
      this.head = node;
    } else {
      current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next = node;
    }
};

/*
 * Tests
**/
var linkedList = new LinkedList();

//push node
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);

console.log(linkedList.head); //Object {data: 2, next: Object}
console.log(linkedList.head.next); //Object {data: 3, next: Object}
console.log(linkedList.head.next.next); //Object {data: 4, next: null}
