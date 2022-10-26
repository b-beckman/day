console.log("ça fonctionne!");

let ta = [4, 4, 5];
let total = 0;

function average(tableau) {
  for (const note of tableau) {
    total = total + note;
    return total / tableau.length;
  }
}

console.log(average(ta));
average(ta);
