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


getTableCell(2,2);



window.onload = (event) => {
  console.log('page is fully loaded');
  setTableCell(4,4, "freemoney")
};