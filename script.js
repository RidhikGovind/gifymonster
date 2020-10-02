const input = document.getElementById("input");
const display = document.querySelector(".display");
const form = document.querySelector("form");
const gif = document.querySelector(".gif");
const button = document.querySelector("button");
const loader = document.querySelector(".loader");
const link = document.querySelector(".link");
const theme = document.querySelector("#theme");
const themeIcon = document.querySelector("#theme-icon");

let isDark = false;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const tag = input.value;
    const gifURL = `https://api.giphy.com/v1/gifs/random?api_key=zwtSi8hA6IZtjFDBU9ZgoxOCeh90beEl&tag=${tag}&rating=r`;
    loader.style.display = "block";

    fetch(gifURL)
        .then((datas) => datas.json())
        .then((response) => {
            link.innerHTML = response.data.fixed_height_downsampled_url;
            gif.src = response.data.fixed_height_downsampled_url;

            form.reset();
            loader.style.display = "none";
            link.style.display = "block";
        })
        .catch((err) => console.log(err));
});

theme.addEventListener("click", () => {
    if (isDark) {
        document.querySelector("body").classList.remove("dark");
        document.querySelector("body").classList.add("light");
        themeIcon.setAttribute("src", "./icon/sun.png");
    } else {
        document.querySelector("body").classList.remove("light");
        document.querySelector("body").classList.add("dark");
        themeIcon.setAttribute("src", "./icon/moon.png");
    }
    isDark = !isDark;
});
