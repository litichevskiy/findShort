function findShort ( str ) {
	let listWords = str.split(' ');
	let length = listWords.length;
	let result = Infinity;
	let item;

	for( let i = 0; i < length; i++ ) {
		item = listWords[i].length;
		if( item < result ) result = item;
	}

	return result;
};

function findShort_v1( str ) {
	let listWords = str.split(' ');

	let listLength = listWords.map( ( item ) => {
		return item.length;
	});

	return Math.min.apply(null, listLength);
};

function findShort_v2( str ) {
	let listWords = str.split(' ');

	return listWords.reduce( ( previos, current ) => {
		return ( previos.length < current.length ) ? previos : current;
	}, listWords[0] ).length;
};