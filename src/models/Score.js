class Score {
    #score;

    constructor() {
        this.#score = {
            '1st': 0,
            '2nd': 0,
            '3rd': 0,
            '4th': 0,
            '5th': 0
        };
    }

    countCorrectNumbers(lotto, winningNum) {
        let count = 0;
        for (let i = 0; i < lotto.length; i++) {
            if (lotto.includes(winningNum[i])) {
                count += 1;
            }
        }
        return count;
    }

    checkBonusNumber(lotto, bonusNum) {
        return lotto.includes(bonusNum);
    }

    determineRank(correctCount, hasBonus) {
        if (correctCount === 6) {
            return '1st';
        } 
        if (correctCount === 5) {
            if (hasBonus === true) {
                return '2nd';
            }
            return '3rd';
        }
        if (correctCount === 4) {
            return '4th';
        }
        if (correctCount === 3) {
            return '5th';
        }
    }

    updateScore(correctCount, hasBonus) {
        const rank = this.determineRank(correctCount, hasBonus);
        if (rank) {
            this.#score[rank] += 1;
        }
    }

    checkLotto(lotto, winningNum, bonusNum) {
        const correctCount = this.countCorrectNumbers(lotto, winningNum);
        const hasBonus = this.checkBonusNumber(lotto, bonusNum);
        this.updateScore(correctCount, hasBonus);
    }

    getScore() {
        return this.#score;
    }
}

export default Score;