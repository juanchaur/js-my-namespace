


( function ( _utilities, _maths ) {
	
	// Common settup and teardown that will be used in the different cases
	function commonSetUp() {
		var self = this;
		this.oOperations = null;
		self.oOperations = {
			multiply 	: [ 4, 445, 567 ],
			division 	: [ 2, 456, 100 ],
			sum 		: [ 200, 6700, 400 ],
			substract 	: [ 20, 5 ]
		};
		
	};
	function commonTearDown () {};
	
	TestCase ( "[ NamespaceTest.utilities - 'each' Test ]", {
		
		setUp : function () {
			commonSetUp.call( this );
			this.aTestingArray = [ 1,2,3 ];	
			_maths.add3 = bind( _maths.add2Val, 3 );
		},
		
		tearDown : function () {
			commonTearDown.call( this );
		},
		"test each returns the number of calls of the callback" : function () {
			var callback = sinon.spy(),
				aOutputArray = _utilities.each( this.aTestingArray, callback );
			assertEquals( 3, callback.callCount ); 
		},
		"test each returns the proper value of apply add3 to [1,2,3]" :	function () {
			var aOutputArray = _utilities.each( this.aTestingArray, _maths.add3 );
															   										   
			assertArray( aOutputArray ); 
			assertEquals([4,5,6], aOutputArray );
		},
		
		"test each applies the callback with proper values" : function () {
			var spy = sinon.spy(),
				aOutputArray = _utilities.each( this.aTestingArray, spy );
	
			assertTrue(spy.calledThrice);
		},
		"test each checks the proper value of arguments" : function () {
			var spy = sinon.spy(),
				aArray = [10,20,30],
				aOutputArray = _utilities.each( aArray, spy );
			
			assertEquals( 3, spy.args[0].length );
			assertEquals( "Value of the first position: ", 10, spy.args[0][0]);
			assertEquals( "Value of the second position: ", 20, spy.args[1][0]);
			assertEquals( "Value of the third position: ", 30, spy.args[2][0]);
			
			assertEquals( "Value of the index of first element: ", 0, spy.args[0][1]);
			assertEquals( "Value of the index of second element: ", 1, spy.args[1][1]);
			assertEquals( "Value of the index of third element: ", 2, spy.args[2][1]);
		}
	});

	// TEST CREATEOPERATION
	TestCase("[ NamespaceTest.utilities.math - 'CreateOperations' Test ]", {
	
		setUp : function () {
			commonSetUp.call( this );
		},
		tearDown : function () {
			commonTearDown.call( this );
			delete _maths.addBy23;
			delete _maths.multiplyBy3;
			delete _maths.divideBy10;
			delete _maths.substractBy3;
		},
		
		// TEST EACH CREATOR OPERATIONS 
		"test addCreator creates a 'addBy' function" : function () {
	    	_maths.addCreator( 23 )
	        assertEquals("function", typeof _maths.addBy23 );
	   	},
	   	"test multiplyCreator creates a 'multiplyBy' function" : function () {
	    	_maths.multiplyCreator( 3 )
	        assertEquals("function", typeof _maths.multiplyBy3 );
	        
	   	},
	   	"test divideCreator creates a 'divideBy' function" : function () {
	    	_maths.divideCreator( 10 )
	        assertEquals("function", typeof _maths.divideBy10 );
	        
	   	},
	   	"test substractCreator creates a 'substractBy' function" : function () {
	    	_maths.substractCreator( 3 )
	        assertEquals("function", typeof _maths.substractBy3 );
	   	},

		// ADDBY
	   "test each makes a addBy function of a given array" : function () {
			var callback = sinon.spy();
			_utilities.each( this.oOperations.sum, _maths.addCreator );
			
			assertFunction( _maths.addBy200 );
			assertFunction( _maths.addBy6700 ); 
			assertFunction( _maths.addBy400 );  
		},
		"test addBy functions return a proper value" : function () {
			var callback = sinon.spy();
			
			assertEquals( 202, _maths.addBy200( 2 ) );
			assertEquals( 6702, _maths.addBy6700( 2 ) );
			assertEquals( 402, _maths.addBy400( 2 ) );
		},
		// MULTIPLY ADD
	   "test each makes a MultiplyBy function of a given array" : function () {
			var callback = sinon.spy();
			_utilities.each( this.oOperations.multiply, _maths.multiplyCreator );
			
			assertFunction( _maths.multiplyBy4 );
			assertFunction( _maths.multiplyBy445 ); 
			assertFunction( _maths.multiplyBy567 );
			delete _maths.multiplyBy4;
			delete _maths.multiplyBy445;
			delete _maths.multiplyBy567;
		},
		"test MultiplyBy functions return a proper value" : function () {
			var callback = sinon.spy();
			_utilities.each( this.oOperations.multiply, _maths.multiplyCreator );
			
			assertEquals( 8, _maths.multiplyBy4( 2 ) );
			assertEquals( 890, _maths.multiplyBy445( 2 ) );
			assertEquals( 1134, _maths.multiplyBy567( 2 ) );
			delete _maths.multiplyBy4;
			delete _maths.multiplyBy445;
			delete _maths.multiplyBy567;
		},
		// DIVIDEBY
		"test each makes a divideBy function of a given array" : function () {
			var callback = sinon.spy();
			_utilities.each( this.oOperations.division, _maths.divideCreator );
			
			assertFunction( _maths.divideBy2 );
			assertFunction( _maths.divideBy456 ); 
			assertFunction( _maths.divideBy100 );  
			delete _maths.divideBy2;
			delete _maths.divideBy456;
			delete _maths.divideBy100;
		},
		"test divideBy functions return a proper value" : function () {
			var callback = sinon.spy();
			_utilities.each( this.oOperations.division, _maths.divideCreator );
			
			assertEquals( 2, _maths.divideBy2( 4 ) );
			assertEquals( 1.0964912280701755, _maths.divideBy456( 500 ) );
			assertEquals(  0.02, _maths.divideBy100( 2 ) );
			delete _maths.divideBy2;
			delete _maths.divideBy456;
			delete _maths.divideBy100;
		},
		// SUBSTRACTBY
		"test each makes a substractBy function of a given array" : function () {
			var callback = sinon.spy();
			_utilities.each( this.oOperations.substract, _maths.substractCreator );
			
			assertFunction( _maths.substractBy20 );
			assertFunction( _maths.substractBy5 );
			delete _maths.substractBy20;
			delete _maths.substractBy5;
		},
		"test substractBy functions return a proper value" : function () {
			var callback = sinon.spy();
			_utilities.each( this.oOperations.substract, _maths.substractCreator );
			
			assertEquals( -10, _maths.substractBy20( 10 ) );
			assertEquals( 0, _maths.substractBy5( 5 ) );
			delete _maths.substractBy20;
			delete _maths.substractBy5;
		}
	});
	
} ) ( Namespace.utilities, Namespace.utilities.math );


