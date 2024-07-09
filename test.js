let dateToday;

const currentDate = () => {
  const now = new Date();

  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }
  if (month < 10) {
    month = '0' + month;
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
  let targetDate = '2032-06-25';
  let currentDateMMDD;
  let targetDateMMDD;
  let currentYearNumber;
  let currentMonthNumber;
  let currentDateDDNumber;
  let targetYearNumber;
  let targetMonthNumber;
  let targetDateDDNumber;

  let daysCount;

  const sliceYearCurrent = () => {
    currentYear = dateToday.slice(0, 4);
    currentDateMMDD = dateToday.slice(5);
    console.log('YYYY-MM-DD(current): ' + currentYear + ',' + currentDateMMDD);
  };

  const sliceYearTarget = (targetDate) => {
    targetYear = targetDate.slice(0, 4);
    targetDateMMDD = targetDate.slice(5);
    console.log('YYYY-MM-DD(target): ' + targetYear + ',' + targetDateMMDD);
  };

  const sliceMonthCurrent = () => {
    currentMonth = currentDateMMDD.slice(0, 2);
    currentDateDD = currentDateMMDD.slice(3);
    console.log('MM-DD(current): ' + currentMonth + ',' + currentDateDD);
  };

  const sliceMonthTarget = () => {
    targetMonth = targetDateMMDD.slice(0, 2);
    targetDateDD = targetDateMMDD.slice(3);
    console.log('MM-DD(target): ' + targetMonth + ',' + targetDateDD);
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
    /* Add the days to the next full year */
    /* Checks if current year a leap year is */
    let isLeapYear;
    if (
      (currentYearNumber % 4 === 0 && currentYearNumber % 100 !== 0) ||
      currentYearNumber % 400 === 0
    ) {
      isLeapYear = true;
    } else {
      isLeapYear = false;
    }
    const monthInDays = [
      31,
      28 + (isLeapYear ? 1 : 0),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    /* Added the the days to the next month */
    let indexStartMonth = currentMonthNumber - 1;
    let daysOfcurrentMonth = monthInDays[indexStartMonth];
    daysCount = daysOfcurrentMonth - currentDateDDNumber;

    /* Added the days to the next year */
    indexStartMonth += 1;
    for (; indexStartMonth < monthInDays.length; indexStartMonth++) {
      daysCount += monthInDays[indexStartMonth];
    }
    console.log(daysCount);

    /* Add the days to the target year */
    currentYearNumber += 1;
    console.log('CYN: ' + currentYearNumber + ' TYN: ' + targetYearNumber);
    if (currentYearNumber > targetYearNumber) {
      for (; currentYearNumber <= targetYearNumber - 1; currentYearNumber++) {
        if (
          (currentYearNumber % 4 === 0 && currentYearNumber % 100 !== 0) ||
          currentYearNumber % 400 === 0
        ) {
          daysCount += 365;
        } else {
          daysCount += 366;
        }
      }
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
