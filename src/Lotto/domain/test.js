class test {
  #name;

  #year;

  #strong;

  constructor(name, year, strong) {
    this.#name = name;
    this.#year = year;
    this.#strong = strong;
  }

  tec(x, y) {
    return x + y;
  }
}

let q = new test();
console.log(q.tec(1, 1));
export default test;
