# 게임 흐름
1. 로또 시작
2. 로또를 구입하기 위해 지불할 금액 입력받기
  - 금액에 대한 유효성 검사
  - 금액을 로또 개수로 변환 후, 출력
4. 로또 번호 생성 로직
  - 로또 개수만큼
    1) 로또 번호의 숫자를 1~45까지 무작위로 6개를 생성
    2) 로또 번호의 배열을 오름차순으로 정렬 후, 출력
5. 당첨 번호 입력받기
  - 당첨 번호에 대한 유효성 검사
6. 보너스 당첨 번호 입력받기
  - 보너스 번호에 대한 유효성 검사
7. 로또 결과
  - 주어진 로또 번호가 당첨 번호와 일치하는지 확인 후, 출력
  - 수익률 계산 후, 출력


<br/>
<br/>

# 구현할 기능 목록

# Controller
## LottoContoller.js 
> 사용자 입력을 받아 모델을 업데이트하고, 뷰를 통해 결과를 표시하는 함수들을 관리

<br/>

handlePurchase
- [x] 로또 구매를 처리

handleLottoWinningNumbers
- [x] 당첨 번호 입력을 처리
- [x] 보너스 당첨 번호 입력을 처리

calculateProfitRates
- [ ] 수익률을 계산

<br/>

# Model
## Lotto.js 
> 로또 번호를 생성하고 관리

<br/>

generateLottoNumbers
- [x] 로또 번호의 숫자를 1~45까지 무작위로 6개를 생성

sortLottoNumbers
- [x] 로또 번호를 오름차순으로 정렬

<br/>

## LottoMachine.js 
> 로또 발행과 관련된 로직 관리

<br/>

calculateLottoCount
- [x] 지불한 금액으로 구매할 수 있는 로또의 수를 계산

printLottoNumbers
- [x] 구매한 로또의 번호를 출력

<br/>

## WinningLotto.js
> 당첨 번호와 보너스 번호를 관리, 당첨 여부를 확인

<br/>

setWinningNumbers
- [ ] 당첨 번호를 설정

setBonumsNumbers
- [ ] 보너스 당첨 번호를 설정

validateNumbers
- [ ] 당첨 번호의 유효성을 검사
- 예외 처리
  - [ ] 숫자의 개수가 6개인지 확인
  - [ ] 각 숫자가 로또 번호로서 1~45 범위 내에 있는지 확인
  - [ ] 숫자들에 중복이 없는지 확인

validateBonusNumbers
- [ ] 보너스 당첨 번호의 유효성을 검사
- 예외 처리
  - [ ] 숫자가 로또 번호로서 1~45 범위 내에 있는지 확인
  - [ ] 당첨 번호들과 중복되지 않아야 한다.

checkWinning
- [ ] 주어진 로또 번호가 당첨 번호와 일치하는지 확인

<br/>

# View
## InputView.js 
> **사용자로부터 입력을 받는 부분을 담당** <br>
  금액 입력, 당첨 번호 입력

<br/>

promptPurchaseAmount
- [x] 사용자에게 구입 금액을 입력받기

promptWinnningNumbers
- [ ] 사용자에게 당첨 번호를 입력받기

promptBonusNumber
- [ ] 사용자에게 보너스 번호를 입력받기

<br/>

## OutputView.js 
> **결과나 메세지를 사용자에게 표시하는 부분을 담당** <br>
  로또 번호, 당첨 결과, 수익률 등을 사용자에게 표시하는 함수들을 관리

<br/>

printLottoCounts
- [x] 구매한 로또 개수를 화면에 출력하기
- `${lottoCount}개를 구매했습니다.`

printLottos
- [x] 구매한 로또 번호를 화면에 출력하기
- `[8, 21, 23, 41, 42, 43]` <br/>
  `[3, 5, 11, 16, 32, 38]` ...

printLottoResult
- [ ] 당첨 결과를 화면에 출력하기
- `당첨 통계` <br/>
  `---` <br/>
  `3개 일치 (5,000원) - 1개` <br/>
  `4개 일치 (50,000원) - 0개` <br/>
  `5개 일치 (1,500,000원) - 0개` <br/>
  `5개 일치, 보너스 볼 일치 (30,000,000원) - 0개` <br/>
  `6개 일치 (2,000,000,000원) - 0개` <br/>

printProfitRates
- [ ] 수익률을 화면에 출력하기
- `총 수익률은 ${winningRates}%입니다.`

<br/>

# Utils
## Constants.js 
> Enum 관리(게임 메세지, 에러 메세지, 각 등수별 상금 정보)

<br/>

## InputHandler.js 
> 사용자로부터의 입력을 받고 검증하는 함수들을 관리

getPurchaseAmount
- [ ] 로또를 구입하기 위해 지불할 금액 입력받기
- `구입금액을 입력해 주세요.`

getLottoWinningNumber
- [ ] 당첨 번호 입력 (배열)
- `당첨 번호를 입력해 주세요.`

getLottoBonusWinningNumber
- [ ] 보너스 번호 입력 (숫자)
- `보너스 번호를 입력해 주세요.`

<br/>

## InputValidator.js 
> 입력값이 유효한지 검사하는 로직을 관리

<br/>

## ErrorHandler.js 
> 예외 처리와 관련된 함수나 로직을 관리