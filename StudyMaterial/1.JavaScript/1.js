//curring 
/*function f1(a){
    return function(b)
    {
        return function(c)
        {
            return a+b+c;
        }
    }
}
console.log(f1(1)(2)(3));

//In one line :
const add=(a)=>(b)=>(c)=>a+b+c;
console.log(add(4)(10)(12));


//Sending an email to someone : 
function sendEmail(to)
{
    return function(subject)
    {
        return function(body)
        {
            console.log(`Sending email to ${to} \n subject: ${subject} \n\n ${body}`);
        }
    }
}

const step1=sendEmail("arnabpatra1111@gmail.com");
const step2=step1("Corona virus again");
step2("What is JN.1, the new COVID-19 variant? JN.1 was first detected in September 2023");

*/
//

const add=(a,b)=>a+b;
const sub=(a,b)=>a-b;
const mul=(a,b)=>{
    return a*b;
}
const div=(a,b)=>{
    return a/b;
}

const calculator=(a,b,fun)=>{
return fun(a,b);
}

console.log(calculator(2,3,add));
console.log(calculator(2,3,sub));
console.log(calculator(2,3,mul));
console.log(calculator(2,3,div));