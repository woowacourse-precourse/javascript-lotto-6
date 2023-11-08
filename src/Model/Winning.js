class WinningLotto {
    #lotto;
    #bonusBall;

    constructor(lotto, bonusBall) {
        this.#lotto = lotto;
        this.#bonusBall = bonusBall;
    }
    // 매개변수 lotto를 통한 번호 두개를 비교
    compareWith(lotto) {
        const count = this.#lotto.countSameNumber(lotto);
        const hasBonus = this.#bonusBall.includedIn(lotto);

        return [count, hasBonus];
    }
}

export default WinningLotto;