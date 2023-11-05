import purchaseAmountUI from '../util/UI/gameStart/purchaseAmountUI.js';
import purchaseResaultUI from '../util/UI/gameStart/purchaseResultUI.js';
import createPurchaseData from '../util/purchase/createPurchaseData.js';
import purchaseValidService from './validate/purchaseValidService.js';

export default async function getPurchase() {
  try {
    const input = await purchaseAmountUI();
    const purchaseCount = await purchaseValidService(input);
    const lottos = [];
    const purchasedLotto = await createPurchaseData(purchaseCount, lottos);
    await purchaseResaultUI(purchaseCount, purchasedLotto);

    return purchasedLotto;
  } catch (error) {
    throw new Error(error.message);
  }
}
