QUnit.test("minimum, 4 < 9_ok", function(assert){
    assert.ok(isMinimum(4,9), "Passed!");
});

QUnit.test("minimum, 19 !< 9_notOk", function(assert){
    assert.notOk(isMinimum(19,9), "Passed!");
});

