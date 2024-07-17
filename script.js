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
        document.getElementById('CountdownCloack').innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

        if(distance < 0) {
          clearInterval(counter);
          document.getElementById('CountdownCloack').innerHTML = 'EXPIRED';
        }
      }, 1000);
    };
    formatingTheDate();
  });
};

dateCalculation();
