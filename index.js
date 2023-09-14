// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i <gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         debugger; 
//     }
//     return gifts;
// }

function writeCards(array, event){
    let newArray = [];
    for(let i = 0; i < array.length; i++) {
        let message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        newArray.push(message);
        debugger;
    }
    return newArray;
}

function countDown(int){
    while (int >= 0) {
        console.log(int--);
    }
}





// wrapGifts(gifts);
writeCards(["Ada", "Brendan", "Ali"], "wedding");