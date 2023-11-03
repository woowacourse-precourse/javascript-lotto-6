import lottoGameConsole from '../cli/lottoGameConsole.js';
import systemErrorHandler from '../error/handlers/systemErrorHandler.js';

const requirePurchasedLottoAmount = async () =>
  systemErrorHandler.retryOnErrors(async () => {
    const purchasedLottoAmount = await lottoGameConsole.input.readPurchasedLottoAmount();
    return purchasedLottoAmount;
  });

const lottoGame = {
  async run() {
    const purchasedLottoAmount = await requirePurchasedLottoAmount();
    console.log(purchasedLottoAmount);
  },
};

export default lottoGame;
