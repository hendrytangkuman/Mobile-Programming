// function mandi() {
//     console.log(`mandi`);
//   }
  
// function sarapan(callback){
//     setTimeout(function (){
//         console.log('sarapan tertunda 3 detik');
//         callback();
//     }, 3000);
// }

// function berangkatSekolah(){
//     console.log('berangkat sekolah');
// }

// mandi();
// sarapan(berangkatSekolah);

function helloWorld(){

    let newPromise = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Hello World');
        }, 2000);
    });
    newPromise.then((result)=>{
        console.log(result);
        return result;
    });
}

async function messages(){
    const msg = await helloWorld();
    console.log(msg);
}

messages();

function ambilDataUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
      })
      .then(function (users) {
        console.log(users);
      });
}

ambilDataUser();