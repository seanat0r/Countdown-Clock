const dateCalculation = () => {
    let submitForm = document.getElementById('submit');
    const currentDate = () => {
        const now = new Date();

        let day = now.getDate();
        let month = now.getMonth() + 1;
        let year = now.getFullYear();

        if (day < 10) {
            day = '0' + day;
        };
        if (month < 10) {
            month = '0' + month;
        };

        return `${year}-${month}-${day}`;
    }
    submitForm.addEventListener(('submit'), (e) => {
        e.preventDefault();

        let targetDate = document.getElementById('targetDate').value; 
        let currentYear = '0';
        let currentDateMMDD = '0';

        let targetYear = '0';
        let targetDateMMDD = '0';  

        let currentDateDD = '0';
        let targetDateDD = '0';
        
        let currentDateYYYYNumber = 0;
        let currentDateMMDDNumber = 0;
        let currentDDNumber = 0;

        let targetDateYYYYNumber = 0;
        let targetDateMMDDNumber = 0;
        let targetDateDDNumber = 0;
        
        const formatingTheDate = (currentDate) => {
            /* Getting each YYYY/MM/DD as a sepreat variabel */
            const sliceYearCurrent = (currentDate) => {
                currentYear = currentDate.slice(0,4);
                currentDateMMDD = currentDate.slice(4);
                console.log('YYYYMMDD: ' + currentYear + ',' + currentDateMMDD);
            };
            const sliceYearTarget = (targetDate) => {
                targetYear = targetDate.slice(0,4);
                targetDateMMDD = targetDate.slice(4);
                console.log (targetYear + ',' +targetDateMMDD);
            };

            sliceYearCurrent(currentDate);
            sliceYearTarget(targetDate);

            const sliceMonthCurrent = (currentDateMMDD) => {
                currentDateMMDD = currentDateMMDD.slice(0,2);
                currentDateDD = currentDateMMDD.slice(2);
                console.log ('MMDD: ' + currentDateMMDD + currentDateDD);
            };
            const sliceMonthTarget = (targetDateMMDD) => {
                targetDateMMDD = currentDateMMDD.slice(0,2);
                targetDateDD = currentDateMMDD.slice(2);
                console.log ('MMDD: ' + targetDateMMDD + targetDateDD);
            };
            
            sliceMonthCurrent(currentDateMMDD);
            sliceMonthTarget(targetDateMMDD);

            const changeDatesToInt = (currentDate, currentDateMMDD, currentDateDD, targetDate, targetDateMMDD, targetDateDD) => {
            let currentDateYYYYNumber = parseInt(currentDate);
            let currentDateMMDDNumber = parseInt(currentDateMMDD); 
            let currentDDNumber = parseInt(currentDateDD); 
            let targetDateYYYYNumber = parseInt(targetDate);
            let targetDateMMDDNumber = parseInt(targetDateMMDD);
            let targetDateDDNumber = parseInt(targetDateDD);
            }

            const calculationTargetCurrent = (currentDateYYYYNumber, currentDateMMDDNumber, currentDateDD, targetDateYYYYNumber, targetDateMMDDNumber, targetDateDDNumber) => {
                /* Checks if the year is a leapYear and when not how many years left until the next leapyear*/
                let nextLeapYear = 4;
                let leapYear = true;
                if ((currentDateYYYYNumber % 4 === 0 && currentDateYYYYNumber % 100 !== 0) && (currentDateYYYYNumber % 400 !== 0)) {
                    let howManyYearsUntilLeapYear = currentDateYYYYNumber / 4;
                    if (howManyYearsUntilLeapYear % 1 === 0.25) {
                        nextLeapYear = 3;
                        leapYear = false;
                    } else if (howManyYearsUntilLeapYear % 1 === 0.5) {
                        nextLeapYear = 2;
                        leapYear = false; 
                    } else {
                        nextLeapYear = 1;
                        leapYear = false;
                    };
                };
                /* Checks if current and target the same year is or not */
                if (!currentDateYYYYNumber === targetDateYYYYNumber) {
                    
                }
            };
            changeDatesToInt (currentDate, currentDateMMDD, currentDateDD, targetDate, targetDateMMDD, targetDateDD)
            calculationTargetCurrent(currentDateYYYYNumber, currentDateMMDDNumber, currentDateDD, targetDateYYYYNumber, targetDateMMDDNumber, targetDateDDNumber)
            
        }
        formatingTheDate(currentDate, targetDate);
    })
    console.log(currentDate());
    
};


dateCalculation();