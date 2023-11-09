import {LOTTO} from "../utils/Define.js";
import Prize from "../domain/Prize.js";

class PrizeService {
    constructor() {
        this.prize = new Prize();
    }

    prizeReward(lottos,winningLotto, quantitiy){
        const lottoResult = this.#getRankCount(lottos,winningLotto);
        const totalReward= this.#calculateReward(lottoResult,this.prize);
        const lottoROI = this.#calculateLottoROI(totalReward,quantitiy*LOTTO.price);
        return [lottoResult,lottoROI];
    }

    #getRankCount(lottos, winningLotto) {
        const rankCount = [0, 0, 0, 0, 0]; // 5등부터 1등 순서의 리스트 초기화

        lottos.forEach(lotto => {
            const rank = this.#compareLotto(lotto, winningLotto);
            if (rank >= 1 && rank <= 5) {
                rankCount[5 - rank] += 1; // 해당 등수의 개수 증가
            }
        });
        return rankCount;
    }


    #compareLotto(lotto, winningLotto) {
        const matchCount = this.#compareSingleNumber(lotto.getNumbers(), winningLotto.getNumbers()); // 숫자
        const isBonusMatched = this.#compareBonusNumber(lotto.getNumbers(), winningLotto.getBonusNumber()); // true, false

        return this.#calculateRank(matchCount, isBonusMatched); // 1~6까지 등수 (6은 당첨X)
    }


    #compareSingleNumber(lottoNumbers, winningNumbers) {
        return lottoNumbers.filter(number => winningNumbers.includes(number)).length;
    }

    #compareBonusNumber(lottoNumbers, bonusNumber) {
        return lottoNumbers.includes(bonusNumber);
    }

    #calculateRank(matchCount, isBonusMatched) {
        const rankMap = {
            '6false': 1,
            '5true': 2,
            '5false': 3,
            '4false': 4,
            '3false': 5,
            '0false': 6
        };
        return rankMap[`${matchCount}${isBonusMatched}`] ;
    }


    #calculateReward(rankCounts, prize) {
        return rankCounts.reduce((totalReward, count, i) => {
            const ranks = 5 - i; // rankCounts는 5등부터 1등 순서로 되어있으므로, rank 계산
            const rewardPerRank = prize.getPrize(ranks);
            return totalReward + rewardPerRank * count;
        }, 0);
    }

    #calculateLottoROI(totalReward, purchaseAmount) {
        return (totalReward/purchaseAmount) *100;
    }
}

export default PrizeService;