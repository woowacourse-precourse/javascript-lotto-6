import { CONSOLE_MESSAGE } from '../utils/Define';
import inputView from './InputReader';

const getPurchaseAmount = async () => {
  const purchaseAmount = await inputView(CONSOLE_MESSAGE.requestBuyingMessage);
};

export { getPurchaseAmount };
