# 🚀 기능 요구 사항

- 로또 게임 기능을 구현해야 한다. 로또 게임은 아래와 같은 규칙으로 진행된다.

```
- 로또 번호의 숫자 범위는 1~45까지이다.
- 1개의 로또를 발행할 때 중복되지 않는 6개의 숫자를 뽑는다.
- 당첨 번호 추첨 시 중복되지 않는 숫자 6개와 보너스 번호 1개를 뽑는다.
- 당첨은 1등부터 5등까지 있다. 당첨 기준과 금액은 아래와 같다.
    - 1등: 6개 번호 일치 / 2,000,000,000원
    - 2등: 5개 번호 + 보너스 번호 일치 / 30,000,000원
    - 3등: 5개 번호 일치 / 1,500,000원
    - 4등: 4개 번호 일치 / 50,000원
    - 5등: 3개 번호 일치 / 5,000원
```

- 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.
- 로또 1장의 가격은 1,000원이다.
- 당첨 번호와 보너스 번호를 입력받는다.
- 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.
- 사용자가 잘못된 값을 입력할 경우 `throw`문을 사용해 예외를 발생시킨다. 그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다.
  ```
  예시) [ERROR] 숫자가 잘못된 형식입니다.
  ```

# 🛠️ 구조 설계

## Controller

- Controller

## Domain

- LottoNumber
  - `Lotto`의 번호를 담당합니다.
- Lotto
  - `LottoNumber`를 비교합니다.
- WinningLotto
  - 우승 로또와 보너스를 소유하고 `Lotto`와 비교합니다.
- LottoMachine
  - `Lotto`를 판매합니다.
- LottoReward
  - 로또 경품의 조건과 상금을 소유합니다.
- LottoRewards
  - 등수별 `LottoReward`를 관리하고 결과를 계산합니다.
- Calculator
  - `LottoReward`의 수익률을 계산합니다.

## Service

- LottoPurchaseService
  - 로또를 생성하고 구매합니다.
- LottoRewardsService
  - 로또에 대한 결과를 계산합니다.

## View

- InputView
- OutputView

**LottoNumber**

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td><code>static</code>MIN_NUMBER</td>
    <td>로또 번호의 최소 숫자입니다.</td>
  </tr>
  <tr>
    <td><code>static</code>MAX_NUMBER</td>
    <td>로또 번호의 최대 숫자입니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>getNumber()</td>
    <td><code>LottoNumber</code>의 숫자를 반환합니다.</td>
  </tr>
  <tr>
    <td>equal(number)</td>
    <td>입력받은 <code>LottoNumber</code>가 같은 인스턴스인지 비교합니다.</td>
  </tr>
</table>

**Lotto**

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td><code>static</code>NUMBER_QUANTITY</td>
    <td>로또 한 장당 소유할 로또 번호입니다.</td>
  </tr>
  <tr>
    <td>numbers</td>
    <td><code>LottoNumber</code>로 이루어진 배열입니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>getNumbers()</td>
    <td><code>numbers</code>를 숫자 배열로 변환해서 반환합니다.</td>
  </tr>
  <tr>
    <td>prepare(lotto)</td>
    <td>입력받은 <code>lotto</code>와 몇개가 동일한지 계산합니다.</td>
  </tr>
  <tr>
    <td>match(number)</td>
    <td>입력받은 <code>LottoNumber</code>가 <code>numbers</code>에 포함되었는지 비교합니다.</td>
  </tr>
</table>

**WinningLotto**

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>lotto</td>
    <td>우승 로또의 로또입니다.</td>
  </tr>
  <tr>
    <td>bonus</td>
    <td>우승 로또의 보너스 번호입니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>grade(lotto)</td>
    <td>입력받은 <code>lotto</code>의 맞춘 개수와 보너스 소유 여부를 반환합니다.</td>
  </tr>
</table>

**LottoMachine**

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td><code>static</code> LOTTO_PRICE</td>
    <td>로또의 장당 가격입니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>buy(money)</td>
    <td>입력받은 <code>money</code>에 따라 <code>Lotto</code> 배열을 반환합니다.</td>
  </tr>
</table>

