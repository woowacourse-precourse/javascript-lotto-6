/**
 * @typedef {object} CommonValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(inputValue : string) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} CommonValidationTypes
 * @property {CommonValidationType} emptyValues - 입력 값이 비어있는지를 검사하기 위한 객체
 * @property {CommonValidationType} existSpaces - 입력 값에 공백이 포함되어 있는지를 검사하기 위한 객체
 */

/**
 * @typedef {object} PurchasedLottoAmountValidationType
 * @property {string} errorMessage - 유효성 검사 실패 시의 에러 메시지
 * @property {(purchasedLottoAmount : number) => boolean} isValid - 유효성 검사 함수
 */

/**
 * @typedef {object} PurchasedLottoAmountValidationTypes
 * @property {PurchasedLottoAmountValidationType} amountRange - 로또 구매 가격 범위를 검사하기 위한 객체
 * @property {PurchasedLottoAmountValidationType} lottoUnit - 로또 구매 가격이 로또 하나 당 가격으로 나누어 떨어지는지 검사하기 위한 객체
 */

export {};
