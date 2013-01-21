

TestCase("eachTest", {
	
    "test add4 returns a proper number" : function () {
        assertEquals( 7, add4( 3 ) );
    },
    
	"test _each returns the number of calls of the callback" : function () {
		var callback = sinon.spy(),
			aArray = [1,2,3];

		_each( aArray, callback );
		assertEquals( 3, callback.callCount ); 
	},
	"test _each returns the proper value of apply add4 to [1,2,3]" : function () {
		var aArray = [1,2,3],
			aNewArray = _each( aArray, add4 );
		
		assertArray( aArray ); 
		assertEquals([5,6,7], aNewArray );
	},
	
	"test _each applies the callback with proper values" : function () {
		var spy = sinon.spy(),
			aArray = [10,20,30];
			
		_each( aArray, spy );
		assertTrue(spy.calledThrice);
		//assertEquals(4, spy.args[0].length)
				//assertTrue( spy.calledWith(10) );
	},
	"test _each checks the proper value of arguments" : function () {
		var spy = sinon.spy(),
			aArray = [10,20,30];
		_each( aArray, spy );
		
		assertEquals( 3, spy.args[0].length );
		assertEquals( "Value of the first position: ", 10, spy.args[0][0]);
		assertEquals( "Value of the second position: ", 20, spy.args[1][0]);
		assertEquals( "Value of the third position: ", 30, spy.args[2][0]);
		
		assertEquals( "Value of the index of first element: ", 0, spy.args[0][1]);
		assertEquals( "Value of the index of second element: ", 1, spy.args[1][1]);
		assertEquals( "Value of the index of third element: ", 2, spy.args[2][1]);
	}
});


