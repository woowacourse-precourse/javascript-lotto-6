import OPTIONS from '../../constants/options.js';

export const isValidAmountUnit = amount => !(amount % OPTIONS.baseAmount);

export const isValidAmountRange = amount => amount <= OPTIONS.maxPurchaseAmount;
