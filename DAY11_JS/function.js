// //function declarartion
// hosting will work

// function s1() {   // no argumented function 
//     console.log("hello world");
// }
// s1(); //calling a function --function caller 


// function s2(name){  // argumented function
//     console.log(`my name is ${ name}`);
// }
// s2(); //my name is undefined
// s2(`sarvar`); //my name is sarvar
// s2(`rahaman`); //my name is rahaman



// Function expression
// hosting is not possible
// let s1=function (){
//     console.log(
//         "Simmi"
//     );
    
// }
// s1();
// // arrow function
// // let s3=()=>{
// //     console.log("arrow function");
    
// // }
// // s3();

// // anonymous function
// // setTimeout(()=>{
// //     console.log('anonymous function');   
// // },5000
// // );
// // call back function
//  function s4(name){
// 	console.log(`my name is ${name}`);

//  }
// function s5(name,callback){   
//     callback(name);
// }
// s5("sarvar",s4);  // my name is sarvar

// // call back function

// function isSuccess(){
//     console.log("authentication success");
    
// }
// function isFailure(){
//     console.log("authentication failure"); 
// }
// function authentication(username,password,successCallback,failureCallback){
//     if(username==="admin" && password==="admin123"){
//         successCallback();
//     }else{
//         failureCallback();
//     }   
// }
// authentication("admin","admin123",isSuccess,isFailure); // authentication success
// authentication("admin","wrongpassword",isSuccess,isFailure); // authentication failure


// contructor function -- used to create a oject
function User(name,age){
    this.name=name;
    this.age=age;
}
let user1=new User("sarvar",25);
console.log(user1); // User { name: 'sarvar', age: 25 } 
let user2=new User("rahaman",30);
console.log(user2); // User { name: 'rahaman', age: 30 }    