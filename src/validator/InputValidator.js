// 자주 사용되는 검사 로직을 여기에 둔다
// 각 인풋의 유효성 검사는 이 클래스의 메서드 조합으로 한다.
class InputValidator {
  static isNan(input) {
    return Number.isNaN(input);
  }
}

export default InputValidator;
