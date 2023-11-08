export const WINNING_PRICE = Object.freeze({
    FIRST : 2000000000,
    SECOND : 30000000,
    THIRD : 1500000,
    FOURTH : 50000,
    FIFTH : 5000,
})
export const WINNING_PRICE_PROMPT = Object.freeze({
    FIRST : Number(2000000000).toLocaleString(),
    SECOND : Number(30000000).toLocaleString(),
    THIRD : Number(1500000).toLocaleString(),
    FOURTH : Number(50000).toLocaleString(),
    FIFTH : Number(5000).toLocaleString(),
})
export const MATCHING_NUMBER = Object.freeze({
    FIRST : 6,
    SECOND : 5,
    THIRD : 5,
    FOURTH : 4,
    FIFTH : 3,
})
export const ROI_DETAIL_MESSAGE = Object.freeze({
    FIRST : `${MATCHING_NUMBER.FIRST}개 일치 (${WINNING_PRICE_PROMPT.FIRST}원) - `,
    SECOND : `${MATCHING_NUMBER.SECOND}개 일치, 보너스 볼 일치 (${WINNING_PRICE_PROMPT.SECOND}원) - `,
    THIRD : `${MATCHING_NUMBER.THIRD}개 일치 (${WINNING_PRICE_PROMPT.THIRD}원) - `,
    FOURTH : `${MATCHING_NUMBER.FOURTH}개 일치 (${WINNING_PRICE_PROMPT.FOURTH}원) - `,
    FIFTH : `${MATCHING_NUMBER.FIFTH}개 일치 (${WINNING_PRICE_PROMPT.FIFTH}원) - `,
}) 

/* 당첨 통계
---
3개 일치 (5,000원) - 1개
4개 일치 (50,000원) - 0개
5개 일치 (1,500,000원) - 0개
5개 일치, 보너스 볼 일치 (30,000,000원) - 0개
6개 일치 (2,000,000,000원) - 0개
총 수익률은 62.5%입니다. */
