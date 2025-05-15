let info = {
    "name" : "Google corporation",
    "location" : "california",
    "woner" : "larry page & sargray grean",
    "CEO" : "Sundar pichai"
}

for(let val in info){
    // property access
    // console.log(val);

    // value access
    // console.log(info[val]);

    // key and value access
    console.log(val + ": " + info[val]);
}