// Suite
describe("Add Suite",function(){
	// Test Case
	it("Should add two integers",function(){
		
		var x = 100;
		var y = 200;
		var result = add(x,y);
		expect(300).toBe(result);
	});
	it("should add two string style integers",function(){
		var x= "100";
		var y = "200";
		var result = add(x,y);
		expect(300).toBe(result);
	})
})