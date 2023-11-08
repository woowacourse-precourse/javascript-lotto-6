import { OUTPUT_MESSAGE } from "../constants/constants.js";
import LottoResult from "../domain/LottoResult.js";
import { Console } from "@woowacourse/mission-utils";


class OutputView {
    printMyLotto(perchaseNumber, myLotto) {
        Console.print(OUTPUT_MESSAGE.printPurchaseNumber(perchaseNumber));

        for (let element of myLotto.getMyLottos()) {
            Console.print(element.getNumbers());
        }
    }

    printResult(myLotto, winningLotto) {
        let lottoResult = new LottoResult(myLotto, winningLotto);
        let match = lottoResult.getMatching();
        Console.print(OUTPUT_MESSAGE.printWinningStatistics);
        Console.print(OUTPUT_MESSAGE.printFifth(match[0]));
        Console.print(OUTPUT_MESSAGE.printFourth(match[1]));
        Console.print(OUTPUT_MESSAGE.printThird(match[2]));
        Console.print(OUTPUT_MESSAGE.printSecond(match[3]));
        Console.print(OUTPUT_MESSAGE.printFirst(match[4]));
        Console.print(OUTPUT_MESSAGE.printRateReturn(lottoResult.calculateRateResult()));  
    }
};

export default OutputView;