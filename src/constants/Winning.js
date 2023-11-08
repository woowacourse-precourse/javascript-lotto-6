export const WINNING_PRICE = Object.freeze({
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
    FIRST : `${MATCHING_NUMBER.FIRST}개 일치 (${WINNING_PRICE.FIRST}원) - `,
    SECOND : `${MATCHING_NUMBER.SECOND}개 일치, 보너스 볼 일치 (${WINNING_PRICE.SECOND}원) - `,
    THIRD : `${MATCHING_NUMBER.THIRD}개 일치 (${WINNING_PRICE.THIRD}원) - `,
    FOURTH : `${MATCHING_NUMBER.FOURTH}개 일치 (${WINNING_PRICE.FOURTH}원) - `,
    FIFTH : `${MATCHING_NUMBER.FIFTH}개 일치 (${WINNING_PRICE.FIFTH}원) - `,
}) 
