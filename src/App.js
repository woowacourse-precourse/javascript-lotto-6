import {LottoController} from "./controller/LottoController.js";
import {InputView} from "./view/InputView.js";
import {OutputView} from "./view/OutputView.js";
import {InputValidator} from "./view/InputValidator.js";
import {InputConverter} from "./view/InputConverter.js";

export class App {
    async play() {

        const lottoController = new LottoController(new InputView(new InputValidator(), new InputConverter()), new OutputView());
        await lottoController.start()
    }
}


