const generateMemeButton = document.querySelector(
  ".meme-generator .generate-meme-button"
);

const memeImage = document.querySelector(".meme-generator img");

const memeTitle = document.querySelector(".meme-generator .meme-title");

const memeAuthor = document.querySelector(".meme-generator .meme-author");
// create a function called updateDetails
const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = `Meme by: ${author}`;
};
// here i get a fetch api happyheartmemes
const generateMeme = () => {
  fetch("https://meme-api.com/gimme/memes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};

generateMemeButton.addEventListener("click", generateMeme);

generateMeme();
