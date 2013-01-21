
TestCase("MultiplyCreatorTest", {
	

    "test MultiplyCreatorTest creates a function" : function () {
    	MultiplyCreator( 2 );
        assertEquals("function", typeof MultiplyBy2 );
    },
    
    "test _each makes a MultiplyBy function of a given array" : function () {
		var callback = sinon.spy();
			aArray = [4, 445, 567];
			
		_each( aArray, MultiplyCreator );
		
		assertFunction( MultiplyBy4 );
		assertFunction( MultiplyBy445 ); 
		assertFunction( MultiplyBy567 );  
	},
	"test MultiplyBy functions return a proper value" : function () {
		var callback = sinon.spy();
			aArray = [4, 445, 567];
			
		_each( aArray, MultiplyCreator );
		
		assertEquals( 8, MultiplyBy4( 2 ) );
		assertEquals( 890, MultiplyBy445( 2 ) );
		assertEquals( 1134, MultiplyBy567( 2 ) );
	}
    
});
