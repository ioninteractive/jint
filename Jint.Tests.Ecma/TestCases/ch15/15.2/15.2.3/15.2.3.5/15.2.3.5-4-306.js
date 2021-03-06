/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-306.js
 * @description Object.create - [[Value]] is set as undefined if it is absent in data descriptor of one property in 'Properties' (8.12.9 step 4.a.i)
 */


function testcase() {

        try {
            var newObj = Object.create({}, {
                prop: {
                    writable: true,
                    configurable: true,
                    enumerable: true
                }
            });
            return newObj.hasOwnProperty("prop") && newObj.prop === undefined;
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);
