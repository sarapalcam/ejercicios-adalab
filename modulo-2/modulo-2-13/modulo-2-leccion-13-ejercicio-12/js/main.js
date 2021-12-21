"use strict";

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

const sortUsersName = users.sort();
console.log(users);
//No sé cómo ordenar por orden alfabético un objeto

const sortUsersPin = users.sort((a, b) => a.pin - b.pin);
console.log(users);
