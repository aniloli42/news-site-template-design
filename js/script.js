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

// variables for clone the main content
const mainContent = document.querySelector(".main-content");
const mainDiv = document.querySelector(".main-div");

cloneContentMaker(mainContent, mainDiv, 2);

// variables for clone the popular content
const popularContent = document.querySelector(".popular-content");
const popularDiv = document.querySelector(".popular-body");

cloneContentMaker(popularContent, popularDiv, 2);

// implement the function which clone the content and add on particular div
function cloneContentMaker(source, target, loopTimes) {
  let intialLoop = 0;
  while (intialLoop < loopTimes) {
    let cloneContent = source.cloneNode(true);

    // appending clone content
    target.appendChild(cloneContent);
    intialLoop++;
  }
}
