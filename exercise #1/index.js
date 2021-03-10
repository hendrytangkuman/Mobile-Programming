// Array exercise
// let people=["Greg", "Mary", "Devon", "James"];

// 1.
// for(let i=0; i<people.length; i++)
// {
//     console.log("People's name: " + people[i]);
// }

// 2.
// people.forEach(function (data)
// {
//     console.log(data)
// });

// 3.
// people.shift();

// 4.
// people.pop();

// 5.
// people.unshift("Matt");

// 6.
// people.push("Hendry");

// 7.
// for(let i=0;i<people.length; i++)
// {
//     if(people[i]!="Mary"){
//         console.log(people[i]);
//     }
//     else{
//         console.log(people[i]);
//         break;
//     }
// };

// 8.
// let people1= people.slice(2);
// console.log(people1);

// 9.
// people.splice(2, 1 , "Elizabeth", "Artie");
// console.log(people);

// 10.
// let withbob=["Bob"];
// let everybody= people.concat(withbob);

// console.log(everybody);

// test
// people.forEach(function (data)
// {
//     console.log(data)
// });


// Object exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. 
programming.languages[3]="Go";

// 2.
programming['difficulty']=7;

// 3. 
delete programming.jokes;

// 4.
programming['isFun']=true;

// 5.
programming.languages1 = programming.languages.map(function(value,index){
    return index+" - "+value;
});

// display
console.log(programming);