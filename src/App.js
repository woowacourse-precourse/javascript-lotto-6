class App {
  async play() {

    const readline = require('readline');

    // 함수: 1에서 45 사이의 중복되지 않는 무작위 로또 번호 생성
    function generateLottoNumbers() {
      const numbers = [];
      while (numbers.length < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber);
        }
      }
      return numbers;
    }

    // 함수: 사용자로부터 번호 입력 받기
    async function getUserInput(question) {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      return new Promise(resolve => {
        rl.question(question, answer => {
          rl.close();
          resolve(answer);
        });
      });
    }

    // 함수: 입력된 번호를 배열로 변환
    function parseInput(input) {
      const numbers = input.split(',').map(num => parseInt(num.trim(), 10));
      if (numbers.length !== 7) {
        throw new Error('Invalid input. Please enter 7 comma-separated numbers.');
      }
      return numbers;
    }

    // 함수: 로또 당첨 확인 및 수익 계산
    function checkLottoResult(userNumbers, winningNumbers, bonusNumber) {
      const intersection = userNumbers.filter(num => winningNumbers.includes(num));
      const hasBonusNumber = userNumbers.includes(bonusNumber);

      switch (intersection.length) {
        case 6:
          return { rank: 1, prize: 2000000000 };
        case 5:
          return hasBonusNumber ? { rank: 2, prize: 30000000 } : { rank: 3, prize: 1500000 };
        case 4:
          return { rank: 4, prize: 50000 };
        case 3:
          return { rank: 5, prize: 5000 };
        default:
          return { rank: 0, prize: 0 };
      }
    }

    // 함수: 메인 로또 게임
    async function playLottoGame() {
      try {
        const purchaseAmount = parseInt(await getUserInput('Enter the amount you want to spend on Lotto: '), 10);
        const numberOfTickets = Math.floor(purchaseAmount / 1000);

        console.log(`You will receive ${numberOfTickets} Lotto tickets.`);

        const userTickets = Array.from({ length: numberOfTickets }, () => generateLottoNumbers());

        const winningNumbersInput = await getUserInput('Enter the winning numbers and bonus number (comma-separated): ');
        const [winningNumbers, bonusNumber] = parseInput(winningNumbersInput);

        console.log('\nYour Lotto Numbers:');
        userTickets.forEach((ticket, index) => {
          console.log(`Ticket ${index + 1}: ${ticket.join(', ')}`);
        });

        console.log('\nWinning Numbers:', winningNumbers.join(', '));
        console.log('Bonus Number:', bonusNumber);

        let totalPrize = 0;

        userTickets.forEach(ticket => {
          const { rank, prize } = checkLottoResult(ticket, winningNumbers, bonusNumber);
          if (rank > 0) {
            totalPrize += prize;
            console.log(`Congratulations! You won ${prize.toLocaleString()} won (Rank ${rank})`);
          }
        });

        const profitLoss = totalPrize - purchaseAmount;
        console.log('\nTotal Prize: ', totalPrize.toLocaleString(), 'won');
        console.log('Profit/Loss: ', profitLoss.toLocaleString(), 'won');

      } catch (error) {
        console.log('[ERROR]', error.message);
        await playLottoGame(); // 에러가 발생하면 게임을 다시 시작
      }
    }

    // 메인 게임 실행
    playLottoGame();


  }
}

export default App;
