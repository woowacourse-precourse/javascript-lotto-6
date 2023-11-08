class LottoResult{
    #myLotto;
    #winningLotto;
    #matching;
    #matchReward;

    constructor(myLotto, winningLotto) {
        this.#myLotto = myLotto;
        this.#winningLotto = winningLotto;
        this.#matching = [0, 0, 0, 0, 0];
        this.#matchReward = [5000, 50000, 1500000, 30000000, 2000000000];
        this.#compareLotto();
    }

    #updateMatch(match, isHave) {
        switch(match){
            case 3 : this.#matching[0]++; break;
            case 4 : this.#matching[1]++; break;
            case 6 : this.#matching[4]++; break;
        }
        if (match == 5 && !isHave){
            this.#matching[2]++;
        }
        if (match == 5 && isHave){
            this.#matching[3]++;
        }
    }

    #compareLotto() {
        for (let lotto of this.#myLotto.getMyLottos()){
            let match = lotto.getNumbers().filter(element => this.#winningLotto.getNumbers().includes(element));
            this.#updateMatch(match.length, lotto.getNumbers().includes(this.#winningLotto.getBonusNumber()));
        }
    }

    calculateRateResult() {
        let purchaseAmount = this.#myLotto.getLottoSize() * 1000;
        let reward = this.#matching.reduce((sum, value, index) => {
            return sum + (value * this.#matchReward[index]);
        }, 0);

        return reward/purchaseAmount;
    }
    
    getMatching() {
        return this.#matching;
    }

    
}

export default LottoResult;