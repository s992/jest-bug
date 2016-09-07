const link = require("../src/link");

describe("link", () => {

	it("should diff the snapshot", () => {
		expect( link("www.google.com", "google") ).toMatchSnapshot();
	});

});