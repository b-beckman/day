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

let avg_leo = average(ta);

function pass(avg) {
  if (avg > 6) {
    console.log("Tricheur");
    return;
  }
  if (avg < 4) {
    console.log("raté");
  } else {
    console.log("réussi");
  }
}

pass(ta);
