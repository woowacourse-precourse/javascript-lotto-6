const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateLottoNumbers() {
  const lottoNumbers = Array.from({ length: 45 }, (_, i) => i + 1);
  const selectedNumbers = [];

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * lottoNumbers.length);
    const selectedNumber = lottoNumbers.splice(randomIndex, 1)[0];
    selectedNumbers.push(selectedNumber);
  }

  return selectedNumbers.sort((a, b) => a - b);
}

function buyLottoTickets(purchaseAmount) {
  if (purchaseAmount % 1000 !== 0) {
    throw new Error("[ERROR] 구입 금액은 1,000원 단위여야 합니다.");
  }

  const numTickets = purchaseAmount / 1000;
  const tickets = [];

  for (let i = 0; i < numTickets; i++) {
    const lottoNumbers = generateLottoNumbers();
    tickets.push(lottoNumbers);
  }

  return tickets;
}

function checkWinningLotto(purchasedTickets, winningNumbers, bonusNumber) {
  const result = {
    3: { prize: 5000, count: 0 },
    4: { prize: 50000, count: 0 },
    5: { prize: 1500000, count: 0 },
    5.1: { prize: 30000000, count: 0 },
    6: { prize: 2000000000, count: 0 },
  };

  for (const ticket of purchasedTickets) {
    const intersection = ticket.filter((num) => winningNumbers.includes(num));
    const bonusMatch = intersection.includes(bonusNumber);

    if (intersection.length === 6) {
      result[6].count++;
    } else if (intersection.length === 5 && bonusMatch) {
      result[5.1].count++;
    } else if (intersection.length === 5) {
      result[5].count++;
    } else if (intersection.length === 4) {
      result[4].count++;
    } else if (intersection.length === 3) {
      result[3].count++;
    }
  }

  return result;
}

function main() {
  rl.question("구입금액을 입력해 주세요.\n", (purchaseAmount) => {
    try {
      purchaseAmount = parseInt(purchaseAmount);
      const purchasedTickets = buyLottoTickets(purchaseAmount);

      console.log(`${purchasedTickets.length}개를 구매했습니다.`);
      for (const ticket of purchasedTickets) {
        console.log(ticket);
      }

      rl.question("당첨 번호를 입력해 주세요.\n", (winningNumbersInput) => {
        const winningNumbers = winningNumbersInput
          .split(",")
          .map((num) => parseInt(num));

        if (
          winningNumbers.length !== 6 ||
          !winningNumbers.every((num) => num >= 1 && num <= 45)
        ) {
          console.error("[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.");
          rl.close();
          return;
        }

        rl.question("보너스 번호를 입력해 주세요.\n", (bonusNumberInput) => {
          const bonusNumber = parseInt(bonusNumberInput);

          if (bonusNumber < 1 || bonusNumber > 45) {
            console.error(
              "[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다."
            );
            rl.close();
            return;
          }

          const result = checkWinningLotto(
            purchasedTickets,
            winningNumbers,
            bonusNumber
          );

          console.log("당첨 통계");
          console.log("---");

          for (const key in result) {
            if (result[key].count > 0) {
              console.log(
                `${key}개 일치 (${result[key].prize}원) - ${result[key].count}개`
              );
            }
          }

          const totalPurchaseAmount = purchasedTickets.length * 1000;
          const totalPrizeAmount = Object.keys(result).reduce(
            (total, key) => total + result[key].count * result[key].prize,
            0
          );

          const profitRate = (
            ((totalPrizeAmount - totalPurchaseAmount) / totalPurchaseAmount) *
            100
          ).toFixed(1);
          console.log(`총 수익률은 ${profitRate}%입니다.`);
          rl.close();
        });
      });
    } catch (error) {
      console.error(error.message);
      rl.close();
    }
  });
}

main();
