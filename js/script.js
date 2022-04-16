const REQUEST_PATH = "./data/data.json";

function getData() {
  fetch(REQUEST_PATH).then((response) => response.json());
}

getData();
