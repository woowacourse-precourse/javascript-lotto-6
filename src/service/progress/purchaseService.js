import purchaseAmountUI from '../../util/UI/gameStart/purchaseAmountUI.js';
import getPurchase from '../getPurchase';

export default async function purchaseService() {
  try {
    const purchase = await purchaseAmountUI();
    const purchaseList = await getPurchase(purchase);
    return purchaseList;
  } catch (error) {
    throw new Error(error.message);
  }
}
