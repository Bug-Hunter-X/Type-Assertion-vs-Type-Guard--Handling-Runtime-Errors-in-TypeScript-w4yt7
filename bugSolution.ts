function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

const result1 = add(5, 3); // 8
const result2 = subtract(10, 5); // 5

// Type Guard
function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    throw new Error('Invalid input: Both arguments must be numbers.');
  }
}

const result4 = addSafe(5, 3); // 8
//const result5 = addSafe("5", 3); //Throws error
console.log(result4);

//Narrowing
function checkNumber(num: number | string): number {
    if(typeof num === 'string'){
        return parseInt(num);
    }else{
        return num;
    }
}
const result6 = checkNumber(5);
const result7 = checkNumber("5");
console.log(result6, result7);