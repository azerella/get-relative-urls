const relativeURLMatch = /(href|src)=("|')(\/|..\/|(?!http)).*?('|")/gm;

/**
 * Given a string, return an array of all relative links.
 * 
 * @param {string} stringToCheck The string to scan for relative URLs
 * 
 * @returns {string[]} List of relative URLs
 */
const getRelativeURLs = ( stringToCheck ) => {
	if( stringToCheck && typeof(stringToCheck) == 'string' ){
		let matches = stringToCheck.match( relativeURLMatch );
	
		if( matches && matches.length > 0 ){
			matches = matches
				// Filter out in-page links
				.filter( item => !item.includes(`#`))
				// Cleanup URLs
				.map( item => item.replace(/(href|src)=('|")/, ''))
				.map( item => item.replace(/\"$/, ''))
		}
		else{
			return [];
		}
		return matches;
	}
	else{
		return [];
	}
}

module.exports = getRelativeURLs;
