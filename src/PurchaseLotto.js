const { Console, Random } = require("@woowacourse/mission-utils");
const Lotto = require("./Lotto");

async function PurchaseLotto() {
    const purchaseAmount = await Console.readLineAsync("");

    const purchaseAmountNumber = parseInt(purchaseAmount);

    const lottoCount = purchaseAmountNumber / 1000;

    const lottos = [];

    for (let i = 0; i < lottoCount; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      );
      lottos.push(new Lotto(numbers));
    }

    return lottos;
}

module.exports = PurchaseLotto;