**LottoReward**

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>requirement</td>
    <td>로또 경품의 조건입니다.</td>
  </tr>
  <tr>
    <td>prize</td>
    <td>로또 경품의 상금입니다.</td>
  </tr>
  <tr>
    <td>prize</td>
    <td>로또 경품의 현재 갯수입니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>getRequirement()</td>
    <td>로또 경품 조건을 반환합니다.</td>
  </tr>
  <tr>
    <td>getQuantity()</td>
    <td>현재 경품의 갯수를 반환합니다.</td>
  </tr>
  <tr>
    <td>getPrize()</td>
    <td>로또 경품의 상금을 반환합니다.</td>
  </tr>
  <tr>
    <td>getTotalPrize()</td>
    <td>갯수와 비례한 로또 경품의 총 상금을 반환합니다.</td>
  </tr>
  <tr>
    <td>checkRequirement({ match, bonus })</td>
    <td>조건을 비교하여 갯수를 증가시키고 결과를 반환한다.</td>
  </tr>
</table>

**LottoRewards**

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>prizeTable</td>
    <td>등수별 로또 경품 목록입니다.</td>
  </tr>
  <tr>
    <td>winningLotto</td>
    <td>우승의 기준이 될 로또입니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>getLottosResult(lottos)</td>
    <td>입력받은 로또를 기반으로 결과를 반환합니다.</td>
  </tr>
</table>

**Calculator**

<table>
  <tr>
    <th>필드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td><code>static</code>DECIMAL_POINT</td>
    <td>계산할 결과의 자릿수입니다.</td>
  </tr>
</table>

<table>
  <tr>
    <th>메서드</th>
    <th>설명</th>
  </tr>
  <tr>
    <td>earningRate(income, reward)</td>
    <td>입력받은 로또를 기반으로 결과를 반환합니다.</td>
  </tr>
</table>

## Views

**InputView**

- 사용자로부터 입력을 받는다.

**OutputView**

- 콘솔에 메세지를 출력한다.

# 🔍 클래스 다이어그램

