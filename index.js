/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
let createEmployeeRecord = (empArray) => {
  const empRecord = {
    firstName: empArray[0],
    familyName: empArray[1],
    title: empArray[2],
    payPerHour: empArray[3],
    timeInEvents: [],
    timeOutEvents: []
  }
  return empRecord;
}

let createEmployeeRecords = (empArrays) => {
  return empArrays.map(empArray => createEmployeeRecord(empArray));
}

// their code below:
//let createTimeInEvent = function(dateStamp){
//    let [date, hour] = dateStamp.split(' ')
//
//    this.timeInEvents.push({
//        type: "TimeIn",
//        hour: parseInt(hour, 10),
//        date,
//    })
//
//    return this
//}
//
//let createTimeOutEvent = function(dateStamp){
//    let [date, hour] = dateStamp.split(' ')
//
//    this.timeOutEvents.push({
//        type: "TimeOut",
//        hour: parseInt(hour, 10),
//        date,
//    })
//
//    return this
//}

  let createTimeInEvent = function(timeIn) {
    let [date, hour] = timeIn.split(' ');
    this.timeInEvents.push({type: "TimeIn", date: date, hour: parseInt(hour, 10)});
    return this
  }
  
  let createTimeOutEvent = function(timeOut) {
    let [date, hour] = timeOut.split(' ');
    this.timeOutEvents.push({type: "TimeOut", date: date, hour: parseInt(hour, 10)});
    return this
  }

let hoursWorkedOnDate = function(dateStr) {
  let timeIn = this.timeInEvents.find( (e) => { return e.date === dateStr});
  let timeOut = this.timeOutEvents.find( (e) => { return e.date === dateStr});
  return (timeOut.hour - timeIn.hour) / 100
}

let wagesEarnedOnDate = function(dateStr) {
  let wage = hoursWorkedOnDate.call(this, dateStr) * this.payPerHour;
  return parseFloat(wage.toString())
}

let findEmployeeByFirstName = (empRecords, firstName) => {
  return empRecords.find( (empRecord) => {return empRecord.firstName === firstName});
}

let calculatePayroll = function(empRecords) {
    return empRecords.reduce( function(accumulator, empRecord) { return accumulator + allWagesFor.call(empRecord)}, 0)
}



// their code below this line
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}