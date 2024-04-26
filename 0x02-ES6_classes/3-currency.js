export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  /* set Code */
  set code(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Code must be a string');
    }
    this._code = value;
  }

  /* get Code */
  get code() {
    return this._code;
  }

  /* set Name */
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = value;
  }

  /* get Name */
  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
