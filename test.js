let dateToday;

const currentDate = () => {
  const now = new Date();

  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  dateToday = `${year}-${month}-${day}`;
  return dateToday;
};

const formatingTheDate = () => {
  let currentYear;
  let currentMonth;
  let currentDateDD;
  let targetYear;
  let targetMonth;
  let targetDateDD;
  let targetDate = "2032-06-25";
  let currentDateMMDD;
  let targetDateMMDD;
  let currentYearNumber;
  let currentMonthNumber;
  let currentDateDDNumber;
  let targetYearNumber;
  let targetMonthNumber;
  let targetDateDDNumber;

  const sliceYearCurrent = () => {
    currentYear = dateToday.slice(0, 4);
    currentDateMMDD = dateToday.slice(5);
    console.log("YYYY-MM-DD(current): " + currentYear + "," + currentDateMMDD);
  };

  const sliceYearTarget = (targetDate) => {
    targetYear = targetDate.slice(0, 4);
    targetDateMMDD = targetDate.slice(5);
    console.log("YYYY-MM-DD(target): " + targetYear + "," + targetDateMMDD);
  };

  const sliceMonthCurrent = () => {
    currentMonth = currentDateMMDD.slice(0, 2);
    currentDateDD = currentDateMMDD.slice(3);
    console.log("MM-DD(current): " + currentMonth + "," + currentDateDD);
  };

  const sliceMonthTarget = () => {
    targetMonth = targetDateMMDD.slice(0, 2);
    targetDateDD = targetDateMMDD.slice(3);
    console.log("MM-DD(target): " + targetMonth + "," + targetDateDD);
  };

  sliceYearCurrent(currentDate);
  sliceYearTarget(targetDate);

  sliceMonthCurrent();
  sliceMonthTarget();

  const changeDatesToInt = (
    currentYear,
    currentMonth,
    currentDateDD,
    targetYear,
    targetMonth,
    targetDateDD
  ) => {
    currentYearNumber = parseInt(currentYear);
    currentMonthNumber = parseInt(currentMonth);
    currentDateDDNumber = parseInt(currentDateDD);
    targetYearNumber = parseInt(targetYear);
    targetMonthNumber = parseInt(targetMonth);
    targetDateDDNumber = parseInt(targetDateDD);
  };

  const calculationTargetCurrent = (
    currentYearNumber,
    currentMonthNumber,
    currentDateDDNumber,
    targetYearNumber,
    targetMonthNumber,
    targetDateDDNumber
  ) => {
    /* Checks if the year is a leapYear and when not how many years left until the next leapyear*/
    let nextLeapYear = 4;
    let leapYear = true;
    if (
      currentYearNumber % 4 === 0 &&
      currentYearNumber % 100 !== 0 &&
      currentYearNumber % 400 !== 0
    ) {
      let howManyYearsUntilLeapYear = currentYearNumber / 4;
      if (howManyYearsUntilLeapYear % 1 === 0.25) {
        nextLeapYear = 3;
        leapYear = false;
        console.log("Next Leapyear in " + nextLeapYear);
      } else if (howManyYearsUntilLeapYear % 1 === 0.5) {
        nextLeapYear = 2;
        leapYear = false;
        console.log("Next Leapyear in " + nextLeapYear);
      } else {
        nextLeapYear = 1;
        leapYear = false;
        console.log("Next Leapyear in " + nextLeapYear);
      }
    }
    /* Checks if current and target the same year is or not */
    if (!currentYearNumber === targetYearNumber) {
    }
  };
  changeDatesToInt(
    currentYear,
    currentMonth,
    currentDateDD,
    targetYear,
    targetMonth,
    targetDateDD
  );
  calculationTargetCurrent(
    currentYearNumber,
    currentMonthNumber,
    currentDateDDNumber,
    targetYearNumber,
    targetMonthNumber,
    targetDateDDNumber
  );
};

currentDate();
formatingTheDate();
