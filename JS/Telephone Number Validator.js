function telephoneCheck(str) {
  var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  return regex.test(str);
}


telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("555 555 5555");
telephoneCheck("5555555555");
telephoneCheck("1 555 555 5555");
telephoneCheck("800-692-7753");
telephoneCheck("8oo-six427676;laskdjf");