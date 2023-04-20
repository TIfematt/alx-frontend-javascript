/*eslint-disable */
import Currency from "./3-currency.js";

export default class Pricing {
    constructor(amount, Currency) {
    this.amount = amount,
    this.currency = Currency
    }
    // amount
    get amount() {
        return this._amount
    }
    set amount(value) {
        this._amount = value
    }
    // currency
    get currency() {
        return this._currency
    }
    set currency(value) {
        this._currency = value

    }

    // Method to display full price
    displayFullPrice () {
        return `${this._amount} ${this._currency.name} (${this._currency.code})`;
    }

    // Static method to convert price
    static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
