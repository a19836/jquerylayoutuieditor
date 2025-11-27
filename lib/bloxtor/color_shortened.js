/*
 * Copyright (c) 2025 Bloxtor (http://bloxtor.com) and Joao Pinto (http://jplpinto.com)
 * 
 * Multi-licensed: BSD 3-Clause | Apache 2.0 | GNU LGPL v3 | HLNC License (http://bloxtor.com/LICENSE_HLNC.md)
 * Choose one license that best fits your needs.
 *
 * Original Bloxtor Repo: https://github.com/a19836/bloxtor
 *
 * YOU ARE NOT AUTHORIZED TO MODIFY OR REMOVE ANY PART OF THIS NOTICE!
 */

if(typeof hexToRgb !== 'function') {
	//console.log( hexToRgb("#0033ff") ); // {r: 0, g: 51, b: 255};
	//console.log( hexToRgb("#03f") ); // {r: 0, g: 51, b: 255};
	//console.log( hexToRgb("#03faa") ); // {r: 0, g: 51, b: 255, a: 0.667};
	//console.log( hexToRgb("#ff0000aa") ); // {r: 255, g: 0, b: 0, a: 0.667};
	function hexToRgb(hex) {
	    	if (hex.substr(0, 1) != "#")
	    		hex = "#" + hex;
	    	
	    	//Expand shorthand form (e.g. "#03F") to full form (e.g. "#0033FF")
		if (hex.length == 4) {
			var shorthandRegex = /^#([a-f\d])([a-f\d])([a-f\d])$/i;
			
			hex = hex.replace(shorthandRegex, function(m, r, g, b) {
				return "#" + r + r + g + g + b + b;
		    	});
	    	}
	    	
	    	//Expand shorthand form (e.g. "#03Faa") to full form (e.g. "#0033FFaa")
		if (hex.length == 6) {
			var shorthandRegex = /^#([a-f\d])([a-f\d])([a-f\d])([a-f\d])([a-f\d])$/i;
			
			hex = hex.replace(shorthandRegex, function(m, r, g, b, z, x) {
				return "#" + r + r + g + g + b + b + z + x;
		    	});
		}
		
		//in case opacity exists: #0033FFaa
		if (hex.length == 9) {
			var result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
			var opacity = "0x" + result[4];
			opacity = +(opacity / 255).toFixed(3);
			
			return result ? {
				r: parseInt(result[1], 16),
				g: parseInt(result[2], 16),
				b: parseInt(result[3], 16),
				a: opacity
		    	} : null;
		}
		
		//in case of #0033FF
	    	var result = /^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		
	    	return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
	    	} : null;
	}
}

if(typeof rgbToHex !== 'function') {
	function componentToHex(c) {
		var hex = parseInt(c).toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}

	//console.log("rgbToHex(0, 51, 255) => " + rgbToHex(0, 51, 255) ); // #0033ff
	//console.log("rgbToHex(0, 51, 255, .5) => " + rgbToHex(0, 51, 255, .5) ); // #0033ff80
	//console.log("rgbToHex(0, 51, 255, 40%) => " + rgbToHex(0, 51, 255, "40%") ); // #0033ff66
	function rgbToHex(r, g, b, a) {
		var opacity = "";
		
		if (typeof a != undefined && a != null) {
			if (("" + a).indexOf("%") != -1) //in case the a is a percentage
     			a = a.substr(0, a.length - 1) / 100;
			
			//convert a value to letters
			opacity = Math.round(a * 255).toString(16);
			
			if (opacity.length == 1)
	    			opacity = "0" + opacity;
		}
		
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b) + opacity;
	}
}

if(typeof colorRgbToHex !== 'function') {
	//alert( colorRgbToHex("rgb(0, 51, 255)") ); // #0033ff
	function colorRgbToHex(color) {
		var m = color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
		
		if (!m)
			m = color.match(/^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]+(\.[0-9]*)?|\.[0-9]+)\s*)?\)$/i);
		
		if (m)
			return rgbToHex(m[1], m[2], m[3], m[5]);
	}
}

if(typeof colorHexToRgb !== 'function') {
	//alert( colorHexToRgb("#0033ff") ); // rgb(0, 51, 255)
	function colorHexToRgb(color) {
		var rgb = hexToRgb(color);
		
		if (rgb) {
			if (rgb.length == 4)
				return "rgba(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ", " + rgb[3] + ")";
			
			return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
		}
	}
}


//Leave this code here, because is adding the TRIM function to the IE browsers. Otherwise the browser gives errors.
if(typeof String.prototype.trim !== 'function') {
  String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, ''); 
  }
}

