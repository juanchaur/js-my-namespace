


( function ( _utilities, _DOM ) {
	
	// Common settup and teardown that will be used in the different cases
	function commonSetUp() {
		var self = this;
		self.oHTMLTestObject
		assertUndefined( this.oHTMLTestObject );
		/*:DOC oHTMLTestObject=<p id="oHTMLTestObject" class="test test-other jpchm sldd"></p> */
		assertNotUndefined( this.oHTMLTestObject );
		
	};
	function commonTearDown () {
		self.oHTMLTestObject = undefined;
	};
	
	TestCase ( "[ NamespaceTest.utilities.DOMInteraction - 'hasClass' Test ]", {
		setUp : function () {
			commonSetUp.call( this );
		},
		tearDown : function () {
			commonTearDown.call( this );
		},
		
		"test if the testDOM element is a Object" : function () {
			assertObject( this.oHTMLTestObject );
		},
		"test if the testDOM element has className property" : function () {
			assertString( this.oHTMLTestObject.className );
		},
		"test if hasClass of a null object and no class is false" : function () {
			assertFalse( _DOM.hasClass( null, "" ) );
		},
		"test if the testDOM hasClass" : function () {
			var sMsg = "Fail -> with argument: ";
			
			assertFalse( sMsg + "{}, 'test' ", _DOM.hasClass( {},"test" ) );
			assertFalse( sMsg + "2, 'test' ", _DOM.hasClass( 2,"test" ) );
			assertFalse( sMsg + "2, 'null' ", _DOM.hasClass( 2,null ) );
			assertFalse( sMsg + "DOMObj, 'null' ", _DOM.hasClass( oHTMLTestObject,null ) );
			assertFalse( sMsg + "undefined, 'null' ", _DOM.hasClass( undefined, null ) );
			assertFalse( sMsg + "DOMObj, '' ", _DOM.hasClass( this.oHTMLTestObject, "") );
			assertTrue( sMsg + "DOMObj, 'test-other' ", _DOM.hasClass( this.oHTMLTestObject, "test-other" ) );
			assertFalse( sMsg + "DOMObj, 'ghi' ", _DOM.hasClass( this.oHTMLTestObject, "ghi" ) );
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.DOMInteraction - 'addClass' Test ]", {
		setUp : function () {
			commonSetUp.call( this );
			this.sClassBeforeAdding = this.oHTMLTestObject.className;
		},
		tearDown : function () {
			//commonTearDown.call( this );
		},
		
		"test if addClass is a function" : function () {
			assertFunction( _DOM.addClass );
		},
		"test if addClass adds properly a new class to a object" : function () {
			_DOM.addClass( this.oHTMLTestObject, "test-adding-class" );
			assertEquals( this.sClassBeforeAdding + " test-adding-class",  this.oHTMLTestObject.className );
		},
		"test if addClass doesn't add a class if the object already has it" : function () {
			_DOM.addClass( this.oHTMLTestObject, "test-other" );
			assertEquals( this.sClassBeforeAdding, this.oHTMLTestObject.className );
		},
		"test if addClass behavies correctly with object that are not DOMObjects" : function () {
			var sMsg = "Fail -> with argument: ";
			assertFalse( sMsg + "{}, 'test' ", _DOM.addClass( {},"test" ) );
			assertFalse( sMsg + "2, 'test' ", _DOM.addClass( 2,"test" ) );
			assertFalse( sMsg + "2, 'null' ", _DOM.addClass( 2,null ) );
			assertFalse( sMsg + "undefined, 'test' ", _DOM.addClass( undefined,"test" ) );
			_DOM.addClass( this.oHTMLTestObject, "" );
			assertEquals(sMsg + "DOMObj, ''", this.sClassBeforeAdding, this.oHTMLTestObject.className );
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.DOMInteraction - 'removeClass' Test ]", {
		setUp : function () {
			commonSetUp.call( this );
			this.sClassBeforeAdding = this.oHTMLTestObject.className;
		},
		tearDown : function () {
			//commonTearDown.call( this );
		},
		
		"test if removeClass is a function" : function () {
			assertFunction( _DOM.removeClass );
		},
		"test if removeClass removes properly a class of the object" : function () {
			_DOM.removeClass( this.oHTMLTestObject, "test" );
			assertEquals( "test-other jpchm sldd",  this.oHTMLTestObject.className );
		},
		"test if removeClass doesn't remove a classname which is a substring of another" : function () {
			_DOM.addClass( this.oHTMLTestObject, "test-other" );
			_DOM.addClass( this.oHTMLTestObject, "jjjjhikkkhi" );
			_DOM.addClass( this.oHTMLTestObject, "oo-hi" );
			_DOM.addClass( this.oHTMLTestObject, "hi" );
			_DOM.removeClass( this.oHTMLTestObject, "hi" );
			assertEquals( "test test-other jpchm sldd jjjjhikkkhi oo-hi", this.oHTMLTestObject.className );
		},
		"test if removeClass behavies correctly with object that are not DOMObjects" : function () {
			var sMsg = "Fail -> with argument: ";
			assertFalse( sMsg + "{}, 'test' ", _DOM.removeClass( {},"test" ) );
			assertFalse( sMsg + "2, 'test' ", _DOM.removeClass( 2,"test" ) );
			assertFalse( sMsg + "2, 'null' ", _DOM.removeClass( 2,null ) );
			assertFalse( sMsg + "undefined, 'test' ", _DOM.removeClass( undefined,"test" ) );
			_DOM.removeClass( this.oHTMLTestObject, "" );
			assertEquals(sMsg + "DOMObj, ''", this.sClassBeforeAdding, this.oHTMLTestObject.className );
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.DOMInteraction - 'getByClass' Test ]", {
		setUp : function () {
			commonSetUp.call( this );
			this.sClassBeforeAdding = this.oHTMLTestObject.className;
			
			/*:DOC += <div id="maincontainer">
			 	<div class="prueba">
			 		<span class="test">
			 			<span class="test first-level">
			 				<span class="test second-level">
			 				</span>
			 			</span>
			 		</span>
			 		<div class="prueba anidado1">
			 			<span class="test anidado1">
			 				<span class="test anidado12">
			 				</span>
			 			</span>
			 			<div class="anidado2 prueba">
			 				<span class="test anidado2">
			 				</span>
			 			</div>
			 			<h1 class="prueba">
			 			</h1>
			 		</div>
			 	</div>
			 </div>
			 */
			assertNotNull( document.getElementById( 'maincontainer' ) );
			this.oContainer = document.getElementById("maincontainer");
			this.sClassToSearch = "prueba";
			this.sTagToSearch = 'span';
			
		},
		tearDown : function () {
			//commonTearDown.call( this );
		},
		
		"test if getByClass is a function" : function () {
			assertFunction( _DOM.getByClass );
		},
		"test if getByClass gets properly an array of elements which contains a certain class" : function () {
			var aResultObject = _DOM.getByClass( this.sClassToSearch, this.sTagToSearch, this.oContainer ),
				sMsg = "Fail-> this container doesn't have that class";
			assertNotEquals( sMsg, 3,  aResultObject.length );
			
			aResultObject = _DOM.getByClass( "test", this.sTagToSearch, this.oContainer );
			assertEquals( sMsg, 6,  aResultObject.length );
			
			aResultObject = _DOM.getByClass( "prueba", "",this.oContainer );
			assertEquals( sMsg, 4,  aResultObject.length );
		},
		"test if getByClass behavies correctly with object that are not DOMObjects" : function () {
			var sMsg = "Fail -> with argument: ";
			assertFalse( sMsg + "{}, 'test' ", _DOM.getByClass( "test", this.sTagToSearch, {} ));
			assertFalse( sMsg + "2, 'test' ", _DOM.getByClass( "test", this.sTagToSearch, 2 ));
			aResultObject = _DOM.getByClass( null, null,null);
			assertEquals( sMsg, 0,  aResultObject.length );
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.DOMInteraction - 'attachEvent' Test ]", {
		setUp : function () {
			/*:DOC button=<button>click me!</button> */
			/*:DOC button2=<button>click me!</button> */
			assertNotUndefined(this.button);
		},
		tearDown : function () {},
		"test if attachEvent is a function" : function () {
			assertFunction( _DOM.attachEvent );
		},
		"test attachEvent behavies correctly": function() {
			_DOM.attachEvent( this.button,"click", function() { this.attachEventClicked = true}, false );
			_DOM.attachEvent( this.button2,"click", function() { this.attachEventClicked = true}, false );
			this.button.click();
			//this.button2.click();
			assertTrue( this.button.attachEventClicked );
			assertUndefined( this.button2.attachEventClicked );
		}
	});
	
	TestCase ( "[ NamespaceTest.utilities.DOMInteraction - 'delegate' Test ]", {
		setUp : function () {
			/*:DOC button=<div id='main'><button>click me!</button></div> */
			/*:DOC button2=<button>click me!</button> */
			assertNotUndefined(this.button);
			document.body.className = "";
		},
		tearDown : function () {
			document.body.className = document.body.className.replace("testing", "");
		},
		"test if delegate is a function" : function () {
			assertFunction( _DOM.delegate );
		},
		"test delegates behavies correctly": function() {
			var fpCallBack = function () {
				document.body.className = "testing";
			}
			assertFalse( _DOM.hasClass( document.body, "testing" ) );
			_DOM.delegate( document, fpCallBack, "body", "click");
			document.body.click();
			assertTrue( _DOM.hasClass( document.body, "testing") );
		}
	});
	
	
	TestCase ( "[ NamespaceTest.utilities.DOMInteraction - 'show and hide' Test ]", {
		setUp : function () {
			document.body.className = "";
		},
		tearDown : function () {
			//document.body.className = document.body.className.replace("testing", "");
		},
		"test if show and hide are functions" : function () {
			assertFunction( _DOM.show );
			assertFunction( _DOM.hide );
		},
		"test show and hide behavie correctly": function() {
			assertFalse( _DOM.hasClass( document.body, 'visible' ) );
			assertFalse( _DOM.hasClass( document.body, 'hidden' ) );
			assertFalse( _DOM.hasClass( document.body, 'fadding' ) );
			
			//debugger;
			_DOM.show( document.body, true );
			assertTrue( _DOM.hasClass( document.body, 'visible' ) );
			assertFalse( _DOM.hasClass( document.body, 'hidden' ) );
			assertTrue( _DOM.hasClass( document.body, 'fadding' ) );
			
			_DOM.show( document.body );
			assertTrue( _DOM.hasClass( document.body, 'visible' ) );
			assertFalse( _DOM.hasClass( document.body, 'hidden' ) );
			assertFalse( _DOM.hasClass( document.body, 'fadding' ) );
			
			_DOM.hide( document.body, true );
			assertFalse( _DOM.hasClass( document.body, 'visible' ) );
			assertTrue( _DOM.hasClass( document.body, 'hidden' ) );
			assertTrue( _DOM.hasClass( document.body, 'fadding' ) );
			
			_DOM.hide( document.body );
			assertFalse( _DOM.hasClass( document.body, 'visible' ) );
			assertTrue( _DOM.hasClass( document.body, 'hidden' ) );
			assertFalse( _DOM.hasClass( document.body, 'fadding' ) );
			
		}
	});
} ) ( Namespace.utilities, Namespace.utilities.DOMInteraction );

