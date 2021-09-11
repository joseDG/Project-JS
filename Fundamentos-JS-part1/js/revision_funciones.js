const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
};

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    return -1;
    console.log(`${firstName} has already retired 🎉 `);
  }
};

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Jonas"));
