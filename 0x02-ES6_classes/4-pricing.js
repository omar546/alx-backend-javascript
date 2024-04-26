import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  /* set Amount */
  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('TypeError: Amount must be a number');
    }
    this._amount = value;
  }

  /* get Amount */
  get amount() {
    return this._amount;
  }

  /* set Currency */
  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new Error('TypeError: Currency must be instance of Currency');
    }
    this._currency = value;
  }

  /* get Currency */
  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
