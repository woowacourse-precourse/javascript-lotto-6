# 3주차 로또

## 2주차 공통 피드백

<details>
<summary>
자세히보기
</summary>

## 1. README.md를 상세히 작성한다

미션 저장소의 README.md는 소스코드에 앞서 해당 프로젝트가 어떠한 프로젝트인지 **마크다운**으로 작성하여 소개하는 문서이다.
해당 프로젝트가 어떠한 프로젝트이며, 어떤 기능을 담고 있는지 기술하기 위해서 마크다운문법을 검색해서 학습해보고 적용해 본다.

## 2. 기능 목록을 재검토한다

기능 목록을 클래스 설계와 구현, 함수(메서드) 설계와 구현과 같이 너무 상세하게 작성하지 않는다.
클래스 이름, 함수(메서드) 시그니처와 반환값은 언제든지 변경될 수 있기 때문이다.
너무 세세한 부분까지 정리하기보다 구현해야 할 기능 목록을 정리하는 데 집중한다.
**정상적인 경우도 중요하지만, 예외적인 상황도 기능 목록에 정리한다.**
특히 예외 상황은 시작 단계에서 모두 찾기 힘들기 때문에 기능을 구현하면서 계속해서 추가해 나간다.

## 3. 기능 목록을 업데이트한다

README.md 파일에 작성하는 기능 목록은 기능 구현을 하면서 변경될 수 있다. 시작할 때 모든 기능 목록을 완벽하게 정리해야 한다는 부담을 가지기보다 기능을 구현하면서 문서를 계속 업데이트한다.
죽은 문서가 아니라 살아있는 문서를 만들기 위해 노력한다.

## 4. 값을 하드 코딩하지 않는다

