const LOTTOPRICE = 1000;

function getTotalPrize(lottoArray) {
    let totalPrize = 0;
    for(let i = 0; i < lottoArray.length; i++) {
        totalPrize += lottoArray[i].Prize;
    }
    return totalPrize;
}

function lottoPurchasesNumber(userMoney) {
    const lottoNumber = userMoney/LOTTOPRICE;
    return lottoNumber;
}

export { getTotalPrize, lottoPurchasesNumber };