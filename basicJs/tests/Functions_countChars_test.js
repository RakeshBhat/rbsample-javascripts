QUnit.test("countChar, whalewaswet", function(assert){
    assert.equal(countChar("whalewaswet", "w"), 3);
});

QUnit.test("countChar, helloFellow", function(assert){
    assert.equal(countChar("helloFellow", "l"), 4, "equal char count");
});