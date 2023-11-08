import { Computer } from "./Computer.js";

export class LottoNum {
    computer = new Computer();

    constructor(lottoCount) {
        this.numbers = Array.from({ length: lottoCount }, () => this.computer.getRandomNum());
    }
}