문자열, 숫자 등의 값을 하드 코딩하지 마라. [상수](https://ko.javascript.info/variables#ref-128)를 만들고 이름을 부여해 이 변수의 역할이 무엇인지 의도를 드러낸다.

## 5. 구현 순서도 코딩 컨벤션이다

클래스는 필드, 생성자, 메서드 순으로 작성한다.

```javascript
class A {
  필드;

  생성자;

  메서드;
}
```

## 6. 한 함수가 한 가지 기능만 담당하게 한다

함수 길이가 길어진다면 한 함수에서 여러 일을 하려고 하는 경우일 가능성이 높다.
아래와 같이 한 함수에서 안내 문구 출력, 사용자 입력, 유효값 검증 등 여러 일을 하고 있다면 이를 적절하게 분리한다.

```javascript
const userInput = () => {
  MissionUtils.Console.readLine("경주할 자동차 이름을 입력하세요(이름은 쉼표(,)를 기준으로 구분): ", (input) => {
    const carNames = input.split(",");
    for (int index = 0; index < carNames.length; index++) {
      if (carNames[index].length < 1 || carNames[index].length > 5) {
        throw new Error("[ERROR] 자동차 이름은 1자 이상 5자 이하만 가능합니다.");
      }
    }
    return carNames;
  });
};
```

## 7. 함수가 한 가지 기능을 하는지 확인하는 기준을 세운다

만약 여러 함수에서 중복되어 사용되는 코드가 있다면 함수 분리를 고민해 본다. 또한, 함수의 길이를 15라인을 넘어가지 않도록 구현하며 함수를 분리하는 의식적인 연습을 할 수 있다.

## 8. JavaScript에서 객체를 만드는 다양한 방법을 이해하고 사용한다.

JavaScript에서는 클래스 말고도 객체를 만드는 방법은 여러 가지가 있다. 객체를 생성하는 방법에 대해서는 MDN 문서의 [Javascript 객체 기본](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Basics)과 [Classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)을 참고한다.

## 9. 테스트를 작성하는 이유에 대해 본인의 경험을 토대로 정리해본다

단지 기능을 점검하기 위한 목적으로 테스트를 작성하는 것은 아니다. 테스트를 작성하는 과정을 통해서 나의 코드에 대해 빠르게 피드백을 받을 수 있을 뿐만 아니라 학습 도구[학습테스트를 통해 JUnit 학습하기.pdf](https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/9b82d8a360c548fcadd14c551dbcbe06)로도 활용할 수 있다. 이런 경험을 통해 테스트에 대해 어떤 유용함을 느꼈는지 알아본다.

## 10. 처음부터 큰 단위의 테스트를 만들지 않는다

테스트의 중요한 목적 중 하나는 내가 작성하는 코드에 대해 빠르게 피드백을 받는 것이다.
시작부터 큰 단위의 테스트를 만들게 된다면 작성한 코드에 대한 피드백을 받기까지 많은 시간이 걸린다.
그래서 문제를 작게 나누고, 그 중 핵심 기능에 가까운 부분부터 작게 테스트를 만들어 나간다.

**큰 단위의 테스트**

- 자동차경주를 시작해서 사용자가 이름, 진행 횟수를 입력하면, 게임을 진행한 후 그 결과를 알려준다.

**작은 단위의 테스트**

- 무작위 값이 4 이상이면 자동차가 전진한다.
- 무작위 값이 3 이하이면 자동차가 전진하지 않는다.
</details>

# 🚀 기능 요구 사항

## 1. 로또 구입 금액을 입력하면 구입 금액에 해당하는 만큼 로또를 발행해야 한다.(로또 1장의 가격은 1,000원이다.)

- **🔍 추가 기능 사항**

1. 구매한 로또를 출력할때, 숫자 배열이 아닌, 문자열로 변환해서 띄어쓰기를 포함하여 출력해주어야한다. ✔️

- [1, 2, 3, 4, 5, 6] => ⭕️

- [ 1, 2, 3, 4, 5, 6 ] => ❌

- **❗️예외상황**

1. 로또의 금액이 최소 1장 가격(1000원)보다 적은 경우, 에러를 throw 한다. ✔️
2. 공백을 포함한 경우 에러를 throw 한다. ✔️
3. 입력 받은 금액이 숫자가 아닌 경우 에러를 throw 한다. ✔️
4. 1000원 단위로 나누어 떨어지지 않는 경우 에러를 throw 한다. ✔️

## 2. 당첨 번호와 보너스 번호를 입력받는다.(번호는 쉼표(,)를 기준으로 구분한다.)

- **🔍 추가 기능 사항**

1. 로또 번호에 공백이 포함 되어 있는 경우 해당 공백을 다 지워준다. ✔️
2. 로또 번호를 출력할때, 오름차순으로 정렬하여 보여준다. ✔️

- **❗️예외상황**

1. 로또 번호들이 1이상, 45 이하의 숫자로 이루어지지 않을 시에 에러를 throw 한다. ✔️
2. 로또 번호들이 숫자가 아닐시에 에러를 throw 한다. ✔️
3. 당첨 번호와 보너스 번호중에 중복 되어 있는 숫자가 있을 시에 에러를 throw한다. ✔️
4. 보너스 번호는 하나의 숫자여야한다. 딱 하나의 숫자가 아닐시에 에러를 throw 한다. ✔️

## 3. 사용자가 구매한 로또 번호와 당첨 번호를 비교하여 당첨 내역 및 수익률을 출력하고 로또 게임을 종료한다.

- **🔍 추가 기능 사항**

1. 수익률은 소수점 둘째 자리에서 반올림한다. (ex. 100.0%, 51.5%, 1,000,000.0%) ✔️

## 4. ❗️그 밖의 예외 처리 ❗️

- 사용자가 잘못된 값을 입력할 경우 throw문을 사용해 예외를 발생시킨다. ✔️
  그런 다음, "[ERROR]"로 시작하는 에러 메시지를 출력하고 해당 부분부터 입력을 다시 받는다.

# 🎯 프로그래밍 요구 사항

- <details>
    <summary> .nvmrc 에 노드 버전 기재</summary> 
    
    `v.18.17.1`
  </details>

- <details>
    <summary>eslint 룰 적용</summary>

  `npm install --save-dev eslint eslint-plugin-jsdoc@latest eslint-plugin-jest@latest eslint-plugin-prettier@latest eslint-config-prettier @babel/eslint-parser` 로 설치하고 .eslintrc.cjs 파일을 만들어서 룰 적용
  </details>

- <details>
    <summary> indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다</summary>
    
    eslint 에 `max-depth': ['error', 2]`  룰 추가
  </details>

- <details>
  <summary>JavaScript 코드 컨벤션을 지키면서 프로그래밍 한다</summary>

  `npm install --save-dev eslint-config-airbnb` 설치 후 .eslintrc.cjs 에서 `extends : ['airbnb']` 추가

- <details>
    <summary> 함수(또는 메서드)의 길이가 15라인을 넘어가지 않도록 구현한다.</summary> 
    
  eslintrc.cjs에 `'max-lines-per-function': ['error', 15],` 룰 추가
  </details>

# ✏️ 과제 진행 요구 사항

- <details>
    <summary>기능을 구현하기 전 docs/README.md에 구현할 기능 목록을 정리해 추가한다.</summary>

  README.md 파일 작성
  </details>

# - 폴더 구조도

```
📦src
 ┣ 📂constants
 ┃ ┣ 📜errorMessages.js 에러 관련 상수 메세지
 ┃ ┣ 📜lottoMessage.js 로또 관련 메세지
 ┃ ┗ 📜rewardMessage.js 당첨 결과 관련 메세지
 ┣ 📂domains
 ┃ ┣ 📜Lotto.js 로또 클래스
 ┃ ┣ 📜Money.js 구입 금액 관련 클래스
 ┃ ┣ 📜Reward.js 보상 관련 클래스
 ┃ ┗ 📜WinningLotto.js 당첨 번호 클래스
 ┣ 📂errors 에러 관련 커스텀 클래스
 ┃ ┣ 📜AppError.js
 ┃ ┣ 📜LottoError.js
 ┃ ┣ 📜MoneyError.js
 ┃ ┗ 📜WinningLottoError.js
 ┣ 📂utils
 ┃ ┣ 📜asyncFnHandlerWithError.js 비동기 함수 핸들러
 ┃ ┣ 📜deepFreeze.js 깊은 동결을 해주는 유틸 함수
 ┃ ┗ 📜newLottoGenerator.js 새로운 로또를 만들어주는 함수
 ┣ 📂views
 ┃ ┣ 📜InputView.js 인력 관련 객체
 ┃ ┗ 📜OutputView.js 출력 관련 객체
 ┣ 📜App.js 진입점 메인 클래스
 ┣ 📜Lotto.js 우테코에서 기본적으로 제공해주는 클래스
 ┗ 📜index.js
```

# - 도메인 클래스들 안에 담긴 함수에 대한 간략한 설명

## - App.js (로또 진행의 메인이 되는 클래스)

1. getLottoAmount

- 금액을 입력받아서 해당 금액에 맞는 구매한 로또 갯수를 this.#lottoAmount에 할당합니다.

2. printLottos

- 로또 갯수에 걸맞은 구매한 총 로또를 출력합니다.

3. getWinningNumbers

- 당첨 번호를 입력받아서 this.#winningLottoNumbers 필드에 인스턴스를 할당합니다.

4. getTotalWinningNumbers

- 보너스 번호를 입력받아서 WinnigLotto 클래스에서 당첨 번호와 보너스 번호에 대한 유효성 검사를 해준 후, this.#totalWinningLotto에 해당 인스턴스를 할당합니다.

5. printRewards

- this.#totalWinningLotto 인스턴스를 Reward 클래스에서 받아서 당첨 통계 결과를 출력합니다.

---

## - Money.js (구입 금액을 담당하는 클래스)

1. getLottoAmount

- 해당 금액을 인스턴스화 해서 유효성 검사를 해준후, 해당 금액에 맞는 로또 구입 갯수를 반환합니다.

2. validate

- 입력 받은 금액의 유효성 검사를 진행합니다. 타입, 금액, 1000원 단위 인지를 검사하고 있습니다.

---

## - Lotto.js (단일 로또 담당 클래스)

1. getRandomNums

- 새로운 로또를 무작위의 번호로 만듭니다.

2. getPurchasedLottos

- 로또 구입 갯수를 인자로 받아서, 그 갯수에 맞는 무작위 로또를 발행합니다.

3. toStringFromNumbers

- 로또를 출력 형식에 맞게 문자열로 변환하여 반환합니다.

4. getNumbers

- 해당 로또 번호를 반환합니다.

5. fromInputString

- 당첨 번호를 입력 받아서 Lotto 인스턴스로 반환합니다.

6. validate

- 로또 번호에 대한 유효성 검사를 진행하는 함수 입니다.
  타입, 범위, 길이, 중복에 관한 유효성 검사를 다루고 있습니다.

## - WinningLotto.js (보너스 번호까지 포함한 당첨 로또 담당 클래스)

1. validateBonusNumber

- 입력받은 보너스 번호에 대한 유효성 검증입니다. 타입, 범위, 중복에 관한 유효성 검증을 진행합니다.

2. getWinningNumbers

- 당첨 번호를 반환합니다.

3. getBonusNumber

- 보너스 번호를 반환합니다.

## - Reward.js (당첨 통계를 담당하는 클래스)

1. calculatePrizeForMatch

- 인자로 matchCount를 받아서 입력된 일치하는 번호의 갯수에 따라 상금을 반환합니다.

2. updateMatchCount

- 통계 객체와, key를 인자로 받아서 통계 결과 객체를 업데이트합니다.

3. updateStatisticsAndPrize

- 일치하는 번호의 갯수(matchCount)와 보너스 번호의 일치 여부를 고려하여, 통계 객체(statistics)와 상금을 업데이트합니다.
- 업데이트 된 통계 객체와 계산된 상금을 객체로 묶어 반환합니다.

4. updateStatistics

- 일치하는 번호의 갯수(matchCount)에 따라 통계 객체(statistics)를 업데이트
- 함수 길이 제한을 위해 updateStatisticsAndPrize와 분리하였습니다.

5. getStatisticsRow

- 통계 key에 맞춰서 통계 결과 문자열을 반환해주는 함수입니다.

6. calculateMatchCount

- 로또 번호 배열(lotto)을 인자로 받아 당첨 번호(#winningNumbers)와 일치하는 갯수를 반환합니다.

7. calculateTotalPrizeAndStatistics

- 여러 로또 번호들(lottos)을 인자로 받아서 각각 계산을 해서, 총 상금과 각각의 통계를 계산합니다.

8. calculateReward

- 구매한 로또 번호들(lottos)에 대한 총 상금과 수익률을 계산하여, 그 결과를 문자열의 배열로 반환합니다.

9. formatOutput

- ORDER_KEYS에 정의된 순서에 따라 각각의 통계 결과를 문자열로 변환하여 배열로 반환합니다.

# - 클래스 다이어그램

![3주차](https://github.com/brgndyy/javascript-lotto-6/assets/109535991/051d4623-fef0-4bd2-bdc7-eecc23ce98cb)
