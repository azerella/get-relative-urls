const relativeMatch = /(href|src)="(\/|..\/|(?!http)).+?"/gmi;

/**
 * 
 * @param {string} fileData 
 */
const getRelativeURLs = ( fileData ) => {
	let matches = fileData.match( relativeMatch )
		// Filter out in-page links
		.filter( item => !item.includes(`#`))

	console.log( matches );
}

module.exports = getRelativeURLs;
