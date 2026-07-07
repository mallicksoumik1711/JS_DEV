const date = new Date()
console.log(date);
console.log(typeof date);

const time = Date.now()  // dont use new key word
console.log(time);
console.log(typeof time); 

// converting time into seconds divide Date.now/1000 
const inSecond = Date.now()
console.log((inSecond/1000)); // using math.floor removes the extra decimal points
console.log(Math.floor(inSecond/1000));

