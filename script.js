// 5 falsy values: "". undefined,null,NaN


console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("jonas"));
console.log(Boolean({}));
console.log(Boolean(("")));

let money = 100;
if (money){
    console.log("don't spend it all !");

}else{
    console.log("You shold get a job !");
}

let height;
if(height) {
    console.log("YAY! Height is defined");// let height="0";
}else{
    console.log("Height is UNDEFINDED");//let height;
}