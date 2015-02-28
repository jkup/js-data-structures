function Stack() {
    this.stack=new Array();

    this.pop=function(){
        return this.stack.pop();
    }

    this.push=function(item){
        this.stack.push(item);
    }

}

/*
 * Tests
**/
var stack=new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
console.log("Hello");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
