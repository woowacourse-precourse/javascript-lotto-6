import Raffle from '../raffle/Raffle.js';

export default class RaffleService {
  #raffle;

  raffleNumbers(numbers) {
    this.#raffle = new Raffle(numbers);
  }
  raffleBonus(bonus) {
    this.#raffle.addBonus(bonus);
  }
}