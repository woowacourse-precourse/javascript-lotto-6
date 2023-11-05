class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    // 중복 검사
    const isDuplicated = new Set(numbers).size !== numbers.length;

    if (isDuplicated) {
      throw new Error('[ERROR] 중복 값이 존재합니다.');
    }

    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  async play() {
    try {
      const amount = await Inputs.getAmount(`구입금액을 입력해 주세요.`);
      const lotto = new PlayLotto(amount);
      const myLottos = await lotto.makeLottos();
      const winningNumber =
        await Inputs.getWinningNumber(`당첨 번호를 입력해 주세요.`);
      const bonusNumber = await Inputs.getBonusNumber(
        `보너스 번호를 입력해 주세요.`,
        winningNumber
      );

      const lottoResult = new LottoResult(
        amount,
        winningNumber,
        bonusNumber,
        myLottos
      );
      const isFitLotto = await lottoResult.isFit();

      await lottoResult.printResult();
    } catch (e) {
      Console.print(e);
    }
  }
  // TODO: 추가 기능 구현
}

export default Lotto;
