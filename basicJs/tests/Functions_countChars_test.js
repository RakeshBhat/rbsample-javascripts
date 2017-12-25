QUnit.test("countChar, whalewaswet_equal", function(assert){
    assert.equal(countChar("whalewaswet", "w"), 3);
});

QUnit.test("countChar, helloFellow_equal", function(assert){
    assert.equal(countChar("helloFellow", "l"), 4, "equal char count");
});

QUnit.test("countChar, helloFellow_notEqual", function(assert){
    assert.notEqual(countChar("helloFellow", "e"), 1, "not equal char count");
});