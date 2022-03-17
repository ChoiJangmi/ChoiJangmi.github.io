$(".insertContainer").on("submit", (e) => {
  e.preventDefault();
  const value = $(".input-Todo").val();
  if (value == "") return;

  $(".list").append(`
    <li class="todoItem">
        <label>
            <input type="checkbox" class="check" />
            <span class="todoText">${value}</span>
        </label>
        <button class="btn-edit" type="button" >수정</button>
        <button class="btn-del" type="button">삭제</button>
    </li>`);
  $(".input-Todo").val("");
  $(".input-Todo").focus();
});

$(".insertContainer").on("reset", (e) => {});

//리스트 전체 삭제
$("#btn-Alldel").click(() => {
  $(".list").html("");
});

$(document).on("click", ".btn-del", (e) => {
  $(e.currentTarget).parent().remove();
});

// 새로 추가된 버튼에도 이벤트를 추가하기 위해
// document에서 추가함
$(document).on("change", ".check", (e) => {
  const value = e.currentTarget.checked;
  value
    ? $(e.currentTarget).parent().addClass("done")
    : $(e.currentTarget).parent().removeClass("done");
});
// $(document).on("change", ".check", function () {
//   const checked = $(this).prop("checked");
//   checked
//     ? $(this).closest(".todoItem").addClass("doen")
//     : $(this).closest(".todoItem").removeClass("doen");
// });

$(document).on("click", ".btn-edit", (e) => {
  const t = prompt("수정할 내용을 입력하세요");
  //자식요소내에서 찾을 때 => children()
  //자손요소까지 검색해 찾을 때 => find()
  $(e.currentTarget).parent().find(".todoText").text(t);
});

// $(".check").click((e) => {
//   console.log((e).prop("checked"));
// });

// =======================================
//  1. 추가된 버튼은 이벤트를 인식 못함
//  2. 추가된 버튼의 이벤트를 Document에 있는 이벤트를 실행
/* $(".btn-delete").click((e) => {
  $(e.currentTarget).parent().remove();
});

$(document).on("click", ".btn-delete", (e) => {
  $(e.currentTarget).parent().remove();
});

//vanilla javascript로 구현
document.querySelectorAll(".todo-list").addEventListerner(("click"),
  (e) => {
    if (e.target.classList.contains("btn-delete")) {
      e.target.parentNode.remove();
    }
  };
 */
