// //creating an array using array literal
// // let arr=[1,2,3,4,5];
// // console.log(arr);
// // console.log(arr.length);  //length of the array

// // // accessing the elements of the array
// // console.log(arr[0]);
// // console.log(arr[2]);
// // console.log(arr[-3]); // it will return undefined because the index starts from 0 and it does not consider negative index

// // // creating an array with different data types

// // let arr2=[10,2,true,{name:"john",age:30},[1,2,3]];
// // console.log(arr2);


// // //using new keyword
// // let arr3=new Array(1,2,3,4,5);
// // console.log(arr3);
// // // it is consider as array but the length of the array is equal to 5 because it consider the whole array as one element
// // let arr4=new Array(5);
// // console.log(arr4);

// // // from function
// // let values="Sarvar";
// // let arr5=Array.from(values);
// // console.log(arr5);// it will return an array of characters from the string "Sarvar"


// // let arr6=Array.of(10,20);
// // console.log(arr6); // it will return an array with the elements 10 and 20

// // let arr7=Array.of(5);
// // console.log(arr7); // it will return an array with the element 5

// let arr=[10,20,30];
// console.log(arr);
// // arr[1]=200;//modification of the array


// // console.log(arr.at(0)); // it will return the first element of the array
// // console.log(arr.at(-2));
// // console.log(arr.at(4));//undifined because the index is out of range


// //adding an element to the array at a specific index
// arr[4]='hello';
// console.log(arr);
// // updating the element of the array
// arr[1]='world';
// console.log(arr);

// console.log(arr[3]);
// console.log(arr);

// // adding an element to the end of the array
// arr.push('end');
// console.log(arr);


// // adding an element to the beginning of the array
// arr.unshift('start');
// console.log(arr);

// // deleting an element from the beginning of the array
// let first=arr.shift();
// console.log('deleted element:',first);

// console.log(arr);

// // deleting an element from the end of the array
// let last=arr.pop();
// console.log('deleted element:',last);
// console.log(arr);

// // specific index se element delete karna
// delete arr[2];
// console.log(arr);

// // splice method se element banana aur delete karna
// // splice(startIndex, deleteCount, item1, item2, ...)
// // startIndex: the index at which to start changing the array
// // deleteCount: the number of elements to remove from the array
// // item1, item2, ...: the elements to add to the array (optional)
// let arr2=[1,2,3,4,5];
// console.log(arr2);

// // delete 2 elements from index 1
// arr2.splice(1,2);
// console.log(arr2);

// let arr=['hello','student','welcome', 'to', 'EXCELR', 'class'];


// console.log("========while loop==============");

// let index=0;
// while(arr.length>index){
//     console.log(arr[index]);
//     index++;
// }
// console.log("========using for loop==========");

// for(let index=0;index<arr.length;index++){
//     console.log(arr[index]);
// };

// console.log("======do while loop==========");

// let i=0;
// do{
//     console.log(arr[i]);
//     i++;
// }while(i<arr.length);


// console.log("==========for each function=========");
// // NO NEED OF INDEXING IN FOR EACH LOOP
// arr.forEach(
//     (value)=>{
//         console.log(value);
//     }   
// )
// console.log("========for in==========");


// for (const index in arr) {
//     console.log(arr[index]);
// }
// console.log('===========for of=========');

// for (const value of arr) {
//     console.log(value);
// }


let arr=[1,2,3,4,5];
       // 1 4 9 16 25
arr.forEach((value)=>{console.log(value * value );});

let squaredArray=arr.map((value)=>{return value * value * value;}); // it will return a new array with the squared values of the original array
console.log(squaredArray);


// for filtering the even values from the array
// arr.forEach((value)=>{
//     if(value % 2 === 0){
//         console.log(value);
//     }
// });
let evenArray=arr.filter((value)=>{return value % 2 === 0;}); // it will return a new array with the even values of the original array
console.log(evenArray);

// filter and return first even value from the array
let find=arr.find((value)=>{return value % 2 === 0;})
console.log(find);

// filter and return true when it is matching with all values of the array
let every=arr.every((value)=>{return value % 2 === 0;})
console.log(every);
 
//filter and return true when it is matching with at least one value of the array
let findlast=arr.findLast((value)=> value % 2 === 0);
console.log(findlast);
