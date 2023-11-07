class WinNumberConverter {
  #numbers;

  constructor(string) {
    this.#changeStringToNumArr(string);
  }

  #changeStringToNumArr(string) {
    this.#numbers = string.split(',').map((e) => Number(e));
  }

  get numbers() {
    return this.#numbers;
  }
}

export default WinNumberConverter;
