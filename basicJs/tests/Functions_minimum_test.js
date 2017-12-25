QUnit.test("test minimum: 4 < 9", function(assert){
    assert.ok(isMinimum(4,9), "Passed!");
});

QUnit.test("test minimum 19 !< 9", function(assert){
    assert.ok(!isMinimum(19,9), "Passed!");
});

