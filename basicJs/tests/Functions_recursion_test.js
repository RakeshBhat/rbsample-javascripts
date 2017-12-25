QUnit.test("Is 54 even number", function(assert){
    assert.ok(isEven(54), "Passed!");
});

QUnit.test("Is 75 even number", function(assert){
    assert.ok(!isEven(75), "Passed!");
});

QUnit.test("Is -1 even number", function(assert){
    assert.ok(!isEven(-1), "Passed!");
});