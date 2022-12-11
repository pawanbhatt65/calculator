(function () {
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let equal = document.querySelector(".btn-equal");
  let clear = document.querySelector(".btn-clear");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      let value = event.target.dataset.num;
      screen.value += value;
    });
  });

  equal.addEventListener("click", function () {
    if (screen.value === "") {
      screen.value = "Please enter";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  clear.addEventListener("click", function () {
    screen.value = "";
  });
})();
