const dateCalculation = () => {
  let submitForm = document.getElementById('submit');

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

    return `${year}-${month}-${day}`;
  };

  submitForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formatingTheDate = () => {
      const getTargetDate = () => {
        let targetDateValue = document.getElementById('targetDate').value;
        if (targetDateValue) {
          let targetDateHolder = new Date(targetDateValue);
          let targetTimeStamp = targetDateHolder.getTime();
          return targetTimeStamp;
        } else {
          console.log('targetDateValue is not true');
        }
      };
      let targetDate = getTargetDate();
      //let targetDate = new Date("Jan 5, 2030 15:37:25").getTime();

      const counter = setInterval(function () {
        const startDate = Date.now();

        let distance = targetDate - startDate;

        //Calculate the The days, hours, minutes and second
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //display the timer on the web
        document.getElementById('CountdownCloack').innerHTML =
          days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

        if (distance < 0) {
          clearInterval(counter);
          document.getElementById('CountdownCloack').innerHTML = 'EXPIRED';
        }
      }, 1000);
    };
    formatingTheDate();
  });
};

const timerCalculation = () => {
  const submitFormForCountdown = document.getElementById('submitForCountdown');
  const countdownDisplay = document.getElementById("counter");

  submitFormForCountdown.addEventListener('submit', (e) => {
    e.preventDefault(); 
    
    let inputTimerValue = document.getElementById('appt-time').value;
    
    // Split input into hours and minutes and convert to numbers
    let [hours, minutes] = inputTimerValue.split(':').map(Number);

    // Calculate milliseconds
    let hoursInMilliseconds = hours * 3_600_000;
    let minutesInMilliseconds = minutes * 60_000;
    let totalMilliseconds = hoursInMilliseconds + minutesInMilliseconds;
    
    console.log('Total milliseconds: ', totalMilliseconds);

    // Current Time
    let currentTime = new Date();
    console.log('Current Time: ', currentTime);

    // Target Time
    let targetTime = new Date(currentTime.getTime() + totalMilliseconds);
    console.log('Timer ends at: ', targetTime);

    // Counting
    const updateCountdown = () => {
      let now = new Date();
      let timeDifference = targetTime -now;

      if (timeDifference <= 0) {
        countdownDisplay.innerHTML = "00:00:00";
        clearInterval(countdownInterval);
        alert('Timer expired');
        return;
      }

      let hoursLeft = Math.floor(timeDifference / (1000 * 60 * 60));
      let minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      let secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

      hoursLeft = String(hoursLeft).padStart(2, '0');
      minutesLeft = String(minutesLeft).padStart(2, '0');
      secondsLeft = String(secondsLeft).padStart(2, '0');

      countdownDisplay.innerHTML = `${hoursLeft}:${minutesLeft}:${secondsLeft}`;
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

  });
};

const changeSiteFunction = () => {
  // Buttons
  let DateToDateCountdown = document.getElementById('DateToDate');
  let NumberCountdown = document.getElementById('NumberCount');

  //Area
  let onForDateToDate = document.getElementById('DateToDateCountdown');
  let onForNumberCountdown = document.getElementById('NumberCountCountdown');

  const activateNumberCountdown = () => {
    onForDateToDate.style.display = 'block';
    onForNumberCountdown.style.display = 'none';
  };
  const activateDateToDate = () => {
    onForDateToDate.style.display = 'none';
    onForNumberCountdown.style.display = 'block';
  };

  DateToDateCountdown.addEventListener('click', activateNumberCountdown);
  NumberCountdown.addEventListener('click', activateDateToDate);
};

timerCalculation();
dateCalculation();
changeSiteFunction();
