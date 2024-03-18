//call() & apply()
const obj1={
    name:"Arnab",
    Domain:"Java"
}

function common(a,b,c){
    console.log("My skills :"+a+" "+b+" "+c);
}

const obj2={
    name:"Sapta",
    project:"gems",
    fun:function()
    {
        console.log("I am function of "+this.name);
    }
}

obj2.fun.call(obj1);
common.call(obj1,"Java","JWT Auth","Spring Boot");
console.log("----------------");
obj2.fun();
common.apply(obj2,["Java","JUnit","Spring Boot"]);
console.log("----------------");
// Unlike call() and apply(), bind() does not immediately invoke the function 
// but returns a new function that, when called, has its this value set to the provided value.
const obj3=obj2.fun.bind(obj1);
const obj4=common.bind(obj1,"Git","PostMan","Mysql");
obj3();
obj4();

