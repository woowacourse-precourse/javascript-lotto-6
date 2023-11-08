import sortedLottoNumbers from "./generator/generateLottoRandomNumbers";
import OutputView from "./view/OutputView";
import { BUY_MESSAGE } from "./constant/message";
import OPTIONS from "./constant/option";

class User {
    constructor() {
        this.userBuyMoney = 0;
        this.lottoArray = [];
        this.bonusNumber = 0;
    }

    lottoBuy(money) {
        this.userBuyMoney = Number(money);
        this.makeLotto();
    }

    amountOfBuying() {
        const amount = this.userBuyMoney / OPTIONS.thousand;
        return amount;
    }

    makeLotto() {
        const amount = this.amountOfBuying();
        for (let i = 0; i < amount; i++) {
            const randomLottoNumber = sortedLottoNumbers();
            this.saveLotto(randomLottoNumber);
        }
        this.printRandomNumber(this.lottoArray, amount);
    }

    saveLotto(randomNumber) {
        this.lottoArray.push(randomNumber);
    }

    printRandomNumber(randomNumbers, amount) {
        OutputView.printBuyAmount(BUY_MESSAGE(amount));
        randomNumbers.forEach((numbers) => {
            OutputView.printRandomNumbersJoin(numbers);
        })
    }

    saveBonusNumber(bonusNumber) {
        this.bonusNumber = Number(bonusNumber);
    }
}

export default User;
