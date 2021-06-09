const menuBar = document.getElementById("menuBar");
menuBar.addEventListener("click", (e) => {
  const navBar = document.getElementById("navBar");

  menuBar.classList.toggle("open");

  if (menuBar.classList.contains("open")) {
    navBar.style.cssText = "transform:scaleY(1);";
    navBar.style.maxHeight = "200px";
  }

  if (!menuBar.classList.contains("open")) {
    navBar.style.cssText = "transform:scaleY(0);";
    navBar.style.maxHeight = "0px";
  }

  [...navBar.children].some((item) => {
    item.addEventListener("click", () => {
      menuBar.classList.remove("open");
      navBar.style.cssText = "transform:scaleY(0);";
      navBar.style.maxHeight = "0px";
    });
  });
});
