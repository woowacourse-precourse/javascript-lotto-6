class LottoService {
    constructor() {
        this.numbers = []
        this.bonusNumber = null;
        this.db = []
        this.prize = {
            6: 2000000000,
            "b": 300000000,
            5: 1500000,
            4: 50000,
            3: 5000
        }
    }

    setNumber(numbers) {
        this.numbers = numbers;
    }

    setBonusNumber(bonusNumber) {
        this.bonusNumber = bonusNumber;
    }
}

export default LottoService