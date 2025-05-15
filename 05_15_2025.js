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


// let info = "country Bangladesh is beautiful country jobneed.aktar@gmail.com";
// let result = info.includes("beautiful");
// let resutNumber = 0+result;
// console.log(resutNumber);


// console.log(info.startsWith("Bangladesh"));

// const email = "what the hell are you ding right now test@example.com";
// let reg = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
// console.log(reg);



// let info = "i love python";
// let result = info.replace("python","js");
// console.log(result);


// let data = "i love bangladesh & bangladesh";
// let newData = data.replaceAll("bangladesh","bd");
// console.log(newData);



// let info = [1,2,3,4,5,6,7,8,9,10];
// let result = info.splice(0,5);
// console.log(result);
// let info = "Bangladesh_Is_A_Beautiful_Country"
// let newArr = info.split("_");
// console.log(newArr);

// let info = "Bangladesh";
// let subStr = info.substring(3);
// console.log(subStr);

// let info = " Bangladesh  ";
// let result = info.trimStart();
// console.log(result);
// console.log(result.length);

// let newDate = new Date();
// console.log(newDate.getTime());

// const start = new Date("1997-01-15");
// const end = new Date("2025-03-13");
// const difference = end - start;
// const days = difference / (1000*60*60*24)
// console.log(days);


// let time = new Date();
// let bdTime = time.toLocaleString("en-US", { timeZone: "Asia/Dhaka" });
// console.log("Bangladesh Time:", bdTime);


// console.log(Math.floor(Math.random()*10)+1);




// let numbers = 12.34567890;
// console.log(numbers.toLocaleString("en-US"));
// console.log(numbers.toLocaleString("bn-BD"));

// console.log(numbers.toExponential());
// console.log(numbers.toFixed(2));
// console.log(numbers.toPrecision(4));
// console.log(numbers.toPrecision(4));


// let num = 123;
// console.log(typeof String(num));


// console.log(Number.MIN_VALUE);

// let result = "fraid" / "fraid";
// console.log(typeof result);


// function multiplication(x,y) {
//     if(typeof x !== "number") {
//         return "1st input is not a valid number!";
//     }else if(typeof y !== "number") {
//         return "2nd input is not a valid number";
//     } else {
//         return x * y;
//     }
// }

// let result = multiplication(10,20);
// console.log(result);


