console.log("Bonjour navigateur!");

let toto = document.getElementById("les-differents-types-de-grimpe");

//toto.innerText = "salut les gars";

toto.addEventListener("click", function () {
  let articles = document.getElementsByTagName("article");
  for (const article of articles) {
    article.style.backgroundColor = "blue";
  }
});
