import {LottoController} from "./controller/LottoController.js";
import {InputView} from "./view/InputView.js";
import {OutputView} from "./view/OutputView.js";
import {InputValidator} from "./view/InputValidator.js";
import {InputConverter} from "./view/InputConverter.js";
import {LottoGenerator} from "./domain/LottoGenerator.js";

export class App {
    async play() {
        const lottoGenerator = LottoGenerator.random()
        const lottoController = new LottoController(new InputView(new InputValidator(), new InputConverter()), new OutputView(), lottoGenerator);
        await lottoController.start()
    }
}


