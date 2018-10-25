// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
  return [drivers[0], drivers[1]];
}

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(drivers.length - 2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
