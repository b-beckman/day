console.log("Bonjour navigateur!");

let toto = document.getElementById("textarea");

//toto.innerText = "salut les gars";

toto.addEventListener("input", function (e) {
  let articles = document.getElementsByTagName("article");
  for (const article of articles) {
    article.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);

    document.getElementsByTagName("header")[0].innerText = e.target.value;
  }
});
