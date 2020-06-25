const min = (number) => {
  return console.log(`Nilai min adalah ${Math.floor(Math.min(number))}`);
};

const max = (number) => {
  return console.log(`Nilai max adalah ${Math.ceil(Math.max(number))}`);
};

const average = (number) => {
  return console.log(`Nilai rata-rata adalah ${number / 100}`);
};

let angka = [];

for (let i = 1; i <= 100; i++) {
  angka.push(i);
}

const deretAngka = Math.random() * 100;

min(deretAngka);
max(deretAngka);
average(deretAngka);
