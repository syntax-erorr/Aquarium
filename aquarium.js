window.onload=function() {
	lengthObj = document.getElementById('txtLength');
    heightObj = document.getElementById('txtHeight');
    widthtObj = document.getElementById('txtWidth');
	costObj= document.getElementById("tdCost");
    document.getElementById('btnReset').onclick = resetInputs ();
    document.getElementById('btnCalcCost').onclick = calcWeight();
}
function resetInputs() {
                lengthObj.value = '';
                widthObj.value = '';
                heightObj.value = '';
				costObj.innerHTML= '';
}
function calcWeight() {
	var length = new Number(lengthObj.value);
    var width = new Number(widthObj.value);
	var height = new Number(heightObj.value);
    costObj.innerHTML = '';
    if(isNaN(length) || isNaN(width) || isNaN(height)) {
		alert('Invalid length or girth');
		return;
    }
    costObj.innerHTML = length*width
}
