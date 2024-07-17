const dateCalculation = () => {
  //let targetDate = document.getElementById('targetDate').value.getTime;
  let targetDate = new Date("Jan 5, 2030 15:37:25").getTime();

  const counter = setInterval(0 = () => {
    const startDate = Date.now();

    let distance = targetDate - startDate;

    //Calculate the The days, hours, minutes and second
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //display the timer on the web
    
  })

};

dateCalculation();

