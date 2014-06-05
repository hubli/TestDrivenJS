/**
 * 断言
 *
 * @param {String} exception message
 * @param {Boolean}  test conditions
 * @return {Boolean} test results*/
function assert(message, expr){
	if(!expr){
		throw new Error(message);
	}

	assert.count++;
	return true;
}

// 测试成功计数器
assert.count = 0;

/**
 * 带颜色的测试结果输出
 *
 * @param {String} output messages
 * @param {String} output text color
 */
function output(text, color) {
	try{
		console.log("%c" + text, "color:" + color);
	}catch(e){
		var p = document.createElement("p");
		p.innerHTML = text;
		p.style.color = color;
		document.body.appendChild(p);
	}	
}

/**
 * 测试用例
 *
 * @param {String} test name
 * @param {Object} test function
 */
function testCase(name, tests) {
	assert.count = 0;
	var successful = 0,
		testCount = 0,
		hasSetup = typeof tests.setUp == "function",
		hasTeardown = typeof tests.tearDown == "function";

	hasSetup && tests.setUp();	
	for(var test in tests) {
		if(!/^test/.test(test)){
			continue;
		}
		testCount++;
		try{
			tests[test]();
			output(test, "#0c0");
			successful++;
		}catch(e){
			output(test + " failed: " + e.message, "#c00");
		}
	}
	hasTeardown && tests.tearDown();

	var color = successful == testCount ? "#0c0" : "#c00";
	output("==total==: " + testCount + " tests,"+ (testCount - successful) + " failures", color);	
}
