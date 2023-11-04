import { Console, Random } from "@woowacourse/mission-utils";
import { ERROR } from './Constant.js'

class App {
  async play() {
    let lottoMoney = await inputMoney();
    checkMoney(lottoMoney);
    let tickets = issueTickets(lottoMoney);
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
  ticketsToIssue = lottoMoney / 1000;
  tickets = [];

  for (let i = 0; i < ticketsToIssue; i++) {
    ticketNumbers = Random.pickUniqueNumbersInRange(1, 45, 6);
    ticket = Lotto(ticketNumbers);
    ticket.sortNumbers();
    tickets.append(ticket);
  }

  return tickets
}

export default App;
