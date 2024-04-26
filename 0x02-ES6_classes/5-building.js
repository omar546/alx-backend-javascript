export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  /* set sqft */
  set sqft(value) {
    this._sqft = value;
  }

  /* get sqft */
  get sqft() {
    return this._sqft;
  }
}
