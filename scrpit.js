//Arrays
const random = [39, 43, "Pizza", "E", "Sandwich", 21];
const newarray = pop()
const arrayElements = join("/");
const places = ["LA", "NY", "SF", "MN"];

//Console log so we can see what the code is doing in the console.
console.log(random);
console.log("DEBUG Print Array: " + random);
push("Car");
console.log("DEBUG Push: " + random);
pop();
console.log("DEBUG Pop: " + newarray);
toString()
console.log("DEBUG ToString: " + newarray);
join()
console.log("DEBUG Join: " + arrayElements);
concat(places)
console.log("DEBUG Concat: " + random);




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

//Seperate the elements in the array using the method you want. Example if you use / then the array would output with / seperating it. 
function join (seprator = " ") {
    let result = "";
    for(var a = 0; a < random.length; a++) {
        if (result) {
            result += seprator;
        }
        result += random[a];
    }
    return result;
};

//Creates a  new array that can hold elements from other arrays and join them together and into one array. 
function concat(array2) {
   

   for(var a = 0; a < array2.length; a++) {
         push(array2[a])
   }

}