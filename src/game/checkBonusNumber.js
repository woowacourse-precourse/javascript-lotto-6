export const includedLottoNumbers = (inputNumber, lottoArray) => {
    let passLottoCount = 0;
    const userNumber = inputNumber.split(',').map((num) => Number(num));
    lottoArray.forEach((number) => {
        if (userNumber.includes(number)) passLottoCount += 1;
    })

    return passLottoCount;
}

export const includedBonusNumber = (lottoArray, bonusNumber) => {
    let haveBonusNumber = false;
    lottoArray.forEach((number) => {
        if (number === bonusNumber) haveBonusNumber = true;
    })

    return haveBonusNumber;
}