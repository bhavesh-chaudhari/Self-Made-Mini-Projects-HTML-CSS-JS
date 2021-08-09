const bar = document.querySelector(".bar");
var timer = null;

window.addEventListener("scroll", () => {
  var windowScrolled =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolledPercent = (windowScrolled / height) * 100;
  bar.style.width = scrolledPercent + "%";
  bar.style.background = "blue";
  bar.style.opacity = "1";
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    bar.style.opacity = "0.3";
  }, 50);
});
