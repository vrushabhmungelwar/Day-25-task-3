fetch("https://anime-facts-rest-api.herokuapp.com/api/v1 ")
  .then((res) => res.json())
  .then((data) => initialize(data))
  .catch((err) => console.log("Error:", err.message));

function initialize(data) {
  var array = data.data;
  array.filter((element) => {
    let name1 = element.anime_name;
    if (element.anime_name === "itachi_uchiha") {
    } else {
      document.querySelector(".container").innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src="${element.anime_img}" class="card-img-top" alt="${name1}">
    <div class="card-body">
        <h5 class="card-title">${name1}</h5>
        </div>
</div>`;
    }
  });
}
