const sum=(...args)=>{
    return args.reduce((curr,num)=>{
    console.log(curr);
        return curr+num;
    })
}
let result=sum(1,2,3,4,5);
console.log(result);
