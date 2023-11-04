import prompt from './prompt.js';

class notice {
  static totalLotto(lottos, quantity) {
    prompt.out(`${quantity}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      prompt.out(`[${lotto.getNumbers().join(', ')}]`);
    });
  }
}

export default notice;
