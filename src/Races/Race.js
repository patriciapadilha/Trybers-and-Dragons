"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Race {
    constructor(_name, _dexterity) {
        this._name = _name;
        this._dexterity = _dexterity;
        this._name = _name;
        this._dexterity = _dexterity;
    }
    get name() { return this._name; }
    get dexterity() { return this._dexterity; }
    // Esse número corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe Race;
    static createdRacesInstances() {
        throw new Error('Not implemented');
    }
}
exports.default = Race;
