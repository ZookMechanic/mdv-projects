// Kevin Flanagan
// 26 July 2012
// Deliverable 4
// My Library


// Find the number of hours or days difference between two dates.
today = new Date()
var christmas = new Date(today.getFullYear(), 11, 25)
if (today.getMonth()==11 && today.getDate()>25)
christmas.setFullYear(christmas.getFullYear()+1)
var one_day=1000*60*60*24

console.log(Math.ceil((christmas.getTime()-today.getTime())/(one_day))+ " days left until Christmas!")


