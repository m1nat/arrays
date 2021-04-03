// _______________№_1_________________
let arr = [];
let arr1 = [];
let max = 0;

for(i = 0; i < 10; i++) {
    arr[i] = Math.round(Math.random(i)*100)
    arr1[i] = Math.round(Math.random(i)*100)
}

// _____________________№_2__________________

function con(array_1, array_2) {
  let arr2 = array_1.concat(array_2);
  arr2.push(22);
  console.log(arr2);
  let min = arr2[0];
    for (let j = 0; j < arr2.length; j++){
        if(arr2[j] > max){
            max = arr2[j]
        }
    }

    for (let k = 0; k < arr2.length; k++){
      if(arr2[k] < min){
          min = arr2[k]
      }
  }
    
    for (let i = 0; i < arr2.length; i++) {
      if(arr2[i] % 2 == 0 ){
        arr2[i]*2;
        console.log(arr2[i]);
      } 
    }  
    console.log(`minNumber: ${min}`); 
    console.log(`maxNumber: ${max}`);     
}
// ________________№3__________________
con(arr, arr1)


