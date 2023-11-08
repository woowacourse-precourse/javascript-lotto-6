import Lotto from './Lotto.js';

class LottoPurchase {
    constructor(purchaseAmount) {
        this.purchaseAmount = purchaseAmount;
        this.lottos = [];
    }

    purchase() {
        const numberOfLottos = Math.floor(this.purchaseAmount / Lotto.PRICE);
        for (let i = 0; i < numberOfLottos; i++) {
            const lottoNumbers = Lotto.generateRandomNumbers();
            this.lottos.push(new Lotto(lottoNumbers));
        }
    }

    getLottos() {
        return this.lottos;
    }
}

export default LottoPurchase;
