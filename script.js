const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});

console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const doubledNums = nums.map((currentNum) => {
  return currentNum * 2;
});

console.log(doubledNums);



//let pizza = 'tasty';

//if (pizza === 'tasty') {
 // console.log('yum');
//} else {
 // console.log('yuck');
//}

// Your code here

let pizza = 'tasty';

pizza === 'tasty' ? console.log('yum') : console.log('yuck');