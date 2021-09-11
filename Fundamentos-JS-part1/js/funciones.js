function cutFruitPrices(fruit) {
  return fruit * 4;
}

function fruitProcessor(aples, oranges) {
  const applePieces = cutFruitPrices(aples);
  const orangePieces = cutFruitPrices(oranges);

  const juice = `Juice with ${applePieces} piece of
  apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
