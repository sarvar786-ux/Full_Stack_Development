let arr=[10,3,43,23,44];
//sum of the array
// 1.iterate a loop
// 2.reduce function
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log(sum);

let sum1=arr.reduce((acc,curr)=>{
    return acc+curr;
},0);
console.log(sum1);  

//=========find maximum number in the array===========

 let sorted=arr.sort((a,b)=>a-b)
 console.log(sorted[arr.length-1]);
   
 //or 

 let max=Math.max(...arr);
 console.log("max: "+max);

 let min=Math.min(...arr);
 console.log("min: "+min);

 // =============sort users based on the marks================

 let users=[
    {name:"Alice",marks:85},
    {name:"Bob",marks:92},
    {name:"Charlie",marks:78},
    {name:'sarvar',marks:93}
 ];

 // higher to lower
 let sortedUsers=users.sort((a,b)=>a.marks-b.marks);
 console.log(sortedUsers);
 

// remove duplicates from the array
 let arr2=["apple","banana","cherry","date",'apple','banana'];
    let unique=[...new Set(arr2)];
    console.log(arr2);
    console.log(unique);
 

    //===================find second largest number in the array================
    let arr3=[10,34,12,34,44,44];
    let newarr=[...new Set(arr3)];// removing duplicates from the array using set and spread operator
    newarr.sort((a,b)=>a-b);//sorting the array in ascending order
    console.log(newarr);// [10, 12, 34, 44]
    
    console.log('second largest: '+newarr[newarr.length-2]);// printing the second largest element from the sorted array
    console.log('second largest: ' +newarr[1]); // printing the second smallest element from the sorted array


    // without using set and spread operator
    let arr4=[10,7,8,9];
    let flargest=-Infinity;
    let slargest=-Infinity; 
    for(let i=0;i<arr4.length;i++){
        if(arr4[i]>flargest){
            slargest=flargest;
            flargest=arr4[i];
        }
        else if(arr4[i]>slargest && arr4[i]!==flargest){
            slargest=arr4[i];
        }
    }
    console.log('second largest: ' + slargest);
    console.log('first largest: ' + flargest);
    
    let str="this is javascript code";
    let res="";
    let words=str.split(' ');
    for (const element of words) {
        res=res+element.charAt(0).toUpperCase()+element.slice(1)+" ";
    }
    console.log(res);
    