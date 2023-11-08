import { Console, Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto";
import { isValidRangeArr, isValidRange } from "./utils/validateRange";
class App {
    async play() {
        Console.print("구입금액을 입력해 주세요.");
        const purchaseAmount = await this.getPurchaseAmount();
        Console.print(purchaseAmount);
        const lottoArr = this.lottoVendingMachine(purchaseAmount);
        Console.print(this.renderLottoTickets(lottoArr));
        Console.print("당첨번호를 입력해주세요.");
        const winningNumber = await this.getWinningNumber();
        Console.print(winningNumber);
        Console.print("보너스 번호를 입력해 주세요.");
        const bonusNumber = await this.getBonusNumber(winningNumber);
        Console.print(bonusNumber);
    }

    async getPurchaseAmount() {
        const purchaseAmount = await Console.readLineAsync()
            .then((value) => {
                this.isValidPurchaseAmount(Number(value));
                return Number(value);
            })
            .catch((err) => {
                return this.getPurchaseAmount();
            });
        return purchaseAmount;
    }

    isValidPurchaseAmount(input) {
        if (isNaN(input)) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        if (input % 1000 !== 0) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    lottoVendingMachine(purchaseAmount) {
        const lottoAmount = purchaseAmount / 1000;
        const lottoArr = [];
        while (lottoArr.length < lottoAmount) {
            try {
                const lottoNumberArr = Random.pickUniqueNumbersInRange(
                    1,45,6
                ).sort((a, b) => a - b);
                lottoArr.push(new Lotto(lottoNumberArr));
            } catch (err) {
                this.lottoVendingMachine(purchaseAmount);
            }
        }
        return lottoArr;
    }

    renderLottoTickets(lottoArr) {
        const lottoNumberArr = lottoArr.map((el) => el.printLottoNumber());
        const removeArrSpace = lottoNumberArr.map((el) => el.join(", "));
        const lottoText = `${
            lottoArr.length
        }개를 구매했습니다.\n[${removeArrSpace.join("]\n[")}]`;
        return lottoText;
    }

    async getWinningNumber() {
        const winningNumber = await Console.readLineAsync()
            .then((value) => {
                this.isValidWinningNumber(value);
                return value;
            })
            .catch((err) => {
                return this.getWinningNumber();
            });
        return winningNumber;
    }

    isValidWinningNumber(input) {
        const inputArr = input.split(",");
        if (inputArr.length !== 6) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }

        if (!isValidRangeArr(inputArr)) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
    }

    async getBonusNumber(winningNumber) {
        const bonusNumber = await Console.readLineAsync()
            .then((value) => {
                this.isValidBonusNumber(value, winningNumber);
                return value;
            })
            .catch((err) => {
                return this.getBonusNumber();
            });
        return bonusNumber;
    }

    isValidBonusNumber(input, winningNumber) {
        const winningNumArr = winningNumber.split(",");
        if (!isValidRange(input)) {
            throw new Error("[ERROR] 숫자가 잘못된 형식입니다.");
        }
        if (winningNumArr.includes(input)) {
            throw new Error("[ERROR] 당첨번호와 중복된 번호입니다.");
        }
    }

    calculateWinningArr(winningNumber, bonusNumber, lottoArr) {
        const lottoResult = [];
        const winningArr = new Array(5);
        lottoArr.forEach((el) =>
            el.calculateLotto(winningNumber, bonusNumber, lottoResult)
        );
        for (let i = 0; i < 4; i++) {
            winningArr[i] = lottoResult.filter((el) => el === 3 + i).length;
        }
        const isMatchBonus = lottoResult.includes("5bonus");
        isMatchBonus
            ? (winningArr[4] = lottoResult.filter(
                  (el) => el === "5bonus"
              ).length)
            : (winningArr[4] = 0);
        return winningArr;
    }

    calculateProfitRate(winningArr, purchaseAmount) {
        const totalPrize =
            5000 * winningArr[0] +
            50000 * winningArr[1] +
            1500000 * winningArr[2] +
            30000000 * winningArr[4] +
            2000000000 * winningArr[3];
        const profitRate = ((totalPrize/purchaseAmount) * 100).toFixed(1);
        console.log(profitRate);
        return profitRate;
    }
}

export default App;
