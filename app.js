// function removeSmallest(numbers) {
//     const arr = numbers;
//     const min = Math.min(...arr); // min number in array

//     let myArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > min) {
//             myArr.push(arr[i]);
//         }
//     }
//     return myArr;

// }

function removeSmallest(numbers) {
    let myArr = numbers.slice(); // copy array / avoid mutation
    let smallestNumber = Math.min(...myArr); // find min number min number
    let indexOfSmallestNumber = myArr.indexOf(smallestNumber); // index of smallest number
    myArr.splice(indexOfSmallestNumber, 1); // remove smallest
    return myArr;
}

console.log(removeSmallest([1, 2, 3, 4, 5])); // [2, 3, 4, 5]
console.log(removeSmallest([5, 3, 2, 1, 4])); // [5, 3, 2, 4]
console.log(removeSmallest([2, 2, 1, 2, 1])); // [2, 2, 2, 1]
console.log(removeSmallest([])); // []