//setTimeout : n밀리초 뒤에 함수실행
//setInterval : n밀리초마다 함수실행

//랜덤 숫자 생성
const getRandomNum = () => Math.floor(Math.random() * 45) + 1;

//화면에 숫자가 나올 부분
const $lottoNumberList = document.querySelectorAll(".lotto-number");

//숫자의 색상
let color = null;

//볼의 색상 지정
//10 단위로 구분하여 색 넣기
const printBall = (number) => {
  switch (Math.floor(number / 10)) {
    case 1:
      return "blue";
      break;
    case 2:
      return "coral";
      break;
    case 3:
      return "gray";
      break;
    case 4:
      return "green";
      break;
    default:
      return "yellow";
      break;
  }
};

// 랜덤숫자를 받아서 숫자와 색상을 계속 변경함
const continuityChange = () => {
  for (let i = 0; i < 6; i++) {
    let num = getRandomNum();

    color = printBall(num);
    $lottoNumberList[i].classList = "lotto-number";
    $lottoNumberList[i].classList.add(color);
  }
};

//최종 추천번호
const recommend = () => {
  // 1~45사이의 겹치지 않는 랜덤 숫자 6개
  const numberList = [];
  let randomNum;

  for (let i = 0; i < 6; i++) {
    // random 0 ~ 0.9999999... 사이의 숫자가 나오므로 마지막에 +1
    randomNum = getRandomNum();

    //랜덤생성된 숫자가 배열에 있으면 다시 생성
    //includes() 배열에 특정 요소가 있다면 true
    while (numberList.includes(randomNum)) {
      randomNum = getRandomNum();
    }

    numberList.push(randomNum);
  }

  //const $lottoNumberList = document.querySelectorAll(".lotto-number");

  //오름차순 정렬
  numberList.sort((a, b) => a - b);

  for (let i = 0; i < $lottoNumberList.length; i++) {
    $lottoNumberList[i].innerText = numberList[i];

    color = printBall(numberList[i]);
    $lottoNumberList[i].classList = "lotto-number";
    $lottoNumberList[i].classList.add(color);
  }

  /* //추천 번호 리스트
  const listNode = document.createElement("li");
  listNode.innerText = numberList;
  document.querySelector("#listContainer").append(listNode); */
};

//document.querySelector(".resetButton").addEventListener("click", recommend);

/* document.querySelector(".resetButton").addEventListener("click", () => {
  const interVal = setInterval(recommend, 100);
  setTimeout(() => {
    clearInterval(interVal);
    recommend;
  });
}); */

document
  .querySelector(".resetButton")
  .addEventListener("click", setInterval(continuityChange, 100));

//처음 열었을 때나 새로고침(F5)했을 때 바로 실행하고 싶을때
recommend();
