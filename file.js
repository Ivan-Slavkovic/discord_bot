// let json = require('./../Kurs_Centar/Practice/Bot/country-json/src/country-by-capital-city.json');
// let randomCity = json[Math.floor(Math.random() * json.length)];
// let grad = json[0]
// // console.log(grad)
// let ime = "Kabul"
// if (ime === grad) {
// }
// console.log(grad.city)

// var niz = []
// var points = 0;
// niz[1293759832459] = { number_of_points: points, playersName: 7 }
// console.log(niz[1293759832459])
// niz[1293759832459].number_of_points++
// console.log(niz[1293759832459])
// players = {
//     roll: 1,
//     name: "name",
//     niz: [1, 2, 3, 4, 5]
// }
// let x = Object.values(players)
// console.log(x)
// let person = {
//     name: 'Milan',
//     surname: 'Milanovic',
//     address: {
//         street: '28 Novembar',
//         city: 'Novi Pazar'
//     }
// }

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// const [a, b] = array
// let car = {
//     name: 'BMW',
//     year: '2021',
//     horsePower: '2.2'
// }

// auto(car)
// let { name, year, horsePower } = car

// function auto(nesto) {
//     let { name, year, horsePower } = car
//     console.log(name, year, horsePower)
// }

// word(sentence)
// function word(string) {
//     let rec = string.split('. ')
//     for (let i = 0; i < rec.length; i++) {
//         rec[i] = rec[i][0].toUpperCase() + rec[i].slice(1)
//     }
//     console.log(rec.join(". "))
// }

// let sentence = "this has happened long time ago. but i don't think so."

/*Sta god da posalje od tih reci da formatiramo to njegovo da ovaj izgleda kao prava recenica*/

// let object = {
//     Alan: {
//         online: false
//     },
//     Jeff: {
//         online: true
//     },
//     Sarah: {
//         online: true
//     }
// }
// function countOnline(usersObj) {
//     // Only change code below this line
//     let counter = 0
//     for (let element in usersObj) {
//         console.log(element);
//         if (usersObj[element].online == true)
//             counter++
//         // console.log(usersObj[element]);
//     }
//     return counter

//     // Only change code above this line
// }

// console.log(object.Sarah.online);

// console.log(countOnline(object));

// class Dog {
//   constructor(name, numberOfLegs, rasa) {
//     this.name = name;
//     this.numberOfLegs = numberOfLegs;
//     this.rasa = rasa;
//   }
// }

// const doge = new Dog("Nije to ime", 2, "kveletof cuvar ");
// console.log(doge);

// const axios = require("axios");
// const ajax = require("ajax");

class Car {
  constructor(name, brand, year) {
    this.name = name;
    this.brand = brand;
    this.year = year;
  }
  gume() {
    console.log(`${this.name} PAAAAAAAAAAAAIN`);
  }
  motor() {
    console.log(`${this.year} soooo much `);
  }
}

class Traktor extends Car {
  constructor(name, brand, year) {
    super(name, brand, year);
  }
  gume() {
    super.gume();
    console.log(`${this.name} puuuuuuurs`);
  }
  motor() {
    super.motor();
    console.log(`${this.motor} is apile of shit`);
  }
}
const foton = new Traktor("foton", "benz", 2021);

console.log(foton);
