console.log("We are learning date and time")
// shows current date and time
let currDate=new Date();
console.log(currDate)

// getFullYear(): Returns the year (e.g., 2024).
console.log(currDate.getFullYear())
// getMonth(): Returns the month (0-11).
console.log(currDate.getMonth()+1)
// getDate(): Returns the day of the month (1-31).
console.log(currDate.getDate())
// getHours(): Returns the hour (0-23).
console.log(currDate.getHours())
// getMinutes(): Returns the minutes (0-59).
console.log(currDate.getMinutes())
// getSeconds(): Returns the seconds (0-59).
console.log(currDate.getSeconds())