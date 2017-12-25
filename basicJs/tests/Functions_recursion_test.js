QUnit.test("Is 54 even number_ok", function(assert){
    assert.ok(isEven(54), "Passed!");
});

QUnit.test("Is 75 even number_noOk", function(assert){
    assert.notOk(isEven(75), "Passed!");
});

QUnit.test("Is -1 even number_!ok", function(assert){
    assert.ok(!isEven(-1), "Passed!");
});