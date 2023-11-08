import MyLotto from "../domain/MyLotto.js";
import InputView from "../view/input-view.js";
import { Console } from "@woowacourse/mission-utils";

class LottoController {
    #inputView;

    constructor() {
        this.#inputView = new InputView();
    }

    async play() {
        let count = await this.#inputView.readPurchaseAmount();
        let lottos = new MyLotto(count);
        Console.print(`\n${count}개를 구매했습니다.`);
        for (let element of lottos.getMyLottos()){
            Console.print(element.getNumbers());
        }

    }
}

export default LottoController;