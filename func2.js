var n=prompt("Enter number of entries for the bought history: ");
var tgp=0; //totalGoldprice
var tgw=0;//totalGoldweight
var agp=0;//avgGoldprice
var vp = 0;//valueprice
var tvp = 0;//totalvalueprice
var pol = 0;//profitorloss
var tsp=0;
var spol = 0;
var i=1;
var j=1;
alert("Enter bought history one by one and for every entry hit Submit");
function addnew(){
	if(i <= n){
	var gp = document.getElementById("gp");
	var gw=document.getElementById("gw");
	tgp=Number(tgp)+Number(gp.value);
	tgw=Number(tgw)+Number(gw.value);
	vp = (Number(gp.value) + 94.4859) * Number(gw.value);
	tvp = tvp + vp;
	alert("Entry "+ i + "\nEntered Gold Price: Rs." + gp.value + "/g\nEntered Bought Gold weight: " + gw.value + "g");
	i++;
	}
	if(i > n){
		agp=tgp/n;
		alert("Average Gold price: Rs." + agp + "/g\nActual Value price: Rs."+tvp+ "\nTotal Gold in Locker: " + tgw + "g\n\nEnter current value in the form");
	}
}
function finish(){
	var cvp = document.getElementById("cvp");
	pol = Number(cvp.value) - Number(tvp);
	if(pol < 0){
		alert("Loss: Rs." + pol);
	}
	else{
		alert("Profit: Rs." + pol);
	}
}
function spcalculate(){
	var sp = document.getElementById("sp");
	var csp= Number(sp.value) * Number(tgw);
	var tcsp=csp;
	alert("Total Price receivable: Rs." + tcsp);
	spol = Number(tcsp) - Number(tvp)-10;
	if(spol < 0){
		alert("Loss: Rs."+spol);
	}
	else{
		alert("Profit: Rs."+spol);
	}
}