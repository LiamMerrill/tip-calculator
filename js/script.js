function tipCalculate(){
	var totalBill = document.getElementById('bill').value;
	console.log(totalBill);

var percBtns = document.getElementsByClassName('tip-btn');
console.log(percBtns);
for(var i=0; i<percBtns.length; i++){
	if (percBtns[i].checked){
		var tipPerc = percBtns[i].value;
	}
}
var tipTotal = totalBill * tipPerc;
console.log(tipTotal);
var tipBox = document.getElementById('tipamount');
tipBox.innerHTML = '$' + tipTotal;
var Final = document.getElementById('finalbill');
tipBox.innerHTML = '$' + totalBill;
}//add script here
