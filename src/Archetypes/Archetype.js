"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Archetype {
    constructor(name) {
        this._name = name;
        this._special = 0;
        this._cost = 0;
    }
    get name() { return this._name; }
    get special() { return this._special; }
    get cost() { return this._cost; }
    // Esse número corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe Race;
    static createdArchetypeInstances() {
        throw new Error('Not implemented');
    }
}
exports.default = Archetype;
