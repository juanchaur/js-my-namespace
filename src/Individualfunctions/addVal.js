
function addVal( nToSum, nValue ) {
	if( !isNaN(nToSum) && !isNaN(nValue) ){
		nToSum = parseInt(nToSum, 10);
		nValue = parseInt(nValue, 10);
		return nToSum + nValue;	
	
	}else{
		return NaN;
	}
}


function add3() {};
function add300(){};
function add3000(){};
add3 = addVal.bind( this,  3 );
add300 = addVal.bind( this, 300 );
add3000 = addVal.bind( this, 3000 );