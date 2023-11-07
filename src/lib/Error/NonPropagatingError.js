// 외부에서 해당 앱을 임포트해서 사용한다고 가정했을 때, 에러 전파를 막는 용도
export class NonPropagatingError extends Error {
  constructor(message) {
    super(message);
    this.name = "NonPropagatingError";
  }
}
