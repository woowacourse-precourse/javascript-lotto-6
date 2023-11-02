const AutoLottoValidator = {
  isCorrectLotto(lottos) {
    return lottos.every((lotto) => Array.isArray(lotto) && lotto.length === 6);
  },

  isNotDuplicated(lottos) {
    return lottos.every((lotto) => lotto.length === new Set(lotto).size);
  },

  validateAutoLotto(lottos) {
    if (!this.isCorrectLotto(lottos) || !this.isNotDuplicated(lottos))
      throw new Error(
        '[ERROR] 로또가 제대로 발행되지 않았습니다. 다시 발행합니다.',
      );
    return lottos;
  },
};

export default AutoLottoValidator;
