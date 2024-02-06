function TodaysDate  () {
        const everyday = new Date()
        const thisMonth = everyday.getMonth();
	const today = everyday.getDay();
	const dayOfMonth = everyday.getDate()
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

	const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        const month = (monthNames[thisMonth])
		console.log(month)

	
	const day = (weekDays[today])
		console.log(day)

	console.log(dayOfMonth);

	const year = everyday.getFullYear()
		console.log(year)

const suffix = addSuffix(dayOfMonth)
console.log( `${dayOfMonth}${suffix} ${month}, ${year}` )

}

function addSuffix(dayOfMonth) {
	switch(dayOfMonth % 10) {
		case 1: return "st";
		case 2: return "nd";
		case 3: return "rd";
		default: return "th";
	}
      }



 

TodaysDate()

