

var add4 = addVal.bind( this,  4 );
var add10 = addVal.bind( this,  10 );
var add500 = addVal.bind( this,  500 );

function _each( aArray, fpCallBack, thisArgs){
	var nArrayLength = aArray.length,
		aNewArray = [], 
		argumentsThis,
		mappedValue, 
		oElement,
		i = 0;
		
	if( thisArgs){
		argumentsThis = thisArgs;
	}
	for(; i < nArrayLength; i++){
		oElement = aArray[ i ];
		mappedValue = fpCallBack.call( argumentsThis, oElement, i, aArray );
		aNewArray[ i ] = mappedValue;
	}
	return aNewArray;
}



