import { CONSTANTS } from "./GameConstant.js";

export const ERROR_MESSAGE = Object.freeze({
    INVALID_PRICE: `${CONSTANTS.ERROR_PRIFIX} ${Number(CONSTANTS.PURCHASE_UNIT_PRICE).toLocaleString()}원 단위의 금액만 입력 가능합니다.`,
    INVALID_NOT_A_NUMBER : `${CONSTANTS.ERROR_PRIFIX} 0보다 큰 자연수만 입력 가능합니다.`
})