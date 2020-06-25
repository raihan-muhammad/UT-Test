const grade = (number) => {
  if (number >= 90) {
    return console.log("A");
  } else if (number >= 80 && number <= 89) {
    return console.log("B");
  } else if (number >= 70 && number <= 79) {
    return console.log("C");
  } else if (number >= 60 && number <= 69) {
    return console.log("D");
  } else {
    return console.log("E");
  }
};

grade(69);
