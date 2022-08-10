"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Warrior extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'stamina';
        Warrior._createdArchetypeInstances += 1;
    }
    get energyType() { return this._energyType; }
    static createdArchetypeInstances() {
        return Warrior._createdArchetypeInstances;
    }
}
Warrior._createdArchetypeInstances = 0;
exports.default = Warrior;
