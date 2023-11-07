const REGEXP = {
  PURCHASE_AMOUNT: {
    FORMAT_CHECK: /^\d+$/,
  },
  WINNING_NUMBER: {
    CHARACTER_CHECK: /^[,0-9]+$/,
    FORMAT_CHECK: /^[0-9]+(,[0-9]+)*$/,
  },
  BONUS_NUMBER: {
    FORMAT_CHECK: /^\d+$/,
  },
};

export default REGEXP;
