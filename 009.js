// array baru
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
// filter array
const newArray = dataArray.filter(
  (item, index) => dataArray.indexOf(item) === index
);
// tampilkan array
console.log(newArray);
