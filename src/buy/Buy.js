import SETTINGS from '../constants/Settings.js';
import Balance from './Balance.js';
import Lottos from './Lottos.js';

export default class Buy {
  #balance;
  #amount;
  #lottos;

  constructor(balance) {
    this.#balance = new Balance(balance);
    this.#amount = Number(this.#balance.get()) / SETTINGS.lottoPrice;
    this.#lottos = new Lottos(this.#amount);
  }

  amount() {
    return this.#amount;
  }

  lottos() {
    return this.#lottos.get();
  }
}