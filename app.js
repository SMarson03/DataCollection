//gave the string a value
const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"
// console.log(csv.split('\n'))
// const new_Arr = csv.split('\n')
// for(let i = 0 ; i <= new_Arr.length -1 ; i++){
//     console.log(new_Arr[i])
// }
//created a function to seperate the string every "\n" gave it a value tempArr
//created for loop with the newly adjusted string
//the outcome of the for loop was then split at every "," then renamed subArr
//subArr was then pushed onto the value new_arr 
function expandingFunc(str){
    //ID,Name,Occupation,Age\
    let tempArr = str.split('\n')
    let new_arr = []
    for(let i = 0 ; i <= tempArr.length-1; i++){
        const subArr = tempArr[i].split(',')
        new_arr.push(subArr)
    }

    return new_arr

}

//console.log(expandingFunc(csv))

const arr = expandingFunc(csv)
//console.log(arr)

function Transform(arr){

    let keys = arr[0]
    let obj = {}
    let new_arr = []

    for( let i = 1; i <= arr.length -1 ; i++){
        console.log(arr[i])
        let sub_arr = arr[i].length -1
        for( let j = 0 ; j <= sub_arr; j++){
            const key = keys[j].toLowerCase() 
            const value = arr[i][j]
            obj[key] = value
            
        }
        new_arr.push(obj)
        obj = {}
    }


    return new_arr



}
console.log(Transform(arr))
/**
 * Using array methods, accomplish the following tasks, in order upon 
 * the result of Part 3:
 * Remove the last element from the sorted array. 
 * Insert the following object at index 1: 
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }
Add the following object to the end of the array:
{ id: "7", name: "Bilbo", occupation: "None", age: "111" } * 
 */

const newNew = Transform(arr)

newNew.pop();
console.log(newNew)

const Barry = { id: "48", name: "Barry", occupation: "Runner", age: "25" }
 newNew.splice(1, 0, Barry)
 console.log(newNew)

 const Bilbo = { id: "7", name: "Bilbo", occupation: "None", age: "111" }
 newNew.push(Bilbo);
 console.log(newNew)
 
 

  function csvFullCircle(arr) {
    let csvArr = [];
    csvArr.push(Object.keys(arr[0]));
    for (let i = 0; i < arr.length; i++){
    let values = Object.values(arr[i]);
    values[0] = "\\n" + values[0];
    csvArr.push(values);
 }
 }

console.log(csvFullCircle(arr))


function csvFullCircle(arr) {
    let csvArr = [];
  
    csvArr.push(Object.keys(arr[0]));
    for (let i = 0; i < arr.length; i++) {
      csvArr.push(Object.values(arr[i]));
    }
  
    let flatArr = csvArr.flat();
    let newString = flatArr.join(",");
  
    return newString;
  }

