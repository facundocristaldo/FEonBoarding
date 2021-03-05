//Rest Operator ...
console.log("REST OPERATOR")

//Used to merge a list of function arguments into an array
function myFnc(...args){
    args.sort()
    console.log(args)
}

myFnc(1,4,2,3)