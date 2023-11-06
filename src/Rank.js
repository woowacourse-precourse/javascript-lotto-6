import RankItem from './RankItem.js';
import { RANK_DATA } from './constants/lottoGame.js';

class Rank {
  #ranks;

  constructor() {
    this.#ranks = [];
    this.#set();
  }

  #set() {
    RANK_DATA.forEach((rank) => {
      this.#ranks.push(new RankItem(rank.ranking, rank.standard, rank.price));
    });
  }

  choose(count, hasBonus) {
    this.#ranks.forEach((rankItem) => {
      rankItem.win(count, hasBonus);
    });
  }
}

export default Rank;
