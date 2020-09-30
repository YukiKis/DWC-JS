"use strict";

var pet = { type: "Snow white hamster", name: "Kira" };

Object.preventExtensions(pet);
Object.seal(pet);
Object.freeze(pet);

pet.name = "KIRARA";
delete pet.type;
pet.weight = 22;
