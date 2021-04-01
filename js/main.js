function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return console.log(year + "年はうるう年です");
  }
  return console.log(year + "年はうるう年ではありません");
}

leapYear(2020);
leapYear(2021);