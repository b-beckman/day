console.log("Bonjour navigateur!");

let toto = document.getElementById("les-differents-types-de-grimpe");

//toto.innerText = "salut les gars";

toto.addEventListener("click", function () {
  let articles = document.getElementsByTagName("article");
  for (const article of articles) {
    article.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
});
toto.addEventListener("click", function () {
  const divElem = document.getElementById("les-differents-types-de-grimpe");
  function randomcolor() {
    return Math.floor(Math.random() * 255);
  }
});
