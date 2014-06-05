/**
 * 格式化日期
 * 
 * @return Funtion
 */
Date.prototype.strftime = (function() {
	function strftime(format) {
		var date = this;

		return (format + "").replace(/%([a-zA-z])/g, function(m, f) {
			var formatter = Date.formats && Date.formats[f];
			if(typeof formatter == "function") {
				return formatter.call(Date.formats, date);
			}else if(typeof formatter == "string") {
				return date.strftime(formatter);
			}
			return f;
		});
	}

	function zeroPad(num) {
		return (+num < 10 ? "0" : "") + num;
	}

	Date.formats = {
		d:function(date) {
			return zeroPad(date.getDate());
		},

		m:function(date) {
			return zeroPad(date.getMonth() + 1);
		},

		y:function(date) {
			return zeroPad(date.getYear() % 100);
		},

		Y:function(date) {
			return date.getFullYear();
		},

		j:function(date) {
			var base = new Date(date.getFullYear(), 0, 0),
				diff = date.getTime() - base.getTime();
			return Math.ceil(diff / (60*60*24*1000));
		},

		F: "%Y-%m-%d",
		D: "%m/%d/%y"
	};

	return strftime;

}());