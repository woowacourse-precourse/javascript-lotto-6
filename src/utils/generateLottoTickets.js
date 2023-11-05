import { Random, Console } from '@woowacourse/mission-utils';

const sortAscending = (totalTickets) => {
  try {
    const sortTickets = totalTickets.map((unique) =>
      unique.sort((lottoNumber1, lottoNumber2) => lottoNumber1 - lottoNumber2),
    );

    sortTickets.forEach((ticket, index) => {
      Console.print(ticket);
    });

    return sortTickets;
  } catch (error) {
    throw new Error('[ERROR]');
  }
};

const generateLottoTickets = (NumberOfLottoTickets) => {
  try {
    const totalTickets = Array.from({ length: NumberOfLottoTickets }, () => {
      return Random.pickUniqueNumbersInRange(1, 45, 6);
    });
    
    sortAscending(totalTickets);
    return totalTickets;
  } catch (error) {
    throw new Error('[ERROR]');
  }
};

module.exports = { generateLottoTickets, sortAscending };
