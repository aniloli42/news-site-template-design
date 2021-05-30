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
