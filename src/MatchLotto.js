export function matchLotto(randomLottoArr, lotto, bonus) {
    const matchList = []
    for (let i = 0; i < randomLottoArr.length; i++) {
        matchList.push(matchLottoNumber(randomLottoArr[i], lotto, bonus))
    }
    return matchList;
}


function matchLottoNumber(randomLottoArr, lotto, bonus) {
    const match = { lottoMatch: 0, bonusMatch: 0 }
    for (let i = 0; i < 6; i++) {
        if (randomLottoArr.includes(parseInt(lotto[i]))) {
            match["lottoMatch"]++;
        }
    }
    if (match["lottoMatch"] === 5) {
        if (randomLottoArr.includes(parseInt(bonus))) {
            match["bonusMatch"] = 1;
        }
    }
    return match;
}