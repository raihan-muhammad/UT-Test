const dataArray = [
  "Jakarta",
  "Aceh",
  "Malang",
  "Medan",
  "Bontang",
  "Jogja",
  "Jakarta",
  "Bandung",
  "Malang",
  "Solo",
  "Palembang",
  "Bandung",
];

const newArray = dataArray.filter(
  (item, index) => dataArray.indexOf(item) === index
);

console.log(newArray);
