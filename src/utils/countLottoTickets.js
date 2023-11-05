import { Random, Console } from '@woowacourse/mission-utils';

const countLottoTickets = (money) => {
  const getNumberOfLottoTickets = money / 1000;
  Console.print(`${getNumberOfLottoTickets}개를 구매했습니다.`);

  const generatedTickets = generateLottoTickets(getNumberOfLottoTickets);
  return generatedTickets;
};

module.exports = { countLottoTickets };
