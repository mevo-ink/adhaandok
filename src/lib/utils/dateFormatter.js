export default (date) => {
	const jsDate = new Date(date),
		yyyy = jsDate.getFullYear()
	let mm = jsDate.getMonth() + 1,
		dd = jsDate.getDate()
	if (dd < 10) dd = '0' + dd
	if (mm < 10) mm = '0' + mm
	return dd + '/' + mm + '/' + yyyy
}
