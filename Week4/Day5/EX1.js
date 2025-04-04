//creating an array

 var Array= [1,2,3,4,5];


//map calls a function which has "item" passed as parameter
//map will pass each element of my_array as "item" in this function
//the function will double each element passed to it and return it

result=Array.map(function(item){
    return item*2;
});

console.log(result);







//prints new list containing the doubled values