import { Console } from "@woowacourse/mission-utils";
import { ERROR, INPUT_MESSAGE, TICKET_PRICE } from './Constant.js';
import WinningNumbers from './WinningNumbers.js';
import TicketManager from "./TicketManager.js";
import MoneyManager from "./MoneyManager.js";

class App {
  async play() {
    let lottoMoney = await inputMoney();

    let ticketManager = new TicketManager(lottoMoney);

    let winningNumbers = await inputWinningNumbers();

    let moneyManager = new MoneyManager();
    let tickets = ticketManager.getTickets();
    tickets.forEach((ticket) => {
      const {matchingNumbers, bonus} = winningNumbers.checkYourLotto(ticket);
      moneyManager.addTicket(matchingNumbers, bonus);
    })

    moneyManager.calculateStatistics();
    moneyManager.printStatistics();
  }
}

async function inputMoney() {
  let money = await Console.readLineAsync(INPUT_MESSAGE.MONEY);
  let validity = checkMoney(money);
  while(!validity) {
    money = await Console.readLineAsync();
    validity = checkMoney(money);
  }
  return money;
}

function checkMoney(moneyString) {
  let lottoMoney = Number(moneyString);

  if (Number.isNaN(lottoMoney)) {
    Console.print(ERROR.MONEY_IS_NAN);
    return false;
  } else if (lottoMoney % TICKET_PRICE != 0) {
    Console.print(ERROR.MONEY_HAS_REMAINDER);
    return false;
  }

  return true;
}

async function inputWinningNumbers() {
  let numbers = await inputNumbers();
  let winningNumbers = new WinningNumbers(numbers);
  let bonus = await inputBonusNumber();
  winningNumbers.addBonusNumber(bonus);
  return winningNumbers;
}

async function inputNumbers() {
  let numberInput = await Console.readLineAsync(INPUT_MESSAGE.WINNING_NUMBERS);
  let numberStrings = numberInput.split(',');
  let numbers = [];

  numberStrings.forEach((numberString) => {
    let number = Number(numberString);
    if (Number.isNaN(number)) throw new Error(ERROR.WINNING_NUMBER_IS_NAN);
    numbers.push(number);
  });

  return numbers;
}

async function inputBonusNumber() {
  let bonusString = await Console.readLineAsync(INPUT_MESSAGE.BONUS_NUMBER);
  let bonus = Number(bonusString);
  if (Number.isNaN(bonus)) throw new Error(ERROR.BONUS_NUMBER_IS_NAN);
  return bonus;
}

export default App;