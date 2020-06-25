const palingdrom = (string) => {
  string = string.toLowerCase().replace(/[^?.,]+/g, "");
  if (string === string.split("").reverse().join("")) {
    return console.log(false);
  } else {
    return console.log(true);
  }
};

palingdrom("Cigar? Toss it in a can. It is so tragic");
palingdrom("Hello World");
