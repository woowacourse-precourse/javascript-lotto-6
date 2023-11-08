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

    printResult(myLotto, winningLotto) {}
};

export default OutputView;