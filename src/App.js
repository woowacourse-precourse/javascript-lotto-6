import LottoMaker from "./LottoMaker.js";
import inputHandler from "./utils/inputHandler.js";
import {INPUT_MESSAGE} from "./constants/Constants.js";
import User from "./User.js";

class App {
    #lottoTickets

    constructor() {
        this.#lottoTickets = 0;
    }


    async play() {
        const lottoMaker = new LottoMaker();
        const input =
            await inputHandler.getInput(INPUT_MESSAGE.MONEY);

        const user = await new User(parseInt(input));

        await user.buyLotto();

        this.#lottoTickets = user.lottoTicketsNumber;
        lottoMaker.makeLottoAndPrint(this.#lottoTickets);

        await lottoMaker.setLottoNumbers();

    }


    checkWinning() {

    }
}

const app = new App();
app.play();

export default App;
