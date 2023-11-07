class WinNumberConverter {
  #numbers;

  constructor(string) {
    this.#changeStringToNumArr(string);
  }

  #changeStringToNumArr(string) {
    this.#numbers = string.split(',');
  }

  get numbers() {
    return this.#numbers;
  }
}