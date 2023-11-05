class GetLotto {
    calculateLottoCount(budget) {
        //로또 개수 계산
        const lottoCount = Math.floor(budget / 1000);
        return lottoCount;
    }
}

export default GetLotto;