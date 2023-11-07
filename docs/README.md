# 미션 - 자동차 경주

## 전체적인 기능 목록 (전체적인 흐름 중심)

1. **GameStart Feature List**

   1. 로또 구입 금액을 입력 받는다. 구입 금액은 1,000원 단위로 입력 받는다.
      (**단 1. 숫자가 아닌 경우(문자, 부동수수점 등...)인 경우 예외 처리한다. 2 .1000원으로 나눠떨이지지 않는 경우 예외 처리한다.**)

   2. 해당 금액을 1000으로 나눈 만큼 다음 과정을 반복한다.

      2-1. 렌덤한 숫자 6개를 뽑는다.
      2-2. 6개의 숫자를 오름차순으로 만든다.
      2-3. 6개의 숫자를 출력한다.
      2-4. 6개의 숫자를 배열에 저장한다. (Lottos 클래스(객체)에 해당 정보를 저장)

---

2. **GameProgress Feature List**

   1. 당첨 번호를 입력 받는다. 번호는 쉼표(,)를 기준으로 구분한다. (Lotto 클래스(객체)에 해당 정보를 저장)
      (**단 만약 숫자가 서로 다른 숫자(1~45) 6개를 만족하지 않는 경우 예외 처리한다**)

   2. 보너스 번호를 입력 받는다. (Bounce 클래스(객체)에 해당 정보를 저장)
      (**단 만약 숫자가 (1~45) 사이의 숫자를 만족하지 않는 경우 예외 처리한다.**)

   3. GameStart Feature List에서 2-4과정에서 만든 6개의 배열을 하나씩 돌면서 다음과정을 수행한다.

      3-1. 주어진 당첨 번호와 렌덤한 로또 번호 사이에 일치하는 숫자의 갯수를 찻는다. (lottoCount , bounceCount로 분리)
      3-2. 해당 갯수를 index로 취한다.
      3-3. index에 해당하는 배열의 값을 1씩 올린다.

   4. 배열을 돌면서 각각의 index에 들어있는 값을 출력한다.

---

3. **GameOver Feature List**

   1. 해당 순위를 index로 취하고 index에 해당하는 금액을 배열에 담는다.

   2. GameProgress Feature list에 3 과정에서 얻은 배열을 돌면서 다음과정을 수행한다.

      2-1. 배열에 index에 해당하는 금액을 3 과정에서 얻은 배열에 곱해 이익량을 구한다.

   3. 이약량과 투자 금액 사이에 비율을 구한다음 해당 비율을 소수점 둘째자리 까지 반올림 시킨다.

   4. 반올림 시킨 값을 출력한다.

## 세부적인 기능 목록 (각 함수의 역할 밎 기능 중심)

### 1. App class

- **game Start Function**
  : 로또 금액을 입력받고 금액만큼 무작위 로또 번호를 생성 및 출력하는 함수

  - **getLottoPrice** : 로또 금액을 입력 받고 그 값을 Lottos 클래스(객체)에 넘겨주는 함수

  - **checkLottos** : 로또 금액을 가지고 무작위 로또를 확인하는 함수

  - **printLottos** : 무작위 로또를 출력하는 함수

---

- **game Progress Function**
  : 로또 번호와 보너스 번호를 입력받고 무작위 로또 번호들과 일치하는 갯수를 판별 및 출력하는 함수

  - **getLottoNumber , getLottoBounce** : 로또 번호와 보너스 번호를 입력받는 함수

  - **checkLottoRank** : 로또 번호 + 보너스 번호와 무작위 로또 번호 사이에 일치하는 로또의 갯수를 확인하는 함수

  - **printLottoRank** : 일치하는 로또 갯수를 통해서 로또 순위를 출력하는 함수

---

- **game End Function**
  : 로또 금액과 상금을 통해 수익률을 개산 및 출력하는 함수

  - **checkLottoBenfit** : 로또 금액과 상금을 통해 수익률을 계산하는 함수

  - **printLottoBenfit** : 수익률을 출력하는 함수

### 2. Lottos class

- **lottoPrice , lottos** (field)

- **validateLottoPrice , getLottos , setLottos , getLottoPrice** (method)

  - **validateLottoPrice** : 로또 금액의 값이 정상적인 값인지 확인하는 함수

  - **getLottos, getLottoPrice** : 로또 금액과 무작위 로또를 반환하는 함수

  - **setLottos** : 무작위 로또를 생성하는 함수

### 3. Lotto class

- **lotto** (field)

- **validate , getLotto** (method)

  - **validate** : 로또의 번호들이 정상적인 값인지 확인하는 함수

  - **getLotto** : 로또의 번호들을 반환하는 함수

### 4. Bounce class

- **bounce** (field)

- **validateBounce , getBounce** (method)

  - **validateBounce** : 로또의 보너스 번호가 정상적인 값이 들어왔는지 확인하는 함수

  - **getBounce** : 로또의 보너스 번호를 반환하는 함수
