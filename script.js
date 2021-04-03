// const arr = [54, 6, 54, 543, 345, 24, 32];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if  (arr[j] > arr[j + 1]) {
//             const temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
// console.log(arr);


// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 1)
// console.log(arr);


// zadachka_1



// let i;

// let reversedArray = [];
// for (i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i])
// }

// console.log(reversedArray);

// zadacha_2

const arr = [54, 1, 0, 0, 0, 0, 0, 'hello', false, 42, null, 25, 'world', 47, true, undefined]
let newArray = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArray.push(arr[i])
    }
   

}
console.log(newArray);


