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





//Calculate my grades average

//Display Average
function display(avg, id){
  document.getElementById(id).innerText = avg
}
//Calculate Average
function average (gradesArray){
  console.log(gradesArray)
  let sum = 0
  for (const grades of gradesArray) {
    sum +=grades
  }
  console.log(sum/gradesArray.length)
  return sum/gradesArray.length
}
//retrieves Grades

function getGrades(gradesID) {
  let grades = []
  for (const gradesIDElement of gradesID) {
    let grade = parseFloat(document.getElementById(gradesIDElement).value)
    if(!isNaN(grade)){
      grades.push(grade)
    }

  }
  return grades
}


let inputs = document.getElementsByTagName("input")
for (const input of inputs) {
  input.addEventListener("input",function (){
    display(average(getGrades(["note 1", "note 2"])),"avg")
  })

}


