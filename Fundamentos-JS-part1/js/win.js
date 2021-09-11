const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (97 + 112 + 80) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreKoalas >= 100) {
  console.log("Dolphings win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the thophy!");
} else {
  console.log("No one wins the trhopy 😢");
}
