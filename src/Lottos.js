class Lottos {
  #lottos;

  constructor(input) {
    this.validation(input);
  }

  validation(input) {
    const issueNum = parseInt(input);

    if (isNaN(issueNum)) {
      throw new Error('[ERROR] 숫자로 입력해주세요');
    }
    if (issueNum % 1000 !== 0) {
      throw new Error('[ERROR] 단위는 1000입니다.');
    }
  }
}

export default Lottos;
