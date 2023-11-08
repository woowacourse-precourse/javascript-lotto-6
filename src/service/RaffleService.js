import Raffle from '../raffle/Raffle.js';

export default class RaffleService {
  #raffle;

  raffleNumbers(numbers) {
    this.#raffle = new Raffle(numbers);
  }
  raffleBonus(bonus) {
    this.#raffle.addBonus(bonus);
  }
  getRaffle() {
    return { 'numbers': this.#raffle.getNumbers(), 'bonus': this.#raffle.getBonus() };
  }
}