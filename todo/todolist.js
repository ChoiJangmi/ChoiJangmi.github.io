$(".insertContainer").on("submit", (e) => {
  e.preventDefault();
  const value = $(".input-Todo").val();
  if (value == "") return;

  $(".list").append(`
    <li class="todoItem">
        <label><span class="itemText">${value}</span><input type="checkbox" class="check" /></label>
    </li>`);
  $(".input-Todo").val("");
  $(".input-Todo").focus();
});

$(".insertContainer").on("reset", (e) => {});

//리스트 전체 삭제
$("#btn-Alldel").click(() => {
  $(".list").html("");
});

$(".btn-del").click(() => {
  console.log();
});

$(document).on("change", ".check", (e) => {
  e.currentTarget.checked
    ? $(e.currentTarget).closest(".todoItem").addClass("checkItem")
    : $(e.currentTarget).closest(".todoItem").removeClass("checkItem");
});

$(document).on("click", ".btn-del", (e) => {
  $(".todoItem").remove(".checkItem");
});

$(document).on("click", ".btn-edit", (e) => {
  const t = prompt("수정할 내용을 입력하세요");
  $(".checkItem") === null
    ? alert("수정할 항목을 체크하세요")
    : $(".checkItem").find(".itemText").text(t);
});

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
