# 미션 - 로또

## 📑 프로젝트 설명
- 우아한테크코스 프리코스의 3주차 과제로 로또 게임을 완성한다.
- 로또 게임은 [🚀 기능 요구 사항](../README.md#🚀-기능-요구-사항)을 만족해야 한다.
</br></br>

## 📱 도메인
### 로또 구매 - Purchase
- #balance 만큼의 랜덤한 번호로 이루어진 로또를 구매합니다.
- 구매하는 과정에서 lotto에 대한 유효성 검사를 진행합니다.
```javascript
export default class Purchase {
  #balance;
  #amount;
  #lottos;

  amount();
  lottos();
  print();
}
```

### 로또 추첨 - Raffle
- #numbers로 이루어진 당첨번호를 생성하고, 보너스 번호를 추가합니다.
- 당첨번호와 보너스번호를 생성하는 과정에서 유효성 검사를 진행합니다.
```javascript
export default class Raffle {
  #numbers;
  #bonus;

  addBonus(bonus)
  numbers() 
  bonus()
}
```

### 로또 결과 - Result
- 로또들과 추첨결과를 가져와 결과를 계산합니다.
- 각 로또들의 등수를 계산하고, 이를 이용해 수익 및 수익률 계산을 진행합니다.
```javascript
export default class Result {
  #lottos;
  #raffle;
  #prizes;
  #returns;
  #returnRate;

  setResult(lottos, raffle)
  calculateRanks()
  calculateReturns()
  returnRate()
  prizes()
}
```

## 🛠️ 기능 요구사항
- [x] 로또 구입
  - [x] 로또 구입 금액 입력
    - [x] 구입 금액 입력 안내메세지 출력
    - [x] 사용자 입력
    - [x] 유효성 검사
      - [x] 유효하지 않을 경우 에러메세지 출력 후 재 입력
  - [x] 구입한 로또 갯수 만큼 랜덤한 6개의 로또 번호 선정
    - [x] 유효성 검사
      - [x] 유효하지 않은 경우 에러 반환
    - [x] 선정된 로또 번호들 출력
</br>

- [x] 당첨 번호 및 보너스 번호 설정
  - [x] 당첨 번호 입력
    - [x] 당첨 번호 입력 안내메세지 출력
    - [x] 사용자 입력
    - [x] 유효성 검사
      - [x] 유효하지 않을 경우 에러메세지 출력 후 재 입력
  - [x] 보너스 번호 입력
    - [x] 보너스 번호 입력 안내메세지 출력
    - [x] 사용자 입력
    - [x] 유효성 검사
      - [x] 유효하지 않을 경우 에러메세지 출력 후 재 입력
</br>

- [x] 결과 계산
  - [x] 각 로또의 등수 산정
    - [x] 각 로또와 당첨 번호의 일치 번호 갯수 계산
    - [x] 각 로또의 보너스 번호 포함 여부 계산
    - [x] 당첨 번호 및 보너스 번호 포함 여부를 통해 등수 산정
  - [x] 당첨 통계 출력
    - [x] 각 등수에 해당하는 로또 갯수 출력
    - [x] 수익률 계산
    - [x] 수익률 출력
</br></br>

## ❗️ 예외 사항
- [x] 로또 구입 금액이 1000의 배수인 자연수가 아닌 경우
```javascript
throw new BalanceTypeError(number);
```
</br>

- [x] 로또 및 당첨 번호가 자연수가 아닌 경우
```javascript
throw new LottoTypeError(numbers);
```
- [x] 로또 및 당첨 번호가 1~45의 범위를 벗어난 경우
```javascript
throw new LottoRangeError(numbers);
```
- [x] 로또 및 당첨 번호가 6개보다 작거나 클 경우
```javascript
throw new LottoLengthError(numbers);
```
- [x] 로또 및 당첨 번호들 중 중복이 있는 경우
```javascript
throw new LottoDuplicatedError(numbers);
```
</br>

- [x] 보너스 번호가 자연수가 아닌 경우
```javascript
throw new BonusTypeError(numbers);
```
- [x] 보너스 번호가 1~45의 범위를 벗어난 경우
```javascript
throw new BonusRangeError(numbers);
```
- [x] 보너스 번호가 당첨 번호에 포함되는 경우
```javascript
throw new BonusIncludedError(numbers);
```
</br></br>
