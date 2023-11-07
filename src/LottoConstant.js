

const lottoPrize = {
    3 :'3개 일치',
    4 :'4개 일치',
    5 : (hasBonusBall) => hasBonusBall ? '5개 일치, 보너스 볼 일치' : '5개 일치',
    6 : '6개 일치'
}

const prizeAmount = {
    '3개 일치': 5000,
    '4개 일치': 50000,
    '5개 일치': 1500000,
    '5개 일치, 보너스 볼 일치': 30000000,
    '6개 일치': 2000000000,
}

export {lottoPrize, prizeAmount}