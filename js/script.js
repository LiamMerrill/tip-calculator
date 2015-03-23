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
}//add script here

function resetBill(){
	var totalSpend = document.getElementById('bill');
	totalSpend.value = "";

	var tipBoxx = document.getElementById('tipamount');
	tipBoxx.innerHTML = "";

	var percBtns = document.getElementsByClassName('tip-btn');
	console.log(percBtns);
	for(var i=0; i<percBtns.length; i++){
		percBtns[i].checked = false
		
	}
}
