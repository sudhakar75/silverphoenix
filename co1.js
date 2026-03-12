var x=10;
var x=50; // redeclaration is allowed with var
x=130; // reassigning a new value to x     //var declared value not assigned is undefined
console.log(x);
console.log(typeof x);
function test()
{ var x = "hi";
console.log(x);
} test();
 var x=100;
console.log(x);
let y=30; // redeclaration is not allowed with let
y=40;// reassigning a new value to y     //let declared value not assigned is undefined
console.log(y);
function bell(){
    let y=30;
    console.log(y);
} bell();
const mm= 11;// redeclaration and reassignment are not allowed with const 
// //const declared value not assigned is syntax error
console.log(mm);
function rel(){
    const mm= 22;
    console.log(mm);} rel();

function reel(){
return "ss" } reel();
console.log(reel());
x++;
x--;
console.log(x == y);
console.log(x);