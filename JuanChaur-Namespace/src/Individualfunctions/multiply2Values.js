


function multiply2Values ( nOperan1, nOperand2 ) {
	if( !isNaN(nOperan1) && !isNaN(nOperand2) ) {
		nOperan1 = parseInt(nOperan1, 10);
		nOperand2 = parseInt(nOperand2, 10);
		return nOperan1 * nOperand2;	
	
	}else {
		return NaN;
	}
}
