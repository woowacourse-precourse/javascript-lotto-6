<div align="center">
  
# [기록] 로또 :slot_machine:	
<br>

본 문서는 우테코 6기 [**3주차 미션 - 자동차 경주**](https://github.com/woowacourse-precourse/javascript-lotto-6)의 구현 과정을 상세히 담고 있습니다.<br>
구현 기록은 `N차 구현`-`N차 구현 보충`의 형식으로 작성했습니다. :black_nib:

<br>

<div>
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
</div>

<br>

본 구현은 외부 라이브러리 없이 순수 Vanilla JS를 통해서만 구현했습니다.<br>
또한 `Node.js` 버전 `18.17.1` 이상의 실행환경이 필요합니다 😏

</div>

<br>

## :three:차 구현

```
🎯 각 기능에 대한 테스트 코드 작성에 집중한다.
```

<br>

기능 단위로 테스트를 진행한다. :two:차 구현에서 작성한 기능 목록

<br>

<div align="center">
   ⓐ 로또 구매<br>
   ⓑ 로또 발급<br>
   ⓒ 당첨 로또 생성<br>
   ⓓ 결과 계산<br>
</div>

<br>

을 단위로 총 네개의 테스트를 `tests > AdditionalTest.js`에서 진행한다.


<br>

## :two::arrows_counterclockwise:차 구현

```
🎯 2차 구현에 언급없이 추가적으로 구현된 부분에 대해 명시한다.
```

<br>

파일 및 코드 네이밍에 있어서도 자체적인 규칙을 두고 생성했다. :straight_ruler:

<br>

1. `utils` 디렉토리 내의 함수 및 파일 명은는 모두 `generate`를 접두어로 사용한다.

<br>

2. 각 model은 생성자에서 `validate` 함수를 통해 값을 검증한다. 이때 `validate` 함수 내에서 사용하는 모든 함수들은 `validator` 디렉토리 내의 `${model명}Validate` 파일내에 존재한다.

<br>

3. 상수는 모두 앞에 관련된 개념을 제시한다.

<br>

네이밍 컨벤션도 중요하지만, 무엇보다 중요한 것은 이름을 봤을 때 **어떤 역할을 하는지 들어나도록** 구체적으로 네이밍하는 것이다. :cat:

<br>

## :two:차 구현

```
🎯 디렉토리에 정확한 역할을 부여하고 데이터의 처리에 있어 패턴화한다. "일관적인 코딩"에 집중한다.
```

<br>

모든 데이터는 아래와 같은 과정을 거치도록 한다.

<div align="center">

**입력** ▷ **가공** ▷ **검증** ▷ **처리** ▷ **출력**

</div>

ⓐ 데이터를 입력받아 ⓑ 정수변환과 같은 가공을 거친 뒤, ⓒ 올바른 값인지 검증을하고 ⓓ 필요한 처리를 수행하여 ⓔ 출력한다.

이러한 패턴을 하나의 기능:sparkles:으로 생각하여 **일관성**있게 구현한다. 또한 각 과정에 대한 코드의 디렉토리를 분리한다. ⓐ는 `view`, ⓑ는 `util`, ⓒ는 `validate`, ⓓ는 `model`, ⓔ는 `view` 디렉토리에서 처리한다.

<br>

### :pencil2: 기능 목록

1. **로또 구매**

   ✦ 금액의 입력 ▷ 정수 변환 ▷ 1000으로 나누어 떨어지는 정수 형태인지 확인 ▷ 로또 구매 ▷ 구매한 로또의 개수 출력

<br>   

2. **로또 발급**

   ✦ 로또 개수 입력 ▷ 로또 번호 생성 ▷ 올바른 로또인지 확인 (길이, 중복) ▷ 로또 집합 생성 ▷ 로또 집합 출력

<br>

3. **당첨 로또 생성**

   ✦ 로또 번호 입력 ▷ 정수 배열로 변환 ▷ 올바른 로또인지 확인<br>
   ✦ 보너스 번호 입력 ▷ 정수로 변환 ▷ 올바른 보너스번호인지 확인 (로또 번호와의 중복)

<br>

4. **결과 계산**

   ✦ 당첨 번호와 로또 번호 비교 ▷ 점수판 생성 ▷ 점수판 출력

<br>

### :dizzy_face: 고민해야할 점

1. **Validation의 위치?**

   Validation은 효율상 가공의 과정에서 함께 진행하는 것이 좋다. 그러나 직관적인 코드를 위해서는 `model`의 생성자에서 진행하는 것이 가장 좋다.

<br>

2. **Set vs Array?**

   로또의 길이가 길어질 수록 Set을 이용하는 것이 좋아진다. 그러나 여전히 Array를 Set으로 변환하는 과정이 필요하다.

<br>

## :one:차 구현

```
🎯 1차 구현은 "MVC 패턴을 적용한 기능 구현"과 "테스트의 성공"에 집중한다.
```

<br>

* **Model**

   * 하나의 로또를 의미하는 객체 :slot_machine:<br>
      ✦ 로또간의 비교하는 기능을 포함한다.

   * 여러 로또의 집합을 정의하는 객체<br>
      ✦ 당첨번호와 로또 집합을 비교하여 결과를 산출한다.

<br>

* **Utils**

   * 유효한 로또를 생성하는 기능<br>
   ✦ 1부터 45까지의 숫자 중 6개의 번호와 1개의 보너스 번호를 뽑는다.<br>
   ✦ 번호들은 중복되어서는 안된다.

<br>

* **View**

   * 입력<br>
   ✦ 금액을 입력받는다. :money_mouth_face:<br>
   ✦ 당첨번호를 입력받는다.<br>
   ✦ 입력이 유효한지 확인한다. :white_check_mark:
   
   <br>

   * 출력<br>
   ✦ 게임 진행 문구를 출력한다.<br>
   ✦ 당첨 결과 및 수익률을 출력한다.

<br>

* **Controller**

   ✦ 게임의 입력부터 출력에 이어지는 흐름을 관리한다.