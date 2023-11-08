import { LottoRule, PurchaseRule } from './rule.js';

export const CommonMessage = {
  ErrorPrefix: '[ERROR]',
};

export const RequestMessage = {
  Purchase: '구입금액을 입력해 주세요.',
  WinningNumbers: '당첨 번호를 입력해 주세요.',
  BonusNumber: '보너스 번호를 입력해 주세요.',
};

export const ResponseMessage = {
  PurchaseResult: '개를 구매했습니다.',
};

export const PurchaseErrorMessage = {
  NoValue: `${CommonMessage.ErrorPrefix} 값을 입력해 주세요.`,
  WrongUnit: `${CommonMessage.ErrorPrefix} ${PurchaseRule.UNIT}단위로 입력해 주세요.`,
};

export const LottoNumberMessage = {
  NotInteger: `정수만 입력해주세요.`,
  OutOfRange: `${CommonMessage.ErrorPrefix} ${LottoRule.MinNumber} ~ ${LottoRule.MaxNumber} 사이의 숫자를 입력해주세요.`,
};

export const WinningNumberErrorMessage = {
  ...LottoNumberMessage,
  Duplicate: `${CommonMessage.ErrorPrefix} 서로 중복되지 않는 숫자를 입력해주세요.`,
  WrongNumber: `${CommonMessage.ErrorPrefix} ${LottoRule.Number}개의 숫자를 입력해주세요.`,
};

export const BonusNumberErrorMessage = {
  ...LottoNumberMessage,
  Duplicate: `${CommonMessage.ErrorPrefix} 당첨 번호와 중복될 수 없습니다.`,
}
