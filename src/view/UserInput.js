// 파일명 : UserInput.js
// 설명 : 사용자의 입력을 관리하는 클래스

class UserInput {
  #input;
  constructor() {}

  async setInput(input) {
    this.#input = input;
  }

  async getInput() {
    return this.#input;
  }

  async #inputToArr() {
    return this.#input.split(",");
  }
}

export default UserInput;
