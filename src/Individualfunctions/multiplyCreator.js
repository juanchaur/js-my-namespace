

var MultiplyCreator = function(){
	var nValue = arguments[0],
		nIndex = arguments[1],
		aArray = arguments[2],
		sNameOfFunction = "MultiplyBy";
		
	sNameOfFunction += nValue;
	window[sNameOfFunction] = multiply2Values.bind( this, nValue );
};

/*
 
 function multiply2Values( nToSum, nValue ) {
	if( !isNaN(nToSum) && !isNaN(nValue) ){
		nToSum = parseInt(nToSum, 10);
		nValue = parseInt(nValue, 10);
		return nToSum * nValue;	
	
	}else{
		return NaN;
	}
}



function _each( aArray, fpCallBack, thisArgs){
	var argumentsThis,
		aNewArray = [], 
		nArrayLength = aArray.length,
		i = 0;
		
	if( thisArgs){
		argumentsThis = thisArgs;
	}
	for(; i < nArrayLength; i++){
		var oElement, mappedValue;
		oElement = aArray[ i ];
		mappedValue = fpCallBack.call( argumentsThis, oElement, i, aArray );
		aNewArray[ i ] = mappedValue;
	}
	return aNewArray;
}


var vector = [4, 445, 567];

var MultiplyCreator = function(){
	var nValue = arguments[0],
		nIndex = arguments[1],
		aArray = arguments[2],
		sNameOfFunction = "MultiplyBy";
		
	sNameOfFunction += nValue;
	window[sNameOfFunction] = multiply2Values.bind( this, nValue );;
};

 
 * */