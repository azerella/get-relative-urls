const getRelativeURLs = require( './index.js' );
const { expect } = require('chai');

describe( 'getRelativeURLs()', () => {
    it( 'Should return a relative url given a HTML string', () => {
        expect( getRelativeURLs( '<head><script src="/assets/js/main.js"/></head>' ) ).to.eql( ['/assets/js/main.js'] );
    });

    it( 'Should return multiple relative urls given a longer HTML string', () => {
        expect( getRelativeURLs( '<head><link rel="stylesheet" type="text/css" href="mystyle.css"><script src="/assets/js/main.js"/></head>' ) ).to.eql( ['/mystyle.css', '/assets/js/main.js'] );
    });

    it( 'Should return a empty array given no relative links', () => {
        expect( getRelativeURLs( '<head><script src="https://website.com/assets/js/main.js"/></head>' ) ).to.eql( [] );
    });

    it( 'Should return a empty array a blank string', () => {
        expect( getRelativeURLs( '' ) ).to.eql( [] );
    });

    it( 'Should return a empty array a invalid type', () => {
        expect( getRelativeURLs( 15 ) ).to.eql( [] );
    });

    it( 'Should return a type of string[]', () => {
        expect( Array.isArray(getRelativeURLs( '<head><script src="/assets/js/main.js"/></head>' )) ).to.equal( true );
    });
});
