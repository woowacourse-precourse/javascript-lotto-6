export const InputMessage = {
  Purchase: '구입금액을 입력해 주세요.',
};

export const CommonMessage = {
  ErrorPrefix: '[ERROR]',
};

export const PurchaseRule = {
  UNIT: 1000,
};

export const PurchaseErrorMessage = {
  NoValue: `${CommonMessage.ErrorPrefix} 값을 입력해 주세요.`,
  WrongUnit: `${CommonMessage.ErrorPrefix} ${PurchaseRule.UNIT}단위로 입력해 주세요.`,
};
