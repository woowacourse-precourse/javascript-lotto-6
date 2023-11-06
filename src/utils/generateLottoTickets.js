import { Random, Console } from '@woowacourse/mission-utils';
import { compareLotto } from './utils/displayResult';

const generateBonusNumber = (countLottoTickets) => {
  try {
    const bonusNumber = Array.from({ length: countLottoTickets }, () => {
      return Random.pickUniqueNumbersInRange(1, 45, 1);
    });
  } catch (error) {
    throw new Error('[ERROR]');
  }
};

const sortAscending = (totalTickets) => {
  try {
    const sortTickets = totalTickets.map((unique) =>
      unique.sort((lottoNumber1, lottoNumber2) => lottoNumber1 - lottoNumber2),
    );

    sortTickets.forEach((ticket, _) => {
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

module.exports = { generateLottoTickets, sortAscending, generateBonusNumber };
