import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR } from './Constant.js';
import Lotto from './Lotto.js';
import WinningNumbers from './WinningNumbers.js';

class App {
  async play() {
    let lottoMoney = await inputMoney();
    checkMoney(lottoMoney);

    let tickets = issueTickets(lottoMoney);
    printTicketInformation(tickets);
    let winningNumbers = await inputWinningNumbers();
  }
}

async function inputMoney() {
  let moneyString = await Console.readLineAsync('구입금액을 입력해주세요.\n');
  let money = Number(moneyString);
  if (Number.isNaN(money)) throw new Error(ERROR.MONEY_IS_NAN);
  return money;
}

function checkMoney(lottoMoney) {
  Console.print(lottoMoney);
  if (lottoMoney % 1000 != 0) throw new Error(ERROR.MONEY_HAS_REMAINDER);
}

function issueTickets(lottoMoney) {
  let ticketsToIssue = lottoMoney / 1000;
  let tickets = [];

  for (let i = 0; i < ticketsToIssue; i++) {
    let ticketNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    let ticket = new Lotto(ticketNumbers);
    ticket.sortNumbers();
    tickets.push(ticket);
  }

  return tickets;
}

function printTicketInformation(tickets) {
  let ticketsIssued = tickets.length;
  Console.print(`${ticketsIssued}개를 구매했습니다.`);
  tickets.forEach((ticket) => {
    ticket.printNumbers();
  });
}

async function inputWinningNumbers() {
  let numbers = await inputNumbers();
  let winningNumbers = new WinningNumbers(numbers);
  let bonus = await inputBonusNumber();
  winningNumbers.addBonusNumber(bonus);
  return winningNumbers;
}

async function inputNumbers() {
  let numberInput = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');
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
  let bonusString = await Console.readLineAsync('보너스 번호를 입력해 주세요.\n');
  let bonus = Number(bonusString);
  if (Number.isNaN(bonus)) throw new Error(ERROR.BONUS_NUMBER_IS_NAN);
  return bonus;
}

export default App;