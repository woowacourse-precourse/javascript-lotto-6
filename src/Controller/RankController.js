import {RANK_DATA} from "../constants/message.js";
import RankModel from "../Model/RankModel.js";

class Rank {
    #ranks;

    constructor() {
        this.#ranks = [];
        this.#set();
    }

    #set() {
        RANK_DATA.forEach((rank) => {
            this.#ranks.push(new RankModel(rank.ranking, rank.standard, rank.prize));
        });
    }

    choose(count, hasBonus) {
        this.#ranks.forEach((rankmodel) => {
            rankmodel.win(count, hasBonus);
        });
    }

    findTotalWinnings() {
        return this.#ranks.reduce(
            (accumulator, rankmodel) => accumulator + rankmodel.getWinnings(),
            0
        );
    }

    get() {
        return this.#ranks;
    }
}

export default Rank;