
function bindFirstArg(fn, a) {
  return function(b) {
    return fn(a, b);
  };
};


function bind( functionToBind ) {
    var slice = Array.prototype.slice,
    	args = slice.call(arguments, 1);

    return function() {
        return functionToBind.apply( null, args.concat( slice.apply( arguments ) ) );
    };
};
