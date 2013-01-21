


( function ( _utilities, _OI ) {
	
	// Common settup and teardown that will be used in the different cases
	function commonSetUp() {
		var self = this;
		self.oHTMLTestObject
	};
	function commonTearDown () {
		self.oHTMLTestObject = undefined;
	};
	
	TestCase ( "[ NamespaceTest.utilities.objectInteraction - 'getUniqueId' Test ]", {
		setUp : function () {
		},
		tearDown : function () {
		},
		"test if getUniqueId is a function" : function () {
			assertFunction( _OI.getUniqueId );
		},
		"test getUniqueId  behavies correctly": function() {
			var i = 0;
			for( i < 100; i++){
				assertEquals( i, _OI.getUniqueId() );	
			}
			assertNotEquals( 1, _OI.getUniqueId() );
			i = 0;	
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.objectInteraction - 'extendObject' Test ]", {
		setUp : function () {
		},
		tearDown : function () {
		},
		"test if extendObject is a function" : function () {
			assertFunction( _OI.extendObject );
		},
		"test extendObject  behavies correctly": function() {
			var oParent,
				oChild,
				oChild2,
				property;
			function Parent() {
				this.bear = true;
				this.age = 34;
			}
			Parent.prototype.name = 'Im a parent instance';
			Parent.prototype.laught = true;
			function Child() {
				this.name = 'Im a child instance';
				this.bored = true;
			}
			
			oParent = new Parent();
			oChild = new Child();
	
			assertEquals("Im a child instance", oChild.name );
			assertUndefined( oChild.laught );
			delete oChild.name;
			assertUndefined( oChild.name );
			
			_OI.extendObject( Parent, Child );
			oChild2 = new Child();
			assertEquals("Im a child instance", oChild2.name );
		}
	});
	//cloneObject
	TestCase ( "[ NamespaceTest.utilities.objectInteraction - 'cloneObject' Test ]", {
		setUp : function () {
		},
		tearDown : function () {
		},
		"test if cloneObject is a function" : function () {
			assertFunction( _OI.cloneObject );
		},
		"test cloneObject  behavies correctly": function() {
			var oObject = { a:1, b:3, c: true },
				oReturnedCloneObject = _OI.cloneObject( oObject ),
				Foo = function(){
					this.d = 0;
				};
			assertEquals( "1 - Fail -> not cloned object", oObject, oReturnedCloneObject );
			oObject = new Foo();
			assertEquals( "2 - Fail -> not cloned object", oObject, _OI.cloneObject( oObject ) );
			Foo.prototype.baa = 23;
			oObject = new Foo();
			assertEquals( "3 - Fail -> not cloned object", oObject, _OI.cloneObject( oObject ) );
		}
	});
	
} ) ( Namespace.utilities, Namespace.utilities.objectInteraction );