![](https://github.com/cobocho/javascript-lotto-6/assets/99083803/ee67d1fd-16e7-417e-8c0a-4080dbd6f7eb)

# 🚦 순서도

![](https://github.com/cobocho/javascript-lotto-6/assets/99083803/453de79d-be08-4cf7-9a43-f4322f1a89b8)

# ⚙️ 기능 구현 목록

## 도메인 구현

- [x] LottoNumber

  - [x] `getNumber()` 호출 시 `LottoNumber`의 숫자를 반환한다.
  - [x] `equal(number)` 호출 시 같은 인스턴스인지 비교한다.

- [x] LottoNumber 예외 처리

  - [x] 인스턴스 생성 시 `number`에 숫자가 아닌 값이 입력되면 에러가 발생한다.
  - [x] 인스턴스 생성 시 `number`에 정수가 아닌 값이 입력되면 에러가 발생한다.
  - [x] 인스턴스 생성 시 `number`에 범위 외 숫자가 입력되면 에러가 발생한다.
  - [x] `equal(number)` 인자로 `LottoNumber`가 아닌 값이 들어올 시 에러가 발생한다.

- [x] Lotto

  - [x] `getNumbers` 호출 시 `numbers`를 숫자 배열로 변환해서 반환한다.
  - [x] `match(number)` 호출 시 `numbers`에 해당 인자를 보유하였는지 확인한다.
  - [x] `prepare(lotto)` 호출 시 `lotto`와 몇 개의 숫자가 같은지 확인한다.

- [x] Lotto 예외 처리

  - [x] 인스턴스 생성 시 `numbers`에 중복된 숫자가 존재할 시 에러가 발생한다.
  - [x] 인스턴스 생성 시 `numbers`가 6개가 아닐 시 에러가 발생한다.
  - [x] `match(number)` 호출 시 인자로 `LottoNumber`가 아닌 값이 들어올 시 에러가 발생한다.
  - [x] `prepare(lotto)` 호출 시 인자로 `Lotto`가 아닌 값이 들어올 시 에러가 발생한다.

- [x] LottoMachine

  - [x] `buy(money)` 호출 시 금액에 비례해 `Lotto`를 반환한다.

- [x] LottoMachine 예외 처리

  - [x] `buy(money)` 호출 시 인자로 숫자가 아닌 값이 들어올 시 에러가 발생한다.
  - [x] `buy(money)` 호출 시 1000원으로 나누어 떨어지지 않는 값이 들어올 시 에러가 발생한다.
  - [x] `buy(money)` 호출 시 1000원 이하의 금액이 들어올 시 에러가 발생한다.

- [x] WinningLotto

  - [x] `grade(lotto)` 호출 시 `lotto`와 우승 로또가 몇 개의 숫자가 같은지와 보너스 소유 여부를 확인한다.

- [x] WinningLotto 예외 처리

  - [x] 인스턴스 생성 시 `lotto`에 `Lotto`가 아닌 값이 입력될 시 에러가 발생한다.
  - [x] 인스턴스 생성 시 `bonus`에 `LottoNumber`가 아닌 값이 입력될 시 에러가 발생한다.
  - [x] 인스턴스 생성 시 `bonus`가 `lotto`에 이미 존재할 시 에러가 발생한다.
  - [x] `grade(lotto)` 호출 시 인자로 `Lotto`가 아닌 값이 들어올 시 에러가 발생한다.

- [x] LottoReward

  - [x] `getRequirement()` 호출 시 경품 조건을 반환한다.
  - [x] `getQuantity()` 호출 시 경품 갯수를 반환한다.
  - [x] `getPrize()` 호출 시 상금을 반환한다.
  - [x] `getTotalPrize()` 호출 시 갯수에 비례한 총 금액을 반환한다.
  - [x] `checkRequirement(requirement)` 호출 시 `requirement`와 조건을 비교하고 갯수를 증가한 후 결과를 반환합니다.

- [x] LottoReward 예외 처리

  - [x] 인스턴스 생성 시 `rewardRequirement`에 `RewardRequirement`가 아닌 값이 입력될 시 에러가 발생한다.
  - [x] 인스턴스 생성 시 `prize`에 숫자가 아닌 값이 입력될 시 에러가 발생한다.
  - [x] `checkRequirement(requirement)` 호출 시 인자로 `RewardRequirement`가 아닌 값이 입력될 시 에러가 발생한다.

- [x] LottoRewards

  - [x] `getLottosResult(lottos)` 호출 시 입력받은 로또의 총 결과를 반환한다.

- [x] LottoRewards 예외 처리

  - [x] `getLottosResult(lottos)` 호출 시 인자로 `Lotto`가 아닌 값이 존재할 시 에러가 발생한다.

- [x] Calculator

  - [x] `earningRate(income, rewards)` 호출 시 입력받은 `rewards`의 수익률을 소숫점 둘째자리에서 반올림하여 반환한다.

- [x] Calculator 예외 처리

  - [x] `earningRate(income, rewards)` 호출 시 `income`에 숫자가 아닌 값이 존재할 시 에러가 발생한다.
  - [x] `earningRate(income, rewards)` 호출 시 `rewards`에 `LottoReward`가 아닌 값이 존재할 시 에러가 발생한다.

## Service 구현

- [x] LottoPurchaseService

  - [x] `buyLottos(money)` 호출 시 금액에 비례해 `Lotto`를 반환한다.

- [x] LottoRewardsService

  - [x] `getRewards()` 호출 시 `LottoReward`로 이루어진 배열을 반환한다.
  - [x] `getEarningRate(rewards)` 수익률을 반환한다.

## Controller 연결

- [x] `Controller`에 `Service`와 `View`를 연결한다.
- [x] `Controller`에 에러 핸들링 추가

# ✅ 최종 체크포인트

- [x] `ApplicationTest`를 통과하는가?
- [x] 모든 단위 테스트가 통과하는가?
- [x] 뎁스가 과도하게 깊은 메서드는 존재하지 않는가?
- [x] `else`가 존재하지 않는가?
- [x] 컨벤션에 맞게 코드가 작성되었는가?
- [x] Node.js 18.17.1 버전에서 실행 가능한가?
- [x] `package.json`에 변경사항이 존재하지 않는가?
- [x] `process.exit()`를 호출하는 코드가 존재하지 않는가?
- [x] 컨트롤러에서 에러 핸들링이 이루어지는가?

# 2️⃣ 2주차 피드백 체크포인트

- [x] inputView가 메세지에 대한 의존성을 가지도록 한다.s
