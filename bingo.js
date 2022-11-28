var bingo = document.getElementById("bingoTab");

var bingoThingies;

function getTableCell(i, j){
	console.log(bingo.rows[0].cells[0].innerHTML);
	var cell = bingo.rows[i].cells[j];
	bingo.rows[0].cells[0].innerHTML = "asdf";
	console.log(bingo.rows[0].cells[0].innerHTML);
	console.log('yolo');
}

function setTableCell(i, j, text){
	bingo.rows[i].cells[j].innerHTML = text;
	console.log(text);
}

function populateBingo(i, j, text){
//-- To shuffle an array a of n elements (indices 0..n-1):
// for i from n−1 downto 1 do
// j ← random integer such that 0 ≤ j ≤ i
// exchange a[j] and a[i]
	// assume i have a list of entries
	var entires = [
		"1", "1", "1", "1", "1",
		"1","1","1","1","1",
		"1","1","1","1","1",
		"1","1","1","1","1",
		"1","1","1","1","1",
	]



}



window.onload = (event) => {
  console.log('page is fully loaded');
};