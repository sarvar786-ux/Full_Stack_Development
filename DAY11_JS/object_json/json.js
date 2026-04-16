// let obj={
//     name:'tej',
//     email:"tej@gmail.com",
//     phone:8746565
// }
// // converts obj into json
// let json=JSON.stringify(obj);
// // console.log(obj);
// // console.log(json);


// // converts json into obj
// let obj2=JSON.parse(json);
// console.log(json);
// console.log(obj2);

// let nestedjsonData={
//     name:'raj',
//     address:{
//         street:"unr street"
//     }
// }

// let arrayJsonData=[
//     {},{},{}
// ]



async function fetchData(){
   let res= await  fetch('https://jsonplaceholder.typicode.com/users/1');
   let user=await res.json();
//    console.log(user);
//  for loop 

// printing only keys
// for(let key in user){
//     console.log(key); 
// }

// // printing only values
// for (const key in user) {
//     console.log(user[key]);
// }

// // printing key -value pairs

// for (const key in user) {
//     console.log(key ,"--",user[key]);
// }
   
// let res1=Object.keys(user);
// console.log(res1);


// forEach function

//  iterating keys using 
Object.keys(user).forEach(
    (key)=>{
        console.log(key);       
    }
);

// // iterating values 

Object.values(user).forEach(
     (value)=>{
        console.log(value);     
    }
)

// iterating key-value pair

Object.entries(user).forEach(
     (pair)=>{
        console.log(pair);     
    }
)




















//    console.log(user);
//    console.log(user.name);
//    console.log(user['username']);

// //    re-initlize
//    user.name='new Name';
//    console.log(user.name);

//    //delete 
//    console.log(user.email);
//    delete user.email;
//    console.log(user.email);


//    let obj1={
//     'FirstName':"radha"
//    }
//    let obj2={
//     'FirstName':"rani",
//     'LastName':'bhaskar'
//    }
   
// //  let combine={...obj1,...obj2};
//    let combine=Object.assign(obj2,obj1);
//    console.log(combine);
      
}

fetchData();

// let  obj={
//     "name":'radha',
//     "email":'radha@gmail.com',
//     "phone":97867656545
// }

// console.log(obj);

// // destructing the obje
//     let{name , email}=obj;
//     console.log(name);
//     console.log(email);
//     // destrcuting and renamig
//     let{name:userName,email:userEmail}=obj;
//     console.log(userName);
//     // add new vales
//     let{address="banglore"}=obj;
//     console.log(address);


//     console.log(obj);
    
    
    
    
    
    