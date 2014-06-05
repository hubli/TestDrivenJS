
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
});

