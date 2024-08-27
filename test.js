const calculation = () => {
 // current Time
 let currentTime = new Date();
 console.log("Time now: ", currentTime);

 // Duration
 let durationInMinutes = 1;

 let durationInMilliseconds = durationInMinutes * 60000;

 // TargetTime
 let TargetTime = new Date(currentTime.getTime() + durationInMilliseconds);
 console.log("Timer ends at: ", TargetTime);

 // Counting
 setTimeout(function() {
    console.log("Timer expired! The Targettime is reached: ", TargetTime);
 }, durationInMilliseconds)
}
console.log(calculation());
