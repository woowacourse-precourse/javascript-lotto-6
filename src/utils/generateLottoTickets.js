import { Random } from '@woowacourse/mission-utils';

const generateLottoTickets = (NumberOfLottoTickets) => {
  const totalTickets = Array.from({ length: NumberOfLottoTickets }, () => {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  });

  Console.print(totalTickets);
  return totalTickets;
};

export default generateLottoTickets;
