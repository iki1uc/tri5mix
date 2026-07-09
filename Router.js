document.querySelectorAll("#bios li").forEach(li => {
  li.addEventListener("click", () => {
    const view = li.getAttribute("data-view");

    document.getElementById("bios").style.display = "none";

    document.querySelectorAll(".screen").forEach(div => {
      div.style.display = "none";
    });

    document.getElementById(view).style.display = "block";
  });
});

function back() {
  document.querySelectorAll(".screen").forEach(div => {
    div.style.display = "none";
  });
  document.getElementById("bios").style.display = "block";
}
