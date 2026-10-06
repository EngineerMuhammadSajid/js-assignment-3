// create two number veriables a and b;
let a = 4;
let b = 4;

// Useing arithmetic aperators 

// addition of two number (+)
add = a + b;
// this answer is equal to 4


// subtraction of two number (-)
sub = a - b;
// this answer is equal to 0


// Multiplication of two number (*)
mul = a * b;
// this answer is equal to 4;


// Division of two number (/);
div = a / b;
// this answer is equal to 1



// Modulus of two number (%);
mod = a % b;
// this answer is equal to 
// divident is equal to 4;
// and divisor is equal to 4;
// and Quation is equal to 1;
// and Reminder is equal to 0;


console.log(`A = ${a}; B = ${b};`);
// print only A and B
console.log(`addition of a + b = ${a + b}; subtraction of a - b =${a - b};
   Multiplication of a * b = ${a * b}; division of a / b = ${a / b};Modulus of a % b = ${a % b}`)
//    print the result of add,sub,mul,div,mod, this all



// Assignment Operator
// = it is used to assign value to the verable
let c = 5;
// in there is c = 5; 5 is assign value c;
console.log("c=",c);



// addition operator += ;
c += 3;
console.log("c += 3; addition=", c +=3);
// it mean you add c + 3 is equalent to c = c + d;
c -= 3;
console.log("c -= 3; subtraction=",c -=3);
c *= 3;
console.log("c *= 3; multiplication=",c *=3);
c /= 3;
console.log("c /=3;division=",c /= 3);



// Comparesion Operator
// Equal to (==)(loose equality) converts the data types before comparing values,
// its give answer is true
console.log(5=="5");


// strict equal to (===) it compares both the value and the exact data type without doing any conversion.
// its give answer is false

console.log(5==="5");


// Not equal to operator (!=)
let i =2;
let j =5;
console.log("not equal to operator answer =", i!=j)
// its answer is true


// Greather than operator(>)
console.log(`Greather than operator answer = ${i>j}`)
// its answer is false



// less then operator (<)
console.log(`less than operator answer = ${i<j}`)
// its answer is true



// Greather than or equal to (>=)
console.log(`Greather than or equal to answer = ${i>=j}`)
// its answer is true



// less than or equal to (<=)
console.log(`less than or equal to answer = ${i<=j}`)
// its answer is true


// Expressions
function totalPrice(price,quantity){
result = price * quantity;
console.log(`this is function ${result}`)
}
totalPrice(150,4);

