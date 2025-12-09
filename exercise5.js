
/* 
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.

*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// 1. Comando para imprimir a todos los de la lista inicial
console.log("Lista inicial: ", people.join(", "));

// 2. Remover a "Dani"
people.splice(people.indexOf("Dani"),1);
console.log("Lista de invitados removiendo a Dani: ", people.join(", "));

// 3. Remove "Juan"
people.splice(people.indexOf("Juan"),1);
console.log("Lista de invitados removiendo a Juan: ", people.join(", "));

// 4. Move "Luis" to the front
people.splice(people.indexOf("Luis"),1)[0];
people.unshift("Luis");
console.log("Lista de invitados poniendo a Luis hasta el frente: ", people.join(", "));

// 5. Add your name to the end of the array
people.push("Alejandro"); // <-- reemplaza con tu nombre real
console.log("Lista de invitados agregandome al final: ", people.join(", "));


// 6. Using a loop, iterate and stop after printing "Maria"
for (let i = 0; i < people.length; i++) {
  if (people[i] === "Maria") break;
}

// 7. Give the indexOf where "Maria" is located
console.log("Index of Maria:", people.indexOf("Maria"));

console.log("Lista final:", people.join(", "));
