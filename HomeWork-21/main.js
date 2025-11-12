// function createGreeting(greeting) {
//     return function(name) {
//         return greeting + ', ' + name + '!';
//     };
// }

// var greetHello = createGreeting('Hello');
// var greetHi = createGreeting('Hi');

// console.log(greetHello('Alice')); // Виведе: "Hello, Alice!"
// console.log(greetHi('Bob')); // Виведе: "Hi, Bob!"

user = {
    name: "Дем'ян",
    age: 20,
    strenght: 100,
    health: 100,
    defense: 50,
}
goblin = {
    name: "Тимуджин",
    age: 30,
    strenght: 35,
    health: 150,
    defense: 40,
}

function createDamage(strenght, health, defense){
    let damage;
    if(strenght === defense){
        return damage = 0;
    }else if(strenght > defense){
        damage = strenght - defense;
        return health - damage;
    };
};

console.log(createDamage(user.strenght, goblin.health, goblin.defense))

const result = createDamage(user.strenght, goblin.health, goblin.defense)

goblin.health = result

console.log(goblin)