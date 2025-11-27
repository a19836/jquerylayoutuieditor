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

(function(){
//avoids this file to give an error if called twice.
if (typeof MyJSLib == "function")
	return;

/****************************************************************************************
 *				 START: CORE FUNCTIONS 					*
 ****************************************************************************************/
var MyJSLib = window.MyJSLib = function() {
	return new MyJSLib.fn.init();
};

MyJSLib.fn = MyJSLib.prototype = {
	init: function() {
		return this;
	},
	
	toString: Object.prototype.toString,
	
	isFunction: function(obj) {
		return this.toString.call(obj) === "[object Function]";
	},

	isString: function(obj) {
		return this.toString.call(obj) == "[object String]";
	},
	
	//Simulates the jquery function: $.isArray(obj);
	isArray: function(obj) {
		//return this.toString.call(obj) == "[object Array]";
		return (typeof Array.isArray == "function" && Array.isArray(obj)) || Object.prototype.toString.call(obj) === '[object Array]';
	},
	
	//Simulates the jquery function: $.isPlainObject(obj); Copied from jquery 3.6.0
	isPlainObject: function(obj) {
		//defined some jquery global vars
		var getProto = Object.getPrototypeOf;
		var class2type = {};
		var toString = class2type.toString;
		var hasOwn = class2type.hasOwnProperty;
		var fnToString = hasOwn.toString;
		var ObjectFunctionString = fnToString.call( Object );
		
		//code from isPlainObject in jquery 3.6.0
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},
	
	isjQuery: function(node) {
		return node && typeof jQuery != "undefined" && node instanceof jQuery;
	},
	
	each: function(obj, handler) {
		if (this.isArray(obj) || NodeList.prototype.isPrototypeOf(obj) || HTMLCollection.prototype.isPrototypeOf(obj)) {
			for (var i = 0, t = obj.length; i < t; i++)
				if (handler(i, obj[i]) === false)
					break;
			
			return true;
		}
		else if (this.isPlainObject(obj)) {
			for (var k in obj)
				if (handler(k, obj[k]) === false)
					break;
		
			return true;
		}
		
		return false;
	},
	
	getNativeNode: function(node) {
		return this.isjQuery(node) ? node[0] : node;
	},
	
	test: "test works!",
	
	//TODO: core functions
};

MyJSLib.fn.init.prototype = MyJSLib.fn;
/****************************************************************************************
 *				 END: CORE FUNCTIONS 					*
 ****************************************************************************************/

/****************************************************************************************
 *				 START: FORM HANDLER 					*
 ****************************************************************************************/
MyJSLib.FormHandler = MyJSLib.fn.FormHandler = ({
	
	messages: {
		"empty_form_object": "Empty form object detected!",
		"undefined_field": "Field '#label#' cannot be blank.",
		"invalid_field_type": "Invalid #validation_type# format in '#label#'.",
		"field_min_length": "Length of '#label#' cannot be less than #min_length# characters.",
		"field_max_length": "Length of '#label#' cannot be more than #max_length# characters.",
		"field_min_value": "Value of '#label#' cannot be less than #min_value#.",
		"field_max_value": "Value of '#label#' cannot be great than #max_value#.",
		"mandatory_checkbox": "Please checked the field '#label#'.",
		"field_min_words": "Value of '#label#' need to have more than #min_words# word(s).",
		"field_max_words": "Value of '#label#' need to have less than #max_words# word(s).",
		"confirmation": "Do you want continue?",
		"system_error": "System error. Please contact the system administrator!",
		
		"int": "int",
		"bigint": "bigint",
		"number": "number",
		"double": "double",
		"float": "float",
		"decimal": "decimal",
		"phone": "phone",
		"fax": "fax",
		"email": "email",
		"domain": "domain",
		"date": "date",
		"datetime": "datetime",
		"timestamp": "timestamp",
		"time": "time",
		"ipaddress": "ipaddress",
		"smallint": "smallint",
		"tinyint": "tinyint",
		"filename": "filename",
	},
	
	initForm: function(cform) {
		if (cform) {
			cform = MyJSLib.fn.getNativeNode(cform);
			var btns = cform.querySelectorAll("input[type=submit], button[type=submit]");
			
			MyJSLib.fn.each(btns, function(idx, btn) {
				if (btn.getAttribute("is-data-clicked-inited") != 1) {
					btn.setAttribute("is-data-clicked-inited", 1);
					
					btn.addEventListener("click", function() {
						MyJSLib.fn.each(btns, function(idy, other_btn) {
							if (other_btn && other_btn.parentNode)
								other_btn.removeAttribute("data-clicked");
						});
						
						this.setAttribute("data-clicked", "1");
					});
				}
			});
		}
	},
	
	getFormElements: function(cform) {
		if (cform) {
			if (cform.nodeName.toLowerCase() == "form")
				return cform.elements;
			else
				return cform.querySelectorAll("input, select, textarea, button");
		}
		
		return [];
	},
	
	formCheck: function(cform) {
		if(!cform) {
			alert(MyJSLib.FormHandler.messages["empty_form_object"]);
			return false;
		}
		
		var elements = this.getFormElements(cform);
		var attrs = this.getFormElementsChecks(elements);
		
		//gets the second argument of this function
		var oncheckfunction = arguments.length > 1 && arguments[1] ? arguments[1] : this.onFormCheck;
		
		if(oncheckfunction && MyJSLib.fn.isFunction(oncheckfunction))
			return oncheckfunction(cform, attrs);
		
		return true;
	},
	
	formElementsCheck: function(elements) {
		var attrs = this.getFormElementsChecks(elements);
		
		//gets the second argument of this function
		var oncheckfunction = arguments.length > 1 && arguments[1] ? arguments[1] : this.onFormCheck;
		
		if(oncheckfunction && MyJSLib.fn.isFunction(oncheckfunction))
			return oncheckfunction(null, attrs);
		
		return true;
	},
	
	getFormElementsChecks: function(elements) {
		var confirm_element = false;
		var errors = 0;
		var wrong_elms = new Array();
		var message_exists = false;
		
		var elm, sub_elm, type, name, value, value_aux, checked, sub_checked, validation_label, validation_message, allow_null, allow_javascript, validation_type, validation_regex, validation_func, min_length, max_length, min_value, max_value, mandatory_checkbox, min_words, max_words, error_message, aux;
		
		for(var i = 0, t = elements.length; i < t; i++) {
			elm = elements[i];
			type = elm.type;
			name = elm.name;
			
			if(type == "select")
				value = elm.options[elm.selectedIndex] ? elm.options[elm.selectedIndex].value : false;
			else
				value = elm.value;
			
			if(type == 'submit' && (elm.getAttribute('data-confirmation') == "1" || elm.getAttribute('confirmation') == "1") && elm.getAttribute("data-clicked") == "1") {
				confirm_element = elm;
				break;
			}
			else {
				checked = elm.checked ? elm.checked : elm.getAttribute('checked');
				validation_label = elm.hasAttribute('data-validation-label') ? elm.getAttribute('data-validation-label') : elm.getAttribute('validationlabel');
				validation_message = elm.hasAttribute('data-validation-message') ? elm.getAttribute('data-validation-message') : elm.getAttribute('validationmessage');
				allow_null = elm.hasAttribute('data-allow-null') ? elm.getAttribute('data-allow-null') : elm.getAttribute('allownull');
				allow_javascript = elm.hasAttribute('data-allow-javascript') ? elm.getAttribute('data-allow-javascript') : elm.getAttribute('allowjavascript');
				validation_type = elm.hasAttribute('data-validation-type') ? elm.getAttribute('data-validation-type') : elm.getAttribute('validationtype');
				validation_regex = elm.hasAttribute('data-validation-regex') ? elm.getAttribute('data-validation-regex') : elm.getAttribute('validationregex');
				validation_func = elm.hasAttribute('data-validation-func') ? elm.getAttribute('data-validation-func') : elm.getAttribute('validationfunc');
				min_length = parseInt(elm.getAttribute('minlength'));
				max_length = parseInt(elm.getAttribute('maxlength'));
				min_value = elm.getAttribute('min');
				min_value = min_value && ("" + min_value).indexOf(".") != -1 ? parseFloat(min_value) : parseInt(min_value);
				max_value = elm.getAttribute('max');
				max_value = max_value && ("" + max_value).indexOf(".") != -1 ? parseFloat(max_value) : parseInt(max_value);
				mandatory_checkbox = elm.hasAttribute('data-mandatory-checkbox') ? elm.getAttribute('data-mandatory-checkbox') : elm.getAttribute('mandatorycheckbox');
				min_words = parseInt(elm.hasAttribute('data-min-words') ? elm.getAttribute('data-min-words') : elm.getAttribute('minwords'));
				max_words = parseInt(elm.hasAttribute('data-max-words') ? elm.getAttribute('data-max-words') : elm.getAttribute('maxwords'));
				
				checked = checked && checked != 'false' && checked != '0';
				validation_label = validation_label ? validation_label : (name ? name.replace(/_/gi," ").toUpperCase() : "");
				allow_null = ("" + allow_null).length && (("" + allow_null).toLowerCase() == 'false' || allow_null == '0') ? false : true;
				allow_javascript = ("" + allow_javascript).length && (("" + allow_javascript).toLowerCase() == 'true' || allow_javascript == '1') ? true : false;
				mandatory_checkbox = mandatory_checkbox && mandatory_checkbox != 'false' && mandatory_checkbox != '0';
				
				message_exists = false;
				error_message = "";
				aux = false;
				
				// 0. NULL CONTROL
				if(!allow_null) {
					value_aux = value ? value.toString().replace(/ /g, "") : false;
					
					var is_null = !value_aux || value_aux == '' || ((type == "checkbox" || type == "radio") && !checked);
					
					//check if null applies to multiple radio buttons
					if (is_null && (type == "checkbox" || type == "radio") && !checked) {
						for (var j = 0; j < t; j++) 
							if (j != i) {
								sub_elm = elements[j];
								
								if (sub_elm.type == type && sub_elm.name == name) {
									sub_checked = sub_elm.checked ? sub_elm.checked : sub_elm.getAttribute('checked');
									sub_checked = sub_checked && sub_checked != 'false' && sub_checked != '0';
									
									if (sub_checked) {
										is_null = false;
										break;
									}
								}
							}
					}
					
					if(is_null) {
						if(!message_exists) {
							errors++;
						
							if(validation_message) {
								error_message = validation_message;
								message_exists = true;
							}
							else
								error_message = this.messages["undefined_field"].replace("#label#", validation_label);
							
							wrong_elms.push({"element" : elm, "error" : "allow_null", "message" : error_message});
						}
					}		
				}
				// END OF NULL CONTROL
	
				// 1. JAVASCRIPT CONTROL
				if(!allow_javascript && value.toString().indexOf("<script") != -1) {
					if(!message_exists) {
						errors++;
					
						if(validation_message) {
							error_message = validation_message;
							message_exists = true;
						}
						else
							error_message = this.messages["undefined_field"].replace("#label#", validation_label);
						
						wrong_elms.push({"element" : elm, "error" : "allow_javascript", "message" : error_message});
					}		
				}
				// END OF JAVASCRIPT CONTROL
	
				// 2. TYPE CONTROL
				if((validation_type || validation_regex || validation_func) && value && !this.inputCheck(value, validation_type, validation_regex, validation_func)) {
					if(!message_exists) {
						errors++;
					
						if(validation_message) {
							error_message = validation_message;
							message_exists = true;
						}
						else 
							error_message = this.messages["invalid_field_type"].replace("#label#", validation_label).replace("#validation_type#", this.messages.hasOwnProperty(validation_type) ? this.messages[validation_type] : (validation_type ? validation_type : ""));
						
						wrong_elms.push({"element" : elm, "error" : "validation_type", "message" : error_message});
					}
				}
				// END OF TYPE CONTROL


				// 3. MIN/MAX LENGTH CONTROL
				if(min_length && value && value.length < min_length) {
					if(!message_exists) {
						errors++;
					
						if(validation_message) {
							error_message = validation_message;
							message_exists = true;
						}
						else
							error_message = this.messages["field_min_length"].replace("#label#", validation_label).replace("#min_length#", min_length);
						
						wrong_elms.push({"element" : elm, "error" : "min_length", "message" : error_message});
					}
				}

				if(max_length && value && value.length > max_length) {
					if(!message_exists) {
						errors++;
					
						if(validation_message) {
							error_message = validation_message;
							message_exists = true;
						}
						else
							error_message = this.messages["field_max_length"].replace("#label#", validation_label).replace("#max_length#", max_length);
						
						wrong_elms.push({"element" : elm, "error" : "max_length", "message" : error_message});
					}
				}
				// END OF LENGTH CONTROL
	

				// 4. MIN/MAX VALUE CONTROL FOR NUMBERS
				if(min_value && value && value < min_value) {
					if(!message_exists) {
						errors++;
					
						if(validation_message) {
							error_message = validation_message;
							message_exists = true;
						}
						else 
							error_message = this.messages["field_min_value"].replace("#label#", validation_label).replace("#min_value#", min_value);
						
						wrong_elms.push({"element" : elm, "error" : "min_value", "message" : error_message});
					}
				}

				if(max_value && value && value > max_value) {
					if(!message_exists) {
						errors++;
					
						if(validation_message) {
							error_message = validation_message;
							message_exists = true;
						}
						else
							error_message = this.messages["field_max_value"].replace("#label#", validation_label).replace("#max_value#", max_value);
						
						wrong_elms.push({"element" : elm, "error" : "max_value", "message" : error_message});
					}
				}
				// END OF MIN/MAX VALUE CONTROL


				// 5. CHECK MANDATORY CHECKBOX
				if(mandatory_checkbox && !checked) {
					if(!message_exists) {
						errors++;
					
						if(validation_message) {
							error_message = validation_message;
							message_exists = true;
						}
						else
							error_message = this.messages["mandatory_checkbox"].replace("#label#", validation_label);
						
						wrong_elms.push({"element" : elm, "error" : "mandatory_checkbox", "message" : error_message});
					}
				}
				// END CHECK MANDATORY CHECKBOX
		

				// 6. MIN NUMBER OF WORDS
				if(min_words && min_words >= 0 && value) {
					aux = this.strCountValue(value);
					if(aux < min_words) {
						if(!message_exists) {
							errors++;
						
							if(validation_message) {
								error_message = validation_message;
								message_exists = true;
							}
							else 
								error_message = this.messages["field_min_words"].replace("#label#", validation_label).replace("#min_words#", min_words);
							
							wrong_elms.push({"element" : elm, "error" : "min_words", "message" : error_message});
						}
					}
				}
				// END MIN NUMBER OF WORDS


				// 7. MAX NUMBER OF WORDS
				if(max_words && max_words >= 0 && value) {
					aux = this.strCountValue(value);
					if(aux > max_words) {
						if(!message_exists) {
							errors++;
						
							if(validation_message) {
								error_message = validation_message;
								message_exists = true;
							}
							else
								error_message = this.messages["field_max_words"].replace("#label#", validation_label).replace("#max_words#", max_words);
							
							wrong_elms.push({"element" : elm, "error" : "max_words", "message" : error_message});
						}
					}
				}
				// END MAX NUMBER OF WORDS

			}
		} // END OF THE FOR LOOP
		
		return {"errors" : errors, "confirm_element" : confirm_element, "wrong_elms" : wrong_elms};
	},
	
	onFormCheck: function(cform, attrs) {
		var errors = attrs.errors;
		var confirm_element = attrs.confirm_element;
		
		if (errors == 0) {
			if (confirm_element && (confirm_element.getAttribute('data-confirmation') == "1" || confirm_element.getAttribute('confirmation'))) {
				confirm_element.confirmation = false;
				
				var confirm_message = confirm_element.getAttribute('data-confirmation-message') ? confirm_element.getAttribute('data-confirmation-message') : (
					confirm_element.getAttribute('confirmationmessage') ? confirm_element.getAttribute('confirmationmessage') : MyJSLib.FormHandler.messages["confirmation"]
				);
				
				if (confirm(confirm_message) == true)
					return true;
				else 
					return false;
			}
			else 
				return true;
		}
		else {
			var message = MyJSLib.FormHandler.getFormErrorMessage(attrs);
			
			if (message)
				alert(message);
			
			return false;
		}
		
		return false;
	},
	
	getFormErrorMessage: function(attrs) {
		var errors = attrs.errors;
		var message = "";//"Please check the following input(s): \n";
		
		if (errors > 0) {
			var repeated_messages = new Array();
			var wrong_elms = attrs.wrong_elms;
			var elm;
			
			for (var i = 0, t = wrong_elms.length; i < t; ++i) {
				elm = wrong_elms[i];
				
				if (elm.message && repeated_messages.indexOf(elm.message) == -1) {
					message += /*"- " + */elm.message + "\n";
					
					repeated_messages.push(elm.message);
				}
			}
		}
		
		return message;
	},

	inputCheck: function(input, type, regex, func)  {
		var expression;

		if(type == 'int' || type == 'bigint' || type == 'number')
			expression	= /^-*\d+$/;
		else if(type == 'double' || type == 'float' || type == 'decimal')
			expression	= /(^-*\d+$)|(^-*\d+\.\d+$)|(^\.\d+$)/;
		else if(type == 'phone' || type == 'fax')
			expression	= /(^(\+|)[0-9 ]+$)|(^\+\d+$)|(^\d+$)|(^\+)(\d*\-\d*\-\d*$)|(\d*\-\d*\-\d*$)/;
		else {
			switch(type) {
				case 'email':
					expression	= /^([a-z0-9\+\-\_\.]+)\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,10})(\]?)$/i;
					break;
				case 'domain':
					expression	= /^([a-z0-9-_]+\.)*[a-z0-9][a-z0-9-_]+\.[a-z]{2,}$/i;
					break;
				case 'date':
					expression	= /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})$/;
					break;
				case 'datetime':
				case 'timestamp':
					expression	= /^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(([ T]{1})([0-9]{1,2}):([0-9]{1,2})(:([0-9]{1,2}))?)?$/;
					break;
				case 'time':
					expression	= /^([0-9]{1,2}):([0-9]{1,2})(:([0-9]{1,2}))?$/;
					break;
				case 'ipaddress':
					expression	= /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
					break;
				case 'smallint':
					expression	= /^[0-9]{1,5}$/;
					break;
				case 'tinyint':
					expression	= /^[0,1]{1}$/;
					break;
				case 'filename':
					//expression	= /^[a-z0-9\-\_\.]+$/i;
					//expression	= /^([\p{L}\w \-\+\.]+$)/gu; //'\w' means all words with '_' and '/u' means with accents and ç too. Cannot use this bc it does not work in IE.
					expression	= /^([\w\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u024F\u1EBD\u1EBC \-\+\.]+$)/g; //'\w' means all words with '_' and 'u' means with accents and ç too.
					break;
				default:
					expression	= "";
			}
		}
		
		var status = expression == '' || !expression || expression.test(input);
		
		if (status && regex && typeof regex != "undefined") {
			var parts = regex.split("/");
			var pattern, flags = "";
			
			if (parts.length >= 3) {
				pattern = parts[1];
				flags = parts[2];
			}
			else
				pattern = regex;
			
			expression = new RegExp(pattern, flags); 
			status = expression.test(input);
			//console.log(pattern+", "+flags+":"+expression.test(input));
		}
		
		if (status && func) {
			//starts with a letter or underscore and doesn't have invalid chars
			if (typeof func == "string" && !func.match(/[^\w\.]/) && func.match(/^[a-zA-Z_]/)) { 
				try {
					eval('func = ' + func + ';');
				}
				catch(e) {}
			}
			
			if (typeof func == "function")
				status = func(input, type, regex);
		}
		
		return status;
	},

	strCountValue: function(value) {
		var value_splited = value.split(" ");
		var counter = 0;
		for(j = 0; j < value_splited.length; j++)
			if(value_splited[j])
				++counter;
		return counter;
	},

	checkAndSubmitForm: function(form, options) {
		var cform;
		if (MyJSLib.fn.isString(form)) {
			eval("cform = document." + form + ";");
		
			if (!cform)
				cform = document.getElementById(form);
			
			if (!cform && MyJSLib.fn.isjQuery(form))
				cform = form[0];
			else if (!cform && typeof form == "string")
				cform = document.querySelector(form);
			
			if (!cform && typeof $ == "function")
				cform = $(form)[0];
		}
		else
			cform = form;
		
		if (!cform || cform.nodeName.toLowerCase() != "form") {
			var msg = "ERROR: cform is not a form object, so we cannot call the .submit() function!";
			alert(msg);
			throw msg;
			
			return false;
		}
		
		var oncheck_func = options && options.oncheck_func ? options.oncheck_func : false;
		
		if(cform && this.formCheck(cform, oncheck_func)) {
			var status = true;
			if(options && MyJSLib.fn.isFunction(options.callfront_func))
				status = options.callfront_func(cform);
			
			if(status) {
				cform.submit();
				
				return true;
			}
		}
		
		return false;
	},
});
/****************************************************************************************
 *				 END: FORM HANDLER 					*
 ****************************************************************************************/

})();
