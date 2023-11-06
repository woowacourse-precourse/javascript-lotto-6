import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR } from './Constant.js'
import Lotto from './Lotto.js'

class App {
  async play() {
    let lottoMoney = await inputMoney();
    checkMoney(lottoMoney);

    let tickets = issueTickets(lottoMoney);
    printTicketInformation(tickets);
  }
}

async function inputMoney() {
  let money = await Console.readLineAsync('구입금액을 입력해주세요.\n');
  money = parseInt(money);
  return money;
}

function checkMoney(lottoMoney) {
  if (Number.isNaN(lottoMoney)) throw new Error(ERROR.MONEY_IS_NAN);
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

export default App;