import ResultService from '../service/ResultService.js';
import MESSAGES from '../constants/Messages.js';
import View from '../utils/View.js';

export default class ResultController {
  #resultService;

  constructor() {
    this.#resultService = new ResultService();
  }

  setResult(lottos, raffle) {
    this.#resultService.setResult(lottos, raffle);
  }

  #calculateRanks() {
    this.#resultService.calculateRanks();
  }

  #calculateReturns() {
    this.#resultService.calculateReturns();
  }

  #calculateReturnRate() {
    return this.#resultService.returnRate();
  }

  #prizes() {
    return this.#resultService.prizes();
  }

  calculateResults() {
    this.#calculateRanks();
    this.#calculateReturns();
  }

  printResult() {

    const prizes = this.#prizes();
    const returnRate = this.#calculateReturnRate();
    
    View.printOutput(MESSAGES.outputResultTitle);
    View.printOutput(`${MESSAGES.outputFifthPrize}${prizes['5']}${MESSAGES.suffixAmount}`);
    View.printOutput(`${MESSAGES.outputFourthPrize}${prizes['4']}${MESSAGES.suffixAmount}`);
    View.printOutput(`${MESSAGES.outputThirdPrize}${prizes['3']}${MESSAGES.suffixAmount}`);
    View.printOutput(`${MESSAGES.outputSecondPrize}${prizes['2']}${MESSAGES.suffixAmount}`);
    View.printOutput(`${MESSAGES.outputFirstPrize}${prizes['1']}${MESSAGES.suffixAmount}`);
    View.printOutput(`${MESSAGES.outputReturnRate}${returnRate}${MESSAGES.suffixReturnRate}`);
  }
}