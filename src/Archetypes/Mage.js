"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Mage extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'mana';
        Mage._createdArchetypeInstances += 1;
    }
    get energyType() { return this._energyType; }
    static createdArchetypeInstances() {
        return Mage._createdArchetypeInstances;
    }
}
Mage._createdArchetypeInstances = 0;
exports.default = Mage;
