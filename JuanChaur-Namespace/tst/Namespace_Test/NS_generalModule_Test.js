


( function ( _general ) {
	
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
	
	TestCase ( "[ NamespaceTest.utilities.general - 'isString' Test ]", {
		setUp : function () {
			this.oIsString_Test = {
				test1 : "sss",
				test2 : { aaa : "aaa" },
				test3 : function() { return "aaa"; }() ,
				test4 : function() { return "aaa"; },
				test5 : function() { var o = { a:"aaa" }; return o.a; }(),
				test6 : function() { var o = { a:"aaa" }; return o.a; },
				test7 : 2,
				test8 : 2 + "",
				test9 : new String(2),
				test10 : new String("2") 
			};
		},
		tearDown : function () {
			this.oIsString_Test = null;	
		},
		
		"test Namespace.utilities.general.isString returns true if argument is string" : function () {
		    var sMsg ="Fail -> when argument is"; 
		    
		    assertTrue( sMsg +" string" , _general.isString( this.oIsString_Test.test1 ) );
		    
		    assertFalse( sMsg +" Object" , _general.isString( this.oIsString_Test.test2 ) );
		    
		    assertTrue( sMsg +" self-executed function which return a string" , 
		    			_general.isString( this.oIsString_Test.test3 ) );
		    			
		    assertFalse( sMsg +" a function which return a string" , 
		    			_general.isString( this.oIsString_Test.test4 ) );
		    			
		    assertTrue( sMsg +" self-executed function which return a string of a privat object", 
		    			_general.isString( this.oIsString_Test.test5 ) );
		    			
		    assertFalse( sMsg +" a function which return a property string of a privat object", 
		    			_general.isString( this.oIsString_Test.test6 ) );
		    			
		    assertFalse( sMsg +" number" , _general.isString( this.oIsString_Test.test7 ) );
		    
		    assertTrue( sMsg +" number+string" , _general.isString( this.oIsString_Test.test8 ) );
		    
		    assertFalse( sMsg +" constructor of a string which its parameter is a number", 
		    			_general.isString( this.oIsString_Test.test9 ) );
		    			
		    assertFalse( sMsg +" constructor of a string which its parameter is a string", 
		    			_general.isString( this.oIsString_Test.test10 ) );
		    
		},
	});

	TestCase ( "[ NamespaceTest.utilities.general - 'isNumber' Test ]", {
		setUp : function () {
			this.oIsNumber_Test = {
				test1 : 0,
				test2 : !0,
				test3 : !!2345,
				test4 : +0,
				test5 : -1,
				test6 : +"2",
				test7 : "2",
				test8 : parseInt("2.345"),
				test9 : parseInt("2.34dfdgdfgdfgdfgdf5"),
				test10 : parseInt("2.__s**%%$$gd55"),
				test11 : 3256,
				test12 : 3256 + "7897",
				test13 : new Number(2)
			};
		},
		tearDown : function () {
			this.oIsNumber_Test = null;	
		},
		
		"test Namespace.utilities.general.isNumber returns true if the argument is number" : function () {
		    var sMsg ="Fail -> when argument is"; 
		    
			assertTrue( sMsg +" 0" , _general.isNumber( this.oIsNumber_Test.test1 ) );
			assertFalse( sMsg +" !0" , _general.isNumber( this.oIsNumber_Test.test2 ) );
			assertFalse( sMsg +" !!2345" , _general.isNumber( this.oIsNumber_Test.test3 ) );
			assertTrue( sMsg +" +0" , _general.isNumber( this.oIsNumber_Test.test4 ) );
			assertTrue( sMsg +" -1" , _general.isNumber( this.oIsNumber_Test.test5 ) );
			assertTrue( sMsg +" +'2'" , _general.isNumber( this.oIsNumber_Test.test6 ) );
			assertFalse( sMsg +" '2'" , _general.isNumber( this.oIsNumber_Test.test7 ) );
			assertTrue( sMsg +" parseInt('2.345')" , _general.isNumber( this.oIsNumber_Test.test8 ) );
			assertTrue( sMsg +" parseInt('2.34dfdgdfgdfgdfgdf5')," , _general.isNumber( this.oIsNumber_Test.test9 ) );
			assertTrue( sMsg +" parseInt('2.__s**%%$$gd55')," , _general.isNumber( this.oIsNumber_Test.test10 ) );
			assertTrue( sMsg +" 3256" , _general.isNumber( this.oIsNumber_Test.test11 ) );
			assertFalse( sMsg +" 3256 + '7897'" , _general.isNumber( this.oIsNumber_Test.test12 ) );
			assertFalse( sMsg +" new Number(2) " , _general.isNumber( this.oIsNumber_Test.test13 ) );	   
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.general - 'isBoolean' Test ]", {
			
		"test Namespace.utilities.general.isBoolean returns true if the argument is boolean" : function () {
		    var sMsg ="Fail -> when argument is"; 
		    
			assertTrue( sMsg +" true" , _general.isBoolean( true ) );
			assertTrue( sMsg +" false" , _general.isBoolean( false) );
			assertFalse( sMsg +" 'false'" , _general.isBoolean( "false") );
			assertTrue( sMsg +" !!'false'" , _general.isBoolean( !!"false" ) );
			assertTrue( sMsg +" !'true'" , _general.isBoolean( !"true" ) );
			assertFalse( sMsg +" 0" , _general.isBoolean( 0 ) );
			assertTrue( sMsg +" !!0" , _general.isBoolean( !!0 ) );
			assertFalse( sMsg +" new Boolean(true) " , _general.isBoolean( new Boolean(true)  ) );
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.general - 'isUndefined' Test ]", {
			
		"test Namespace.utilities.general.isUndefined returns true if the argument is undefined" : function () {
			var sMsg ="Fail -> when argument is",
				a; 

			assertFalse( sMsg + " null" , _general.isUndefined( null ) );
			assertTrue( sMsg + " undefined" , _general.isUndefined( undefined) );
			assertTrue( sMsg + " var a; " , _general.isUndefined( a ) );
			assertFalse( sMsg + " {}" , _general.isUndefined( {}) );
			assertFalse( sMsg + "''" , _general.isUndefined( "" ) );
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.general - 'isObject' Test ]", {
			
		"test Namespace.utilities.general.isObject returns true if the argument is an isObject" : function () {
			var sMsg ="Fail -> when argument is";

			assertTrue( sMsg + " {}" , _general.isObject( {} ) );
			assertTrue( sMsg + " new String('aaa')" , _general.isObject( new String( "aaa" ) ) );
			assertFalse( sMsg + " 'aaa'" , _general.isObject( "aaa" ) );
			assertTrue( sMsg + " [2,3,4]" , _general.isObject( [2,3,4] ) );
			assertFalse( sMsg + " function(){}" , _general.isObject( function(){} ) );
			assertFalse( sMsg + " function(){}()" , _general.isObject( function(){}() ) );
			assertFalse( sMsg + " false" , _general.isObject( false ) );
			assertFalse( sMsg + " 3" , _general.isObject( 3 ) );
			assertFalse( sMsg + " !!3" , _general.isObject( !!3 ) );
			assertTrue( sMsg + " new Boolean (true)" , _general.isObject( new Boolean (true) ) );
			assertFalse( sMsg + " undefined" , _general.isObject( undefined ) );
			assertTrue( sMsg + " null" , _general.isObject( null ) );

			// Document object
			assertTrue( sMsg + " document.body" , _general.isObject( document.body ) );
			assertTrue( sMsg + " document.forms" , _general.isObject( document.forms ) );
			assertFalse( sMsg + " document.body_" , _general.isObject( document.body_ ) );
		}
	});
	TestCase ( "[ NamespaceTest.utilities.general - 'isArray' Test ]", {
			
			"test Namespace.utilities.general.isArray returns true if the argument is an isArray" : function () {
			var sMsg ="Fail -> when argument is";
			
			assertFunction( _general.isArray );
			assertFalse( sMsg + " 2", _general.isArray( 2 ) );
			assertFalse( sMsg + " 'aaa'", _general.isArray( "aaa" ) );    
			assertFalse( sMsg + " {}", _general.isArray( {} ) );
			assertTrue( sMsg + " [2, 3, 4]", _general.isArray( [2, 3, 4] ) );
			assertFalse( sMsg + " documents.links", _general.isArray( document.links ) );	
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.general - 'isFunction' Test ]", {
			
			"test Namespace.utilities.general.isFunction returns true if the argument is an isFunction" : function () {
			var sMsg ="Fail -> when argument is",
				sum3 = function ( val ) { return val + 3; };
				
			assertFunction("Checks if isFunction is a function of namespace.general", _general.isFunction );
			assertTrue( sMsg + " sum3", _general.isFunction( sum3 ) );
			assertTrue( sMsg + " function(){}", _general.isFunction( function(){} ) );
			assertFalse( sMsg + " {}",_general.isFunction( {} ) );    
			assertFalse( sMsg + " ''",_general.isFunction( "" ) );
			assertFalse( sMsg + " 4",_general.isFunction( 4 ) ) ;
			assertFalse( sMsg + " undefined",_general.isFunction( undefined ) );
			assertFalse( sMsg + " null",_general.isFunction( null ) );
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.general - 'isDOMObject' Test ]", {
			
			"test Namespace.utilities.general.isDOMObject returns true if the argument is an DOM Object" : function () {
			var sMsg ="Fail -> when argument is";
			
			assertFunction( _general.isDOMObject );
		
			assertFalse( sMsg + " {}", _general.isDOMObject( {} ) );
			assertTrue( sMsg + " document", _general.isDOMObject( document ) );
			assertTrue( sMsg + " document.body", _general.isDOMObject( document.body ) );    
			assertFalse( sMsg + " document.forms", _general.isDOMObject( document.forms) );	
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.general - 'isHTMLCollection' Test ]", {
			
			"test Namespace.utilities.general.isHTMLCollection returns true if the argument is an isHTMLCollection" : function () {
			var sMsg ="Fail -> when argument is";
			
			assertFunction( _general.isHTMLCollection );
		
			assertFalse( sMsg + " document", _general.isHTMLCollection( document ) );
			assertFalse( sMsg + " document.body", _general.isHTMLCollection( document.body ) );
			assertTrue( sMsg + " document.links", _general.isHTMLCollection( document.links ) );    
			assertFalse( sMsg + " [1, 2, 3]", _general.isHTMLCollection( [1, 2, 3] ) );	
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.general - 'isLiteralObject' Test ]", {
			
			"test Namespace.utilities.general.isLiteralObject returns true if the argument is an isLiteralObject" : function () {
			var sMsg ="Fail -> when argument is";
			
			assertFunction( _general.isLiteralObject );

			assertTrue( sMsg + " {a:1, b:2}", _general.isLiteralObject( {a:1, b:2} ) );  
			assertTrue( sMsg + " {}", _general.isLiteralObject( {} ) );  
			assertFalse( sMsg + " document.body", _general.isLiteralObject( document.body ) );
			assertFalse( sMsg + " [2, 3, 4] ", _general.isLiteralObject( [2, 3, 4] ) );
			assertFalse( sMsg + " window", _general.isLiteralObject( window ) );    
			assertFalse( sMsg + " function() {}", _general.isLiteralObject( function() {} ) );
		}
	});
	
	
//sMsg + " ", 
	
} ) ( Namespace.utilities.general );

