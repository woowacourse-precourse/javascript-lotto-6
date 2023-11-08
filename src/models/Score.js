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
        return lotto.filter(number => winningNum.includes(number)).length;
    }

    checkBonusNumber(lotto, bonusNum) {
        return lotto.includes(bonusNum);
    }

    determineRank(correctCount, hasBonus) {
        switch (correctCount) {
            case 6: return '1st';
            case 5: return hasBonus ? '2nd' : '3rd';
            case 4: return '4th';
            case 3: return '5th';
        }
    }

    updateScore(correctCount, hasBonus) {
        const rank = this.determineRank(correctCount, hasBonus);
        if (rank && this.#score.hasOwnProperty(rank)) {
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