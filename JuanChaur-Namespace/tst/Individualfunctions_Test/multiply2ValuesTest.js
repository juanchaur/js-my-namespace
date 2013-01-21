

TestCase("multiply2ValuesTest", {
	
    "test multiply2Values returns a number" : function () {
        assertNumber( multiply2Values( 1, 3 ) );
    },
    "test multiply2Values returns a proper value" : function () {
        assertEquals(1 * 2, multiply2Values( 1, 2 ) );
    },
    "test multiply2Values returns a number when numbers are strings" : function () {
        assertNumber( 2, multiply2Values( "1", "2" ) );
    },
    "test multiply2Values returns a proper number when numbers are strings" : function () {
        assertEquals( 2, multiply2Values( "1", "2" ) );
    },
    "test multiply2Values return 'NaN' when arguments are not nomber" : function () {
    	assertNaN("addVal('hola', 2)", multiply2Values( "hello", 2 ) );
    },
    "test multiply2Values return 'NaN' when no arguments are are passed by" : function () {
    	assertNaN("addVal()", multiply2Values( ) );
    },
    "test multiply2Values return 'NaN' when there's just one parameter" : function () {
    	assertNaN("addVal(2)", multiply2Values( 2 ) );
    },
    "test multiply2Values return 'NaN' when an object is a parameter" : function () {
    	assertNaN("addVal({2:'hi'}, 2)", multiply2Values( {2:'hi'}, 2 ) );
    }
    
});
