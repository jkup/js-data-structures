function Queue() {
    this.queue=new Array();

    this.pop=function(){
        return this.queue.shift();
    }

    this.push=function(item){
        this.queue.push(item);
    }

}

/*
 * Tests
**/
var queue=new Queue();
queue.push("A");
queue.push("B");
queue.push("C");
console.log("Hello");
console.log(queue);
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
