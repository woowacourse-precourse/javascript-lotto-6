import {LOTTO} from "../utils/Define.js";

class PrizeService {
    constructor(prize) {
        this.prize = prize;
    }

    prizeReward(lottos,winningLotto, quantitiy){
        const lottoResult = this.#compareNumbers(lottos,winningLotto);
        const totalReward= this.#calculateReward(rankCounts,this.prize);
        const lottoROI = this.#calculateLottoROI(totalReward,quantitiy*LOTTO.price);
        return [lottoResult,lottoROI];
    }

    #compareNumbers(lottos, winningLotto) {
        return lottos.reduce((acc, lotto) => {
            const rank = this.#compareLotto(lotto, winningLotto);
            acc[rank] = acc[rank]
                ? [rank, acc[rank][1] + 1, acc[rank][2], acc[rank][3]]
                : [...this.prize.getPrizeAndMatches(rank), rank, 1];
            return acc;
        }, {});
    }

    #compareLotto(lotto, winningLotto) {
        const matchCount = this.#compareSingleNumber(lotto.getNumbers(), winningLotto.getNumbers());
        const isBonusMatched = this.#compareBonusNumber(lotto.getNumbers(), winningLotto.getBonusNumber());
        const rank = this.#calculateRank(matchCount, isBonusMatched);
        return rank;
    }


    #compareSingleNumber(lottoNumbers, winningNumbers) {
        return lottoNumbers.filter(number => winningNumbers.includes(number)).length;
    }

    #compareBonusNumber(lottoNumbers, bonusNumber) {
        return lottoNumbers.includes(bonusNumber);
    }

    #calculateRank(matchCount, isBonusMatched) {
        const rankMap = {
            '6': 1,
            '5true': 2,
            '5false': 3,
            '4': 4,
            '3': 5
        };
        return rankMap[`${matchCount}${isBonusMatched}`] || 0;
    }

    #calculateReward(rankCounts, prize) {
        return Object.keys(rankCounts).reduce((totalReward, rank) => {
            const count = rankCounts[rank];
            const rewardPerLotto = prize.getPrize(rank);
            return totalReward + rewardPerLotto * count;
        }, 0);
    }

    #calculateLottoROI(totalReward, purchaseAmount) {
        return (totalReward/purchaseAmount) *100;
    }
}

export default PrizeService;