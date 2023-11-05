export const CommonMessage = {
  ErrorPrefix: '[ERROR]',
};

export const RequestMessage = {
  Purchase: '구입금액을 입력해 주세요.',
};

export const ResponseMessage = {
  PurchaseResult: '개를 구매했습니다.',
};

export const PurchaseRule = {
  UNIT: 1000,
};

export const LottoRule = {
  Price: 1000,
  MinNumber: 1,
  MaxNumber: 45,
};

export const PurchaseErrorMessage = {
  NoValue: `${CommonMessage.ErrorPrefix} 값을 입력해 주세요.`,
  WrongUnit: `${CommonMessage.ErrorPrefix} ${PurchaseRule.UNIT}단위로 입력해 주세요.`,
};
