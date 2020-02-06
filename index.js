// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.indexOf(string) === 0)
}

function matchName(driverObjects, string) {
  return driverObjects.filter(driverObject => driverObject.name === string)
}