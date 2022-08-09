abstract class Race {
  constructor(private _name: string, private _dexterity: number) {
    this._name = _name;
    this._dexterity = _dexterity;
  }
  
  get name(): string { return this._name; }

  get dexterity(): number { return this._dexterity; }

  // Esse número corresponde à quantidade de instâncias criadas a partir das classes estendidas da classe Race;
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  // Esse número corresponde à quantidade máxima de pontos de vida da raça;
  abstract get maxLifePoints(): number;
}

export default Race;