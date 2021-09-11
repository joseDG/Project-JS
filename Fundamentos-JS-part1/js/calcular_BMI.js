//BMI = mass / height ** 2 = mass / (height * height)

//Mark
const massMark = 95;
const heightMark = 1.88;

//Jhon
const massJhon = 85;
const heightJhon = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJhon = massJhon / (heightJhon * heightJhon);
console.log(BMIMark, BMIJhon);

if (BMIMark > BMIJhon) {
  console.log(`Mark's BMI (${BMIMark}) is heigher than Jhon's (${BMIJhon})!`);
} else {
  console.log(`Jhon's BMI (${BMIJhon}) is heigher than Mark's (${BMIMark})!`);
}
