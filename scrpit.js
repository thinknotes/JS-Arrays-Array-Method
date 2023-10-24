const random = [39, 43, "Pizza", "E", "Sandwich", 21];
const newarray = pop()

console.log(random);
console.log("DEBUG Print Array: " + random);
push("Car");
console.log("DEBUG Push: " + random);
pop();
console.log("DEBUG Pop: " + newarray);
toString()
console.log("DEBUG ToString: " + newarray);




//Add new elements to the array being used.
function push(item) {
    random[random.length] = item;
}


//Remove the last element from the array.
function pop() {
    const temparray = [];
   for(var a = 0; a < random.length - 1; a++) {
        temparray[a] = random[a];
   }
   
   return temparray;
   
}


//Seperate the elements in the array by a comman.
function toString() {
   let space = "";

   for(let a = 0; a < random.length; a++) {
    if(a > 0) {
        space += ', ';
    }
    space += random[a];
   }

   return space;
}

function join(item) {
   let choice = item;
   let joinarray = [];

   for(let a = 0; a < random.length; a++) {
    joinarray[a] = random[a];
    if(a > 0)
       choice += item;
   }

   choice += random[a];
}

function concat() {

}