// News API Key
const apiKey = "bd732aaa020f4dd2a31b2de5a87825d6";

function getData() {
  let url = `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${apiKey}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.status != "ok") reject();
    })
    .catch(() => console.log("Error on Server"));
}

// getData();

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
});
