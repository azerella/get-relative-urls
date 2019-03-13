const getRelativeURLs = require( './index.js' );
const { expect } = require('chai');

describe( 'getRelativeURLs()', () => {
    it( 'Should return a relative url given a HTML string', () => {
        expect( getRelativeURLs( '<head><script src="/assets/js/main.js"/></head>' ) ).to.eql( ['/assets/js/main.js'] );
    });

    it( 'Should return a empty array given no relative links', () => {
        expect( getRelativeURLs( '<head><script src="https://website.com/assets/js/main.js"/></head>' ) ).to.eql( [] );
    });

    it( 'Should return a type of string[]', () => {
        expect( Array.isArray(getRelativeURLs( '<head><script src="/assets/js/main.js"/></head>' )) ).to.equal( true );
    });
});