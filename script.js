function decimalToBinary(num) {
  //Write you code here
	let str = "";
	while(num>0){
	   // console.log(num%2);
		str = str + num%2;
		num = Math.floor(num/2);
	}
	let arr = str.split("");
	arr.reverse();
    return arr.join("");
  
}

window.decimalToBinary = decimalToBinary;
