import purchaseAmountUI from '../util/UI/purchaseAmountUI.js';
import purchaseResaultUI from '../util/UI/purchaseResultUI.js';
import createPurchaseData from '../util/purchase/createPurchaseData.js';
import purchaseValidService from './validate/purchaseValidService.js';

export default async function gameStart() {
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

gameStart();
