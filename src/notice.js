import prompt from './prompt.js';

class notice {
  static quantity(lottoCount) {
    prompt.out(`\n${lottoCount}개를 구매했습니다.`);
  }
}

export default notice;
