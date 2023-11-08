import {RANK_DATA} from "../constants/message.js";
import RankModel from "../Model/RankModel.js";

class RankController {
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
        this.#ranks.forEach((rankModel) => {
            rankModel.win(count, hasBonus);
        });
    }

    findTotalWinnings() {
        return this.#ranks.reduce(
            (accumulator, rank) => accumulator + rank.getWinnings(),
            0
        );
    }

    get() {
        return this.#ranks;
    }
}

export default RankController;