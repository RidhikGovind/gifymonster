const input = document.getElementById("input");
const display = document.querySelector(".display");
const form = document.querySelector("form");
const gif = document.querySelector(".gif");
const button = document.querySelector("button");
const loader = document.querySelector(".loader");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const tag = input.value;
  const gifURL = `https://api.giphy.com/v1/gifs/random?api_key=zwtSi8hA6IZtjFDBU9ZgoxOCeh90beEl&tag=${tag}&rating=r`;
  loader.style.display = "block";

  fetch(gifURL)
    .then((datas) => datas.json())
    .then((response) => {
      document.querySelector(".link").innerHTML =
        response.data.fixed_height_downsampled_url;
      gif.src = response.data.fixed_height_downsampled_url;

      form.reset();
      loader.style.display = "none";
    })
    .catch((err) => console.log(err));
});
