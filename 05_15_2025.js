// let info = {
//     "name" : "Google corporation",
//     "location" : "california",
//     "woner" : "larry page & sargray grean",
//     "CEO" : "Sundar pichai"
// }


// for in loop
// for(let val in info){
//     // property access
//     // console.log(val);

//     // value access
//     // console.log(info[val]);

//     // key and value access
//     console.log(val + ": " + info[val]);
// }






// for of loop
// let company = ["Google corporation","Amazon inc corporation","Microsoft corporatoin"]
// let country = "Bangldesh"

// for(let con of country) {
//     console.log(con);
// }



// array method
// const info = [10,20,30,40,50,60,70,80,90]
// // console.log(info.at(2));
// let result = info.every(num=>num>0);
// console.log(result);

// const numbers = [1,2,3,4,5,6,7,8,9,10]
// const result = numbers.findIndex((num)=> num<5);
// console.log(result);

// let info =["Google","Microsoft","amazon"];
// // let result = Array.from(info);
// let result = info.join(" ");
// console.log(result);

// let result = info.pop();
// console.log(result);
// info.push(120);
// console.log(info);
// info.shift();
// let result = info.slice(0,5);
// console.log(result);
// let info = [1,2,99,10,3,4,30,5,6,7,8,9,2]
// info.sort((a,b)=>{
//     return a-b;
// });
// console.log(info);




// let info = ["a","b","c"]
// info.push("d");
// console.log(info);