// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-176
description: >
    Object.defineProperties - 'O' is an Array, 'P' is the length
    property of 'O', the [[Value]] field of 'desc' is less than value
    of  the length property, test the [[Writable]] attribute of the
    length property is set to false at last when the [[Writable]]
    field of 'desc' is false and 'O' contains non-configurable large
    index named property (15.4.5.1 step 3.l.iii.2)
includes: [propertyHelper.js]
---*/


var arr = [0, 1];

try {
    Object.defineProperty(arr, "1", {
        configurable: false
    });

    Object.defineProperties(arr, {
        length: {
            value: 1,
            writable: false
        }
    });

    $ERROR("Expected to throw TypeError");
} catch (e) {
    assert(e instanceof TypeError);
    assert(arr.hasOwnProperty("1"));
    verifyNotWritable(arr, "length");
    assert.sameValue(arr[0], 0);
    assert.sameValue(arr[1], 1);
    assert.sameValue(arr.length, 2)
}

