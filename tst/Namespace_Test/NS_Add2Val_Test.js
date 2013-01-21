

( function ( _utilities, _maths ) {
	
	TestCase ( " [ NamespaceTest.utilities.math - 'add2Val' Test ]", {
		setUp : function(){
			
			_maths.add3 = bind( _maths.add2Val, 3 );
			_maths.add300 = bind( _maths.add2Val, 300 );
			_maths.add3000 = bind( _maths.add2Val, 3000 );	
		},
		 tearDown: function () {
	        delete _maths.add3;
			delete _maths.add300;
			delete _maths.add3000;	
	    },
		// TEST ADD2VAL
		"test Namespace.utilities.math.addVal returns a number" : function () {
	        assertNumber( _maths.add2Val( 1, 3 ) );
	    },
	    "test Namespace.utilities.math.addVal returns a proper value" : function () {
	        assertEquals(1 + 2, _maths.add2Val( 1, 2 ) );
	    },
	    "test Namespace.utilities.math.addVal returns a number when numbers are strings" : 
	    function () {
	        assertNumber( 3, _maths.add2Val( "1", "2" ) );
	    },
	    "test Namespace.utilities.math.addVal returns a proper number when numbers are strings" : 
	    function () {
	        assertEquals( 3, _maths.add2Val( "1", "2" ) );
	    },
	    "test Namespace.utilities.math.addVal return 'NaN' when arguments are not nomber" : 
	    function () {
	    	assertNaN("addVal('hola', 2)", _maths.add2Val( "hello", 2 ) );
	    },
	    
	    // TEST ADDVAL3
	    "test Namespace.utilities.math.addVal3 returns a proper value" : function () {	
	        assertEquals(7, _maths.add3( 4 ) );
	    },
	    "test Namespace.utilities.math.addVal3 returns a number when the number is a string" : 
	    function () {
	    	assertNumber( 4, _maths.add3( "1" ) );
	    },
	    // TEST ADDVAL300
	    "test Namespace.utilities.math.addVal300 returns a proper value" : function () {	
	        assertEquals(304, _maths.add300( 4 ) );
	    },
	    "test Namespace.utilities.math.addVal300 returns a number when the number is a string" : 
	    function () {
	    	assertNumber( 4, _maths.add300( "1" ) );
	    },
	    // TEST ADDVAL3000
	    "test Namespace.utilities.math.addVal3000 returns a proper value" : function () {	
	        assertEquals(3004, _maths.add3000( 4 ) );
	    },
	    "test Namespace.utilities.math.addVal3000 returns a number when the number is a string" : 
	    function () {
	    	assertNumber( 4 , _maths.add3000( "1" ) );
	    }   
	});
	
} ) ( Namespace.utilities, Namespace.utilities.math );



 