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