let day = parseInt(prompt("Nhập vào ngày:"));
let month = parseInt(prompt("Nhập vào tháng:"));
let year = parseInt(prompt("Nhập vào năm:"));

if (month <= 12 && year > 0 && day > 0 && month > 0) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day > 31) {
        console.log(`Ngày ${day}/${month}/${year} là ngày không hợp lệ `);
      } else if (day != 31) {
        console.log(
          `Ngày ${day}/${month}/${year} là ngày hợp lệ. Ngày tiếp theo là ${
            day + 1
          }/${month}/${year}`
        );
      } else if (day == 31 && month != 12) {
        console.log(
          `Ngày ${day}/${month}/${year} là ngày hợp lệ. Ngày tiếp theo là ${1}/${
            month + 1
          }/${year}`
        );
      } else if (day == 31 && month == 12) {
        console.log(
          `Ngày ${day}/${month}/${year} là ngày hợp lệ. Ngày tiếp theo là ${1}/${1}/${
            year + 1
          }`
        );
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (day > 30) {
        console.log(`Ngày ${day}/${month}/${year} là ngày không hợp lệ`);
      } else if (day != 30) {
        console.log(
          `Ngày ${day}/${month}/${year} là ngày hợp lệ. Ngày tiếp theo là ${
            day + 1
          }/${month}/${year}`
        );
      } else if (day == 30) {
        console.log(
          `Ngày ${day}/${month}/${year} là ngày hợp lệ. Ngày tiếp theo là ${1}/${
            month + 1
          }/${year}`
        );
      }
      break;
    case 2:
      let isLeapYear =
        (year % 4 == 0 && year % 100 == 0 && year % 400 == 0) ||
        (year % 4 == 0 && year % 100 != 0);

      if (isLeapYear && day <= 29 && day != 29) {
        console.log(
          `Ngày ${day}/${month}/${year} là ngày hợp lệ. Ngày tiếp theo là ${
            day + 1
          }/${month}/${year}`
        );
      } else if (!isLeapYear && day <= 28 && day != 28) {
        console.log(
          `Ngày ${day}/${month}/${year} là ngày hợp lệ. Ngày tiếp theo là ${
            day + 1
          }/${month}/${year}`
        );
      } else if (isLeapYear && day <= 29 && day == 29) {
        console.log(
          `Ngày ${day}/${month}/${year} là ngày hợp lệ. Ngày tiếp theo là ${1}/${
            month + 1
          }/${year}`
        );
      } else if (isLeapYear && day <= 29 && day == 29) {
        console.log(
          `Ngày ${day}/${month}/${year} là ngày hợp lệ. Ngày tiếp theo là ${1}/${
            month + 1
          }/${year}`
        );
      } else {
        console.log(`Ngày ${day}/${month}/${year} là ngày không hợp lệ`);
      }
      break;
  }
} else {
  alert("Bao Loi");
}

//function

function isCheckDateValid(day, month, year) {}
