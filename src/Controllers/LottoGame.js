import {
  LottoPurchaseController,
  DrawnLottoController,
  AnnounceResult,
} from "./index.js";

export default class LottoGame {
  static async start() {
    const { purchaseAmount, lottos } =
      await LottoPurchaseController.purchaseLottos();

    const drawnLotto = await DrawnLottoController.createDrawnLotto();

    AnnounceResult.announceTotalResult(lottos, drawnLotto, purchaseAmount);
  }
}
