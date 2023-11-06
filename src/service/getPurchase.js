import purchaseResaultUI from '../util/UI/gameStart/purchaseResultUI.js';
import createPurchaseData from '../util/purchase/createPurchaseData.js';
import purchaseValidService from './validate/purchaseValidService.js';

export default async function getPurchase(input) {
  try {
    const purchaseCount = await purchaseValidService(input);
    const purchaseAmount = Number(input);
    const lottos = [];
    const purchasedLotto = createPurchaseData(purchaseCount, lottos);
    await purchaseResaultUI(purchaseCount, purchasedLotto);

    return { purchaseAmount, purchasedLotto };
  } catch (error) {
    throw new Error(error.message);
  }
}
