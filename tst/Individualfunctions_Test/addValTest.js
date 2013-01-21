

TestCase("addValTest", {
	
    "test addVal returns a number" : function () {
        assertNumber( addVal( 1, 3 ) );
    },
    "test addVal returns a proper value" : function () {
        assertEquals(1 + 2, addVal( 1, 2 ) );
    },
    "test addVal returns a number when numbers are strings" : function () {
        assertNumber( 3, addVal( "1", "2" ) );
    },
    "test addVal returns a proper number when numbers are strings" : function () {
        assertEquals( 3, addVal( "1", "2" ) );
    },
    "test addVal return 'NaN' when arguments are not nomber" : function () {
    	assertNaN("addVal('hola', 2)", addVal( "hello", 2 ) );
    }
});

TestCase("add3Test", {
    "test addVal3 returns a proper value" : function () {
        assertEquals(7, add3( 4 ) );
    },
    "test addVal3 returns a number when the number is a string" : function () {
    	assertNumber( 4 , add3( "1" ) );
    }  
});

TestCase("add300Test", {
    "test addVal300 returns a proper value" : function () {
        assertEquals(304, add300( 4 ) );
    },
    "test addVal300 returns a number when the number is a string" : function () {
    	assertNumber( 4 , add300( "1" ) );
    }  
});

TestCase("add3000Test", {
    "test addVal3000 returns a proper value" : function () {
        assertEquals(3004, add3000( 4 ) );
    },
    "test addVal3000 returns a number when the number is a string" : function () {
    	assertNumber( 4 , add3000( "1" ) );
    }  
});