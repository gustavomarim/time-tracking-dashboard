const REQUEST_PATH = "./data/data.json";

const timeFrames = document.querySelectorAll(".profile-time-frames li");

function getTimeFrameLi(event) {
  const { id } = event.target;
  // console.log("id", id);
  return id;
}

timeFrames.forEach((timeFrame) => {
  timeFrame.addEventListener("click", getTimeFrameLi);
});

function getData() {
  fetch(REQUEST_PATH)
    .then((response) => response.json())
    .then((response) => {
      const data = response;
      return data;
    });
}

getData();
