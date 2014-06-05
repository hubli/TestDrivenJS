// YUI Test
YUI({
	combine: true,
	timeout: 1000
}).use("node", "console", "test", function(Y) {
	var assert = Y.Assert;

	var strftimeTestCase = new Y.Test.Case({
		name: "Date.prototype.strftime Tests",
		setUp: function() {
			this.date = new Date(2009, 0, 5);
		},
		"test %Y should return full year": function() {
			var year = Date.formats.Y(this.date);
			assert.isNumber(year);
			assert.areEqual(2009, year);
		}
	});

	var r = new Y.Console({
		newestOnTop: false,
		style: "block"
	});

	r.render("#testReport");
	Y.Test.Runner.add(strftimeTestCase);
	Y.Test.Runner.run();
})

/*
testCase("strftime test", {
	"setUp": function() {
		this.date = new Date(2009, 0, 5);

	},
	"test format specifier %Y": function() {
		assert("%Y should return full year", 
		Date.formats.Y(this.date) === 2009);
	},
	"test format specifier %m": function() {
		assert("%m should return month",
		Date.formats.m(this.date) === "01");
	},
	"test format specifier %d": function() {
		assert("%d should return date", 
		Date.formats.d(this.date) === "05");
	},
	"test format specifier %y": function() {
		assert("%y should return year as two digits",
		Date.formats.y(this.date) === "09");
	},
	"test format specifier %j": function() {
		assert("%j should return day of the year",
		Date.formats.j(this.date) === 5);
	},
	"test format shorthand %F": function() {
		assert("%F should be shortcut %Y-%m-%d", 
		Date.formats.F === "%Y-%m-%d");
	},
	"test format shorthand %D": function() {
		assert("%D should be shortcut %m/%d/%y", 
		Date.formats.D === "%m/%d/%y");
	}
});*/

