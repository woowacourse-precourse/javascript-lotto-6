import { MATCH_STRINGS, MATCH_WINNING_AMOUNTS } from '../constants/match';

class Store {
  #principal;

  #matchResults;

  constructor(principal) {
    this.#principal = principal;
    this.#matchResults = Store.#setMatchResults();
  }

  storeMatchResult({ matchCount, matchBonus }) {
    if (matchCount < 3) {
      return;
    }

    const matchString = Store.#getMatchString({ matchCount, matchBonus });
    const count = this.#matchResults.get(matchString);
    this.#matchResults.set(matchString, count + 1);
  }

  getMatchResults() {
    return [...this.#matchResults].map(([matchString, count]) => {
      return {
        matchString,
        count,
        money: MATCH_WINNING_AMOUNTS[matchString],
      };
    });
  }

  getTotalReturn() {
    return ((this.#getTotalRevenue() / this.#principal) * 100).toFixed(1);
  }

  #getTotalRevenue() {
    return [...this.#matchResults].reduce((acc, [matchResult, count]) => {
      const revenue = MATCH_WINNING_AMOUNTS[matchResult] * count;
      return acc + revenue;
    }, 0);
  }

  static #setMatchResults() {
    const matchResults = new Map();

    Object.values(MATCH_STRINGS).forEach((matchString) => {
      matchResults.set(matchString, 0);
    });

    return matchResults;
  }

  static #getMatchString({ matchCount, matchBonus }) {
    const { matchThree, matchFour, matchFive, matchFiveAndBonus, matchSix } = MATCH_STRINGS;
    if (matchCount === 3) {
      return matchThree;
    }

    if (matchCount === 4) {
      return matchFour;
    }

    if (matchCount === 5) {
      if (matchBonus) {
        return matchFiveAndBonus;
      }
      return matchFive;
    }

    return matchSix;
  }
}

export default Store;
