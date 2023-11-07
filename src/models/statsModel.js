import MESSAGE from '../constants/message.js';
import VALUE from '../constants/value.js';

const statsModel = {
  /*
  [1, 2, 3, 4, 5, 6] ---> 5000
  [7, 8, 9, 10, 11, 12] ---> 0
  */
  getRevenue(numbers, bonus, count) {
    let revenue = 0;

    if (count === VALUE.range.bonus && numbers.includes(bonus)) {
      revenue += VALUE.revenues.at(-2);
    } else if (count === VALUE.range.count) {
      revenue += VALUE.revenues.at(-1);
    } else if (count >= VALUE.range.win) {
      revenue += VALUE.revenues.at(count - VALUE.range.win);
    }

    return revenue;
  },

  // [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]] ---> [5000, 0] ---> [5000]
  getRevenues(random, lotto, bonus) {
    const revenues = random
      .map((numbers) => {
        const count = numbers.filter((number) => lotto.includes(number)).length;

        return this.getRevenue(numbers, bonus, count);
      })
      .filter((revenue) => revenue > 0);

    return revenues;
  },

  // [5000, 50000, 1500000, 30000000, 2000000000] ---> [1, 0, 0, 0, 0]
  getMatchCounts(revenues) {
    const matchCounts = VALUE.revenues.map((amount) => {
      const count = revenues.filter((revenue) => revenue === amount).length;

      return count;
    });

    return matchCounts;
  },

  // ['3개 일치 (5,000원) - ', ...] + [1, 0, 0, 0, 0] ---> ['3개 일치 (5,000원) - 1개', ...]
  getStats(matchCounts) {
    const stats = VALUE.stats.map((string, index) => {
      const updatedString = `${string}${matchCounts[index]}${MESSAGE.unit.number}`;

      return updatedString;
    });

    return stats;
  },
};

export default statsModel;
