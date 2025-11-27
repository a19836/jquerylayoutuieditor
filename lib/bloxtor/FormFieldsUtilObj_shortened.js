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

var FormFieldsUtilObj = {
	
	getFieldInputSettingsHtml : function(prefix, data) {
		data = $.isEmptyObject(data) ? {} : data;
		
		var input_type = data["type"];
		var input_name = data["name"];
		var input_class = data["class"];
		var input_value = data["value"];
		var input_place_holder = data["place_holder"];
		var input_href = data["href"];
		var input_target = data["target"];
		var input_src = data["src"];
		var input_title = data["title"];
		var input_previous_html = data["previous_html"];
		var input_next_html = data["next_html"];
		var input_extra_attributes = data["extra_attributes"];
		var input_available_values = data["available_values"];
		var input_options = data["options"];
		
		var confirmation = data["confirmation"];
		var validation_label = data["validation_label"];
		var validation_message = data["validation_message"];
		var allow_null = data["allow_null"];
		var allow_javascript = data["allow_javascript"];
		var confirmation_message = data["confirmation_message"];
		var validation_type = data["validation_type"];
		var validation_regex = data["validation_regex"];
		var validation_func = data["validation_func"];
		var min_length = data["min_length"];
		var max_length = data["max_length"];
		var min_value = data["min_value"];
		var max_value = data["max_value"];
		var min_words = data["min_words"];
		var max_words = data["max_words"];
		
		input_name = typeof input_name != "undefined" && input_name != null ? ("" + input_name).replace(/"/g, "&quot;") : "";
		input_class = typeof input_class != "undefined" && input_class != null ? ("" + input_class).replace(/"/g, "&quot;") : "";
		input_value = typeof input_value != "undefined" && input_value != null ? ("" + input_value).replace(/"/g, "&quot;") : "";
		input_place_holder = typeof input_place_holder != "undefined" && input_place_holder != null ? ("" + input_place_holder).replace(/"/g, "&quot;") : "";
		input_href = typeof input_href != "undefined" && input_href != null ? ("" + input_href).replace(/"/g, "&quot;") : "";
		input_target = typeof input_target != "undefined" && input_target != null ? ("" + input_target).replace(/"/g, "&quot;") : "";
		input_src = typeof input_src != "undefined" && input_src != null ? ("" + input_src).replace(/"/g, "&quot;") : "";
		input_title = typeof input_title != "undefined" && input_title != null ? ("" + input_title).replace(/"/g, "&quot;") : "";
		input_previous_html = typeof input_previous_html != "undefined" && input_previous_html != null ? ("" + input_previous_html).replace(/"/g, "&quot;") : "";
		input_next_html = typeof input_next_html != "undefined" && input_next_html != null ? ("" + input_next_html).replace(/"/g, "&quot;") : "";
		
		//This part with the extra_attributes must happen after the prefix
		var input_extra_attributes_type = $.isPlainObject(input_extra_attributes) || $.isArray(input_extra_attributes) || !input_extra_attributes ? "array" : (("" + input_extra_attributes).trim().charAt(0) == '$' ? "variable" : "string");
		var input_extra_attributes_array = this.prepareInputFieldExtraAttributes(prefix + "[extra_attributes]", input_extra_attributes_type == "array" ? input_extra_attributes : null);
		var input_extra_attributes_variable = input_extra_attributes_type == "variable" && input_extra_attributes ? ("" + input_extra_attributes).replace(/"/g, "&quot;") : "";
		var input_extra_attributes_string = input_extra_attributes_type == "string" && input_extra_attributes ? input_extra_attributes : "";
		
		//This part with the available_values must happen after the prefix
		var input_available_values_type = $.isPlainObject(input_available_values) || $.isArray(input_available_values) || !input_available_values ? "array" : (("" + input_available_values).trim().charAt(0) == '$' ? "variable" : "string");
		var input_available_values_array = this.prepareInputFieldAvailableValues(prefix + "[available_values]", input_available_values_type == "array" ? input_available_values : null);
		var input_available_values_variable = input_available_values_type == "variable" && input_available_values ? ("" + input_available_values).replace(/"/g, "&quot;") : "";
		var input_available_values_string = input_available_values_type == "string" && input_available_values ? input_available_values : "";
		
		//This part with the options must happen after the prefix
		var input_options_type = $.isPlainObject(input_options) || $.isArray(input_options) || !input_options ? "array" : (("" + input_options).trim().charAt(0) == '$' ? "variable" : "string");
		var input_options_array = this.prepareInputFieldOptions(prefix + "[options]", input_options_type == "array" ? input_options : null);
		var input_options_variable = input_options_type == "variable" && input_options ? ("" + input_options).replace(/"/g, "&quot;") : "";
		var input_options_string = input_options_type == "string" && input_options ? input_options : "";
		
		confirmation = $.isNumeric(confirmation) ? parseInt(confirmation) : 0;
		confirmation_message = typeof confirmation_message != "undefined" && confirmation_message != null ? ("" + confirmation_message).replace(/"/g, "&quot;") : "";
		allow_null = allow_null === "" ? 0 : ($.isNumeric(allow_null) ? parseInt(allow_null) : 1);
		allow_javascript = allow_javascript === "" ? 0 : ($.isNumeric(allow_javascript) ? parseInt(allow_javascript) : 0);
		validation_label = typeof validation_label != "undefined" && validation_label != null ? ("" + validation_label).replace(/"/g, "&quot;") : "";
		validation_message = typeof validation_message != "undefined" && validation_message != null ? ("" + validation_message).replace(/"/g, "&quot;") : "";
		validation_type = typeof validation_type != "undefined" && validation_type != null ? ("" + validation_type).replace(/"/g, "&quot;") : "";
		validation_regex = typeof validation_regex != "undefined" && validation_regex != null ? ("" + validation_regex).replace(/"/g, "&quot;") : "";
		validation_func = typeof validation_func != "undefined" && validation_func != null ? ("" + validation_func).replace(/"/g, "&quot;") : "";
		min_length = $.isNumeric(min_length) ? parseInt(min_length) : "";
		max_length = $.isNumeric(max_length) ? parseInt(max_length) : "";
		min_value = $.isNumeric(min_value) ? parseInt(min_value) : "";
		max_value = $.isNumeric(max_value) ? parseInt(max_value) : "";
		min_words = $.isNumeric(min_words) ? parseInt(min_words) : "";
		max_words = $.isNumeric(max_words) ? parseInt(max_words) : "";
		
		//IS_XXX
		var is_input = input_type == "text" || input_type == "textarea" || input_type == "password" || input_type == "file";
		var is_select = input_type == "select" || input_type == "checkbox" || input_type == "radio";
		var is_hidden = input_type == "hidden";
		var is_search = input_type == "search";
		var is_url = input_type == "url";
		var is_email = input_type == "email";
		var is_tel = input_type == "tel";
		var is_number = input_type == "number";
		var is_range = input_type == "range";
		var is_date = input_type == "date" || input_type == "month" || input_type == "week" || input_type == "time" || input_type == "datetime" || input_type == "datetime-local";
		var is_color = input_type == "color";
		var is_button = input_type == "submit" || input_type == "button" || input_type == "button_img";
		var is_label = input_type == "label" || input_type == "h1" || input_type == "h2" || input_type == "h3" || input_type == "h4" || input_type == "h5";
		var is_link = input_type == "link";
		var is_image = input_type == "image";
		
		//TYPES
		var input_types = ["text", "select", "checkbox", "radio", "textarea", "password", "file", "search", "email", "url", "tel", "number", "range", "date", "month", "week", "time", "datetime", "datetime-local", "color", "hidden", "button", "submit", "button_img", "link", "image", "label", "h1", "h2", "h3", "h4", "h5"];
		var validation_types = ["", "int", "bigint", "number", "double", "float", "decimal", "phone", "fax", "email", "date", "datetime", "time", "ipaddress", "smallint", "filename"];
		
		//HTML
		var html = '' +
		'		<div class="input_type">' +
		'			<label>Type:</label>' +
		'			<select class="task_property_field" name="' + prefix + '[type]" onChange="FormFieldsUtilObj.onChangeInputFieldType(this)">';
		
		var exists = false;
		for (var i = 0; i < input_types.length; i++) {
			html += '<option' + (input_types[i] == input_type ? ' selected' : '') + '>' + input_types[i] + '</option>';

			if (input_types[i] == input_type)
				exists = true;
		}
		
		if (!exists && input_type)
			html += '<option selected>' + input_type + '</option>';
		
		html += '' +
		'			</select>' +
		'		</div>' +
		'		<div class="input_name"' + (is_input || is_select || is_search || is_url || is_email || is_tel || is_number || is_range || is_date || is_color || is_button || is_hidden ? '' : 'style="display:none;"') + '>' +
		'			<label>Name:</label>' +
		'			<input type="text" class="task_property_field" name="' + prefix + '[name]" value="' + input_name + '" />' +
		'		</div>' +
		'		<div class="input_class">' +
		'			<label>Class:</label>' +
		'			<input type="text" class="task_property_field" name="' + prefix + '[class]" value="' + input_class + '" />' +
		'		</div>' +
		'		<div class="input_value" ' + (is_input || is_select || is_search || is_url || is_email || is_tel || is_number || is_range || is_date || is_color || is_button || is_hidden || is_link || is_label ? '' : 'style="display:none;"') + '>' +
		'			<label>Value:</label>' +
		'			<input type="text" class="task_property_field" name="' + prefix + '[value]" value="' + input_value + '" />' +
		'		</div>' +
		'		<div class="input_place_holder" ' + (is_input || is_search || is_url || is_email || is_tel || is_number || is_range || is_date || is_color ? '' : 'style="display:none;"') + ' title="Place Holder">' +
		'			<label>P. Holder:</label>' +
		'			<input type="text" class="task_property_field" name="' + prefix + '[place_holder]" value="' + input_place_holder + '" />' +
		'		</div>' +
		'		<div class="input_href" ' + (is_link ? '' : 'style="display:none;"') + '>' +
		'			<label>Url:</label>' +
		'			<input type="text" class="task_property_field" name="' + prefix + '[href]" value="' + input_href + '" />' +
		'		</div>' +
		'		<div class="input_target" ' + (is_link ? '' : 'style="display:none;"') + '>' +
		'			<label>Target:</label>' +
		'			<input type="text" class="task_property_field" name="' + prefix + '[target]" value="' + input_target + '" />' +
		'		</div>' +
		'		<div class="input_src" ' + (is_image ? '' : 'style="display:none;"') + '>' +
		'			<label>Src:</label>' +
		'			<input type="text" class="task_property_field" name="' + prefix + '[src]" value="' + input_src + '" />' +
		'		</div>' +
		'		<div class="input_title">' +
		'			<label>Title:</label>' +
		'			<input type="text" class="task_property_field" name="' + prefix + '[title]" value="' + input_title + '" />' +
		'		</div>' +
		'		<div class="clear"></div>' +
		'		<div class="input_previous_html">' +
		'			<label>Previous Html:</label>' +
		'			<textarea class="task_property_field" name="' + prefix + '[previous_html]">' + input_previous_html + '</textarea>' +
		'		</div>' +
		'		<div class="input_next_html">' +
		'			<label>Next Html:</label>' +
		'			<textarea class="task_property_field" name="' + prefix + '[next_html]">' + input_next_html + '</textarea>' +
		'		</div>' +
		'		<div class="clear"></div>' +
		'		<div class="input_extra_attributes">' +
		'			<label>Extra Attributes:</label>' +
		'		' +
		'			<select class="extra_attributes_type" name="extra_attributes_type" onChange="FormFieldsUtilObj.onChangeExtraAttributesType(this)">' + 
		'				<option value="array"' + (input_extra_attributes_type == "array" ? " selected" : "") + '>Hard-Coded Values</option>' + 
		'				<option value="variable"' + (input_extra_attributes_type == "variable" ? " selected" : "") + '>External Variable or String</option>' + 
		'				<option value="string"' + (input_extra_attributes_type == "string" ? " selected" : "") + '>Input data key with values between #...#</option>' + 
		'			</select>' + 
		'			<input class="task_property_field extra_attributes_variable" type="text" name="' + prefix + '[extra_attributes]" value="' + (input_extra_attributes_type == "variable" ? input_extra_attributes_variable : input_extra_attributes_string) + '"' + (input_extra_attributes_type == "variable" || input_extra_attributes_type == "string" ? "" : ' style="display:none;"') + ' placeHolder="Variable name..." />' +
		'			<table class="attributes" count="' + input_extra_attributes_array[1] + '" ' + (input_extra_attributes_type == "variable" || input_extra_attributes_type == "string" ? 'style="display:none;"' : "") + '><tbody>' +
		'				<tr>' +
		'					<th class="table_header name">Name</th>' +
		'					<th class="table_header value">Value</th>' +
		'					<th class="table_header icons">' +
		'						<span class="icon add" onClick="FormFieldsUtilObj.addInputFieldExtraAttribute(this, \'[extra_attributes]\');">add extra attribute</span>' +
		'					</th>' +
		'				</tr>' +
						input_extra_attributes_array[0] +
		'			</tbody></table>' +
		'		</div>' +
		'		<div class="input_available_values">' +
		'			<label>Available Values:</label>' +
		'		' + 
		'			<select class="available_values_type" name="available_values_type" onChange="FormFieldsUtilObj.onChangeAvailableValuesType(this)">' + 
		'				<option value="array"' + (input_available_values_type == "array" ? " selected" : "") + '>Hard-Coded Values</option>' + 
		'				<option value="variable"' + (input_available_values_type == "variable" ? " selected" : "") + '>External Variable or String</option>' + 
		'				<option value="string"' + (input_available_values_type == "string" ? " selected" : "") + '>Input data key with values between #...#</option>' + 
		'			</select>' + 
		'			<input class="task_property_field available_values_variable" type="text" name="' + prefix + '[available_values]" value="' + (input_available_values_type == "variable" ? input_available_values_variable : input_available_values_string) + '"' + (input_available_values_type == "variable" || input_available_values_type == "string" ? "" : ' style="display:none;"') + ' placeHolder="Variable name..." />' +
		'			<table class="values" count="' + input_available_values_array[1] + '" ' + (input_available_values_type == "variable" || input_available_values_type == "string" ? 'style="display:none;"' : "") + '><tbody>' +
		'				<tr>' +
		'					<th class="table_header old_value">Old Value</th>' +
		'					<th class="table_header new_value">New Value</th>' +
		'					<th class="table_header icons">' +
		'						<span class="icon add" onClick="FormFieldsUtilObj.addInputFieldAvailableValue(this, \'[available_values]\');">add available value</span>' +
		'					</th>' +
		'				</tr>' +
						input_available_values_array[0] +
		'			</tbody></table>' +
		'		</div>' +
		'		<div class="input_options" ' + (is_select ? '' : 'style="display:none;"') + '>' +
		'			<label>Options:</label>' +
		'		' + 
		'			<select class="options_type" name="options_type" onChange="FormFieldsUtilObj.onChangeOptionsType(this)">' + 
		'				<option value="array"' + (input_options_type == "array" ? " selected" : "") + '>Hard-Coded Values</option>' + 
		'				<option value="variable"' + (input_options_type == "variable" ? " selected" : "") + '>External Variable or String</option>' +
		'				<option value="string"' + (input_options_type == "string" ? " selected" : "") + '>Input data key with values between #...#</option>' + 
		'			</select>' + 
		'			<input class="task_property_field options_variable" type="text" name="' + prefix + '[options]" value="' + (input_options_type == "variable" ? input_options_variable : input_options_string) + '"' + (input_options_type == "variable" || input_options_type == "string" ? "" : ' style="display:none;"') + ' placeHolder="Variable name..." />' +
		'			<table class="options" count="' + input_options_array[1] + '" ' + (input_options_type == "variable" || input_options_type == "string" ? 'style="display:none;"' : "") + '><tbody>' +
		'				<tr>' +
		'					<th class="table_header value">Value</th>' +
		'					<th class="table_header label">Label</th>' +
		'					<th class="table_header other_attributes">Other Attributes</th>' +
		'					<th class="table_header icons">' +
		'						<span class="icon add" onClick="FormFieldsUtilObj.addInputFieldOption(this, \'[options]\');">add option</span>' +
		'					</th>' +
		'				</tr>' +
						input_options_array[0] +
		'			</tbody></table>' +
		'		</div>' +
		'		<div class="other_settings"' + (is_hidden ? 'style="display:none;"' : '') + '>' +
		'			<label>Other Settings:</label>' +
		'			' +
		'			<div class="confirmation" ' + (is_button ? '' : 'style="display:none;"') + ' title="Check this box if you wish the user confirms his intention every time that he clicks in this button.">' +
		'				<label>Confirm:</label>';
		
		if (confirmation === 1 || confirmation === 0)
			html += '			<input type="checkbox" class="task_property_field" name="' + prefix + '[confirmation]" value="1" ' + (confirmation === 1 ? 'checked' : '') + ' />';
		else
			html += '' +
			'			<select class="task_property_field" name="' + prefix + '[confirmation]">' +
			'				<option value="1">YES</option>' +
			'				<option value="0">NO</option>' +
			'				<option selected>' + confirmation + '</option>' +
			'			</select>';
	
		html += '' +
		'			</div>' +
		'			<div class="confirmation_message" ' + (is_button ? '' : 'style="display:none;"') + ' title="This is the confirmation message that appears to the user when he clicks in this button.">' +
		'				<label>Confirm Message:</label>' +
		'				<input type="text" class="task_property_field" name="' + prefix + '[confirmation_message]" value="' + confirmation_message + '" />' +
		'			</div>' +
		'			<div class="allow_null" ' + (is_input || is_select || is_search || is_url || is_email || is_tel || is_number || is_range || is_date || is_color ? '' : 'style="display:none;"') + ' title="Check this box to allow empty values.">' +
		'				<label>Allow Null:</label>';
		
		if (allow_null === 1 || allow_null === 0)
			html += '<input type="checkbox" class="task_property_field" name="' + prefix + '[allow_null]" value="1" ' + (allow_null === 1 ? 'checked' : '') + ' />';
		else
			html += '' +
		'				<select class="task_property_field" name="' + prefix + '[allow_null]">' +
		'					<option value="1">YES</option>' +
		'					<option value="0">NO</option>' +
		'					<option selected>' + allow_null + '</option>' +
		'				</select>';
	
		html += '' +
		'			</div>' +
		'			<div class="allow_javascript" ' + (is_input || is_select || is_search || is_url || is_email || is_tel || is_number || is_range || is_date || is_color ? '' : 'style="display:none;"') + ' title="Allow Javascript Code">' +
		'				<label>Allow Javascript:</label>';
		
		if (allow_javascript === 1 || allow_javascript === 0)
			html += '<input type="checkbox" class="task_property_field" name="' + prefix + '[allow_javascript]" value="1" ' + (allow_javascript === 1 ? 'checked' : '') + ' />';
		else
			html += '' +
		'				<select class="task_property_field" name="' + prefix + '[allow_javascript]">' +
		'					<option value="1">YES</option>' +
		'					<option value="0">NO</option>' +
		'					<option selected>' + allow_javascript + '</option>' +
		'				</select>';
	
		html += '' +
		'			</div>' +
		'			<div class="validation_label" ' + (is_input || is_select || is_search || is_url || is_email || is_tel || is_number || is_range || is_date || is_color ? '' : 'style="display:none;"') + ' title="This label should contain the input label to be shown in the automatic validation message, in case is not defined bellow.">' +
		'				<label>Validation Label:</label>' +
		'				<input type="text" class="task_property_field" name="' + prefix + '[validation_label]" value="' + validation_label + '" />' +
		'			</div>' +
		'			<div class="validation_message" ' + (is_input || is_select || is_search || is_url || is_email || is_tel || is_number || is_range || is_date || is_color ? '' : 'style="display:none;"') + ' title="This message should contain the correct input format that the user should follow.">' +
		'				<label>Validation Message:</label>' +
		'				<input type="text" class="task_property_field" name="' + prefix + '[validation_message]" value="' + validation_message + '" />' +
		'			</div>' +
		'			<div class="validation_type" ' + (is_input || is_search || is_url || is_email || is_tel || is_number || is_range || is_date || is_color ? '' : 'style="display:none;"') + ' title="This will automatically check the user input value and see if it\'s a valid value.">' +
		'				<label>Validation Type:</label>' +
		'				<select class="task_property_field" name="' + prefix + '[validation_type]" onChange="FormFieldsUtilObj.onChangeInputFieldValidationType(this)">';
	
		exists = false;
		for (var i = 0; i < validation_types.length; i++) {
			html += '<option' + (validation_types[i] == validation_type ? ' selected' : '') + '>' + validation_types[i] + '</option>';

			if (validation_types[i] == validation_type)
				exists = true;
		}

		if (!exists && validation_type)
			html += '<option selected>' + validation_type + '</option>';
	
		html += '' +
		'				</select>' +
		'			</div>' +
		'			<div class="validation_regex" ' + (!validation_type && (is_input || is_search || is_url || is_email || is_tel || is_number || is_range || is_date || is_color) ? '' : 'style="display:none;"') + ' title="Insert here the regex which will validate the user input value. Regex can be between slashes or without.">' +
		'				<label>Validation Regex:</label>' +
		'				<input type="text" class="task_property_field" name="' + prefix + '[validation_regex]" value="' + validation_regex + '" />' +
		'			</div>' +
		'			<div class="validation_func" ' + (!validation_type && (is_input || is_search || is_url || is_email || is_tel || is_number || is_range || is_date || is_color) ? '' : 'style="display:none;"') + ' title="Insert here the javascript func which will validate the user input value. This function must return true/false and receives the arguments: Input value, Validation-Type as string, Validation-Regex as string.">' +
		'				<label>Validation Func:</label>' +
		'				<input type="text" class="task_property_field" name="' + prefix + '[validation_func]" value="' + validation_func + '" />' +
		'			</div>' +
		'			<div class="min_length" ' + (is_input || is_search || is_url || is_email || is_tel ? '' : 'style="display:none;"') + ' title="Minimum user input length">' +
		'				<label>Min Length:</label>' +
		'				<input type="text" class="task_property_field" name="' + prefix + '[min_length]" value="' + min_length + '" />' +
		'			</div>' +
		'			<div class="max_length" ' + (is_input || is_search || is_url || is_email || is_tel ? '' : 'style="display:none;"') + ' title="Maximum user input length">' +
		'				<label>Max Length:</label>' +
		'				<input type="text" class="task_property_field" name="' + prefix + '[max_length]" value="' + max_length + '" />' +
		'			</div>' +
		'			<div class="min_value" ' + (is_input || is_date || is_search || is_tel || is_number || is_range ? '' : 'style="display:none;"') + ' title="Minimum user input value">' +
		'				<label>Min Value:</label>' +
		'				<input type="text" class="task_property_field" name="' + prefix + '[min_value]" value="' + min_value + '" />' +
		'			</div>' +
		'			<div class="max_value" ' + (is_input || is_date || is_search || is_tel || is_number || is_range ? '' : 'style="display:none;"') + ' title="Maximum user input value">' +
		'				<label>Max Value:</label>' +
		'				<input type="text" class="task_property_field" name="' + prefix + '[max_value]" value="' + max_value + '" />' +
		'			</div>' +
		'			<div class="min_words" ' + (is_input || is_search ? '' : 'style="display:none;"') + ' title="Minimum words number">' +
		'				<label>Min Words #:</label>' +
		'				<input type="text" class="task_property_field" name="' + prefix + '[min_words]" value="' + min_words + '" />' +
		'			</div>' +
		'			<div class="max_words" ' + (is_input || is_search ? '' : 'style="display:none;"') + ' title="Maximum words number">' +
		'				<label>Max Words #:</label>' +
		'				<input type="text" class="task_property_field" name="' + prefix + '[max_words]" value="' + max_words + '" />' +
		'			</div>' +
		'		</div>';
		
		return html;
	},
	
	onChangeInputFieldValidationType : function(elm) {
		/* DEPRECATED bc now we can have validation_type together with validation_regex and validation_func
		 elm = $(elm);
		
		if (elm.val() == "")
			elm.parent().parent().children(".validation_regex, .validation_func").show();
		else 
			elm.parent().parent().children(".validation_regex, .validation_func").hide();*/
	},
	
	onChangeInputFieldType : function(elm) {
		elm = $(elm);
		var type = elm.val();
		var input_div = elm.parent().closest(".input_settings");
		var is_visible = input_div.css("display") == "block";
		
		if (is_visible) {
			var input_other_settings = input_div.children(".other_settings");
			var are_input_setings_visible = input_div.children(".minimize_field_input_settings").hasClass("minimize");
			
			if (type == "select" || type == "checkbox" || type == "radio") {
				input_div.children(".input_name, .input_value, .input_options").show();
				input_div.children(".input_place_holder, .input_href, .input_target, .input_src").hide();
				input_other_settings.children(".allow_javascript, .confirmation, .confirmation_message, .validation_type, .validation_regex, .validation_func, .min_length, .max_length, .min_value, .max_value, .min_words, .max_words").hide();
				
				if (are_input_setings_visible) {
					input_div.children(".other_settings").show();
					input_other_settings.children(".allow_null, .validation_label, .validation_message").show();
				}
				else
					input_div.children(".other_settings").hide();
			}
			else if (type == "image") {
				input_div.children(".input_name, .input_value, .input_place_holder, .input_href, .input_target, .input_options, .other_settings").hide();
				input_div.children(".input_src").show();
			}
			else if (type == "file") {
				input_div.children(".input_place_holder, .input_href, .input_target, .input_src, .input_options").hide();
				input_div.children(".input_name, .input_value").show(); //leave input_value shown. This is very important bc it will be used to create a new field with the current value of this correspondent attribute. This is, there could be a POST field with this new value.
				
				if (are_input_setings_visible) {
					input_div.children(".other_settings").show();
					input_other_settings.children(".allow_null, .validation_label, .validation_message").show();
					input_other_settings.children(".allow_javascript, .validation_type, .validation_regex, .validation_func, .min_length, .max_length, .min_value, .max_value, .min_words, .max_words").hide();
				}
				else
					input_div.children(".other_settings").hide();
			}
			else if (type == "submit" || type == "button" || type == "button_img") {
				input_div.children(".input_name, .input_value").show();
				input_div.children(".input_options, .input_href, .input_target, .input_place_holder").hide();
				input_other_settings.children(".allow_null, .allow_javascript, .validation_label, .validation_message, .validation_type, .validation_regex, .validation_func, .min_length, .max_length, .min_value, .max_value, .min_words, .max_words").hide();
				
				if (are_input_setings_visible) {
					input_div.children(".other_settings").show();
					input_other_settings.children(".confirmation, .confirmation_message").show();
				}
				else
					input_div.children(".other_settings").hide();
				
				if (type == "button_img")
					input_div.children(".input_src").show();
				else
					input_div.children(".input_src").hide();
			}
			else {
				input_div.children(".input_options, .input_place_holder, .input_src").hide();
				input_div.children(".input_value").show();
				input_other_settings.children(".confirmation, .confirmation_message").hide();
				
				if (type == "hidden") {
					input_div.children(".input_href, .input_target, .other_settings").hide();
					input_div.children(".input_name").show();
				}
				else if (type == "label" || type == "h1" || type == "h2" || type == "h3" || type == "h4" || type == "h5")
					input_div.children(".input_href, .input_target, .input_name, .other_settings").hide();
				else if (type == "link") {
					input_div.children(".input_name, .other_settings").hide();
					input_div.children(".input_href, .input_target").show();
				}
				else {
					input_div.children(".input_href, .input_target").hide();
					input_div.children(".input_name, .input_place_holder").show();
					
					if (are_input_setings_visible) {
						input_div.children(".other_settings").show();
						input_other_settings.children(".allow_null, .allow_javascript, .validation_label, .validation_message, .validation_type").show();
						
						switch (type) {
							case "email": 
							case "url": 
								input_other_settings.children(".min_length, .max_length").show();
								input_other_settings.children(".min_value, .max_value, .min_words, .max_words").hide();
								break;
							case "tel": 
								input_other_settings.children(".min_value, .max_value, .min_length, .max_length").show();
								input_other_settings.children(".min_words, .max_words").hide();
								break;
							case "number": 
							case "range": 
							case "date": 
							case "month": 
							case "week": 
							case "time": 
							case "datetime": 
							case "datetime-local": 
								input_other_settings.children(".min_value, .max_value").show();
								input_other_settings.children(".min_length, .max_length, .min_words, .max_words").hide();
								break;
							case "color": 
								input_other_settings.children(".min_length, .max_length, .min_value, .max_value, .min_words, .max_words").hide();
								break;
							default: 
								input_other_settings.children(".allow_null, .allow_javascript, .validation_label, .validation_message, .validation_type, .min_length, .max_length, .min_value, .max_value, .min_words, .max_words").show();
						}
						
						if (input_other_settings.find(".validation_type select").val() == "")
							input_other_settings.find(".validation_regex, .validation_func").show();
					}
					else
						input_div.children(".other_settings").hide();
				}
			}
		}
	},
	
	//PREPARING EXTRA ATTRIBUTES HTML
	onChangeExtraAttributesType : function(elm) {
		this.onChangeVariableValuesType(elm);
	},
	
	prepareInputFieldExtraAttributes : function(prefix, extra_attributes) {
		extra_attributes = this.parseInputFieldExtraAttributes(extra_attributes);
		
		return this.prepareInputFieldVariableValues(prefix, extra_attributes, this.getInputFieldExtraAttributeHtml);
	},
	
	parseInputFieldExtraAttributes : function(extra_attributes) {
		if (extra_attributes && $.isPlainObject(extra_attributes)) {
			var is_associative = true;
			
			$.each(extra_attributes, function(key, value) {
				if ($.isPlainObject(value)) { //it means for each item there will be: {name: "", value: ""}
					is_associative = false;
					return false;
				}
			});
			
			if (is_associative) {
				var eas = [];
				$.each(extra_attributes, function(key, value) {
					eas.push({"name": key, "value": value});
				});
				extra_attributes = eas;
			}
		}
		
		return extra_attributes;
	},
	
	addInputFieldExtraAttribute : function(elm, suffix) {
		this.addInputFieldVariableValues(elm, suffix, this.getInputFieldExtraAttributeHtml, {});
	},
	
	getInputFieldExtraAttributeHtml : function(prefix, data) {
		data = $.isEmptyObject(data) ? {} : data;
		
		var name = data["name"];
		var value = data["value"];
		
		name = typeof name != "undefined" && name != null ? ("" + name).replace(/"/g, "&quot;") : "";
		value = typeof value != "undefined" && value != null ? ("" + value).replace(/"/g, "&quot;") : "";
		
		var html = 
		'<tr>' +
		'	<td class="name">' +
		'		<input type="text" class="task_property_field" name="' + prefix + '[name]" value="' + name + '" />' +
		'	</td>' +
		'	<td class="value">' +
		'		<input type="text" class="task_property_field" name="' + prefix + '[value]" value="' + value + '" />' +
		'	</td>' +
		'	<td class="table_header icons">' +
		'		<span class="icon remove" onClick="$(this).parent().parent().remove()">remove attribute</span>' +
		'	</td>' +
		'</tr>';
		
		return html;
	},
	
	//PREPARING AVAILABLE VALUES HTML
	onChangeAvailableValuesType : function(elm) {
		this.onChangeVariableValuesType(elm);
	},
	
	prepareInputFieldAvailableValues : function(prefix, available_values) {
		available_values = this.parseInputFieldAvailableValues(available_values);
		
		return this.prepareInputFieldVariableValues(prefix, available_values, this.getInputFieldAvailableValueHtml);
	},
	
	parseInputFieldAvailableValues : function(available_values) {
		if (available_values && $.isPlainObject(available_values)) {
			var is_associative = true;
			
			$.each(available_values, function(key, value) {
				if ($.isPlainObject(value)) { //it means for each item there will be: {old_value: "", new_value: ""}
					is_associative = false;
					return false;
				}
			});
			
			if (is_associative) {
				var avs = [];
				$.each(available_values, function(key, value) {
					avs.push({"old_value": key, "new_value": value});
				});
				available_values = avs;
			}
		}
		
		return available_values;
	},
	
	addInputFieldAvailableValue : function(elm, suffix) {
		this.addInputFieldVariableValues(elm, suffix, this.getInputFieldAvailableValueHtml, {});
	},
	
	getInputFieldAvailableValueHtml : function(prefix, data) {
		data = $.isEmptyObject(data) ? {} : data;
		
		var old_value = data["old_value"];
		var new_value = data["new_value"];
		
		old_value = typeof old_value != "undefined" && old_value != null ? ("" + old_value).replace(/"/g, "&quot;") : "";
		new_value = typeof new_value != "undefined" && new_value != null ? ("" + new_value).replace(/"/g, "&quot;") : "";
		
		var html = 
		'<tr>' +
		'	<td class="old_value">' +
		'		<input type="text" class="task_property_field" name="' + prefix + '[old_value]" value="' + old_value + '" />' +
		'	</td>' +
		'	<td class="new_value">' +
		'		<input type="text" class="task_property_field" name="' + prefix + '[new_value]" value="' + new_value + '" />' +
		'	</td>' +
		'	<td class="table_header icons">' +
		'		<span class="icon remove" onClick="$(this).parent().parent().remove()">remove attribute</span>' +
		'	</td>' +
		'</tr>';
		
		return html;
	},
	
	//PREPARING OPTIONS HTML
	onChangeOptionsType : function(elm) {
		this.onChangeVariableValuesType(elm);
	},
	
	prepareInputFieldOptions : function(prefix, options) {
		options = this.parseInputFieldOptions(options);
		
		return this.prepareInputFieldVariableValues(prefix, options, this.getInputFieldOptionHtml);
	},
	
	parseInputFieldOptions : function(options) {
		if (options && $.isPlainObject(options)) {
			var is_associative = true;
			
			$.each(options, function(key, value) {
				if ($.isPlainObject(value)) { //it means for each item there will be: {value: "", label: ""}
					is_associative = false;
					return false;
				}
			});
			
			if (is_associative) {
				var opts = [];
				$.each(options, function(key, value) {
					opts.push({"value": key, "label": value});
				});
				options = opts;
			}
		}
		
		return options;
	},
	
	addInputFieldOption : function(elm, suffix) {
		this.addInputFieldVariableValues(elm, suffix, this.getInputFieldOptionHtml, {});
	},
	
	getInputFieldOptionHtml : function(prefix, data) {
		data = $.isEmptyObject(data) ? {} : data;
		
		var value = data["value"];
		var label = data["label"];
		var other_attributes = data["other_attributes"];
		
		value = typeof value != "undefined" && value != null ? ("" + value + "").replace(/"/g, "&quot;") : "";
		label = typeof label != "undefined" && label != null ? ("" + label).replace(/"/g, "&quot;") : "";
		other_attributes = typeof other_attributes != "undefined" && other_attributes != null ? ("" + other_attributes).replace(/"/g, "&quot;") : "";
		
		var html = 
		'<tr>' +
		'	<td class="value">' +
		'		<input type="text" class="task_property_field" name="' + prefix + '[value]" value="' + value + '" />' +
		'	</td>' +
		'	<td class="label">' +
		'		<input type="text" class="task_property_field" name="' + prefix + '[label]" value="' + label + '" />' +
		'	</td>' +
		'	<td class="other_attributes">' +
		'		<input type="text" class="task_property_field" name="' + prefix + '[other_attributes]" value="' + other_attributes + '" />' +
		'	</td>' +
		'	<td class="table_header icons">' +
		'		<span class="icon remove" onClick="$(this).parent().parent().remove()">remove option</span>' +
		'	</td>' +
		'</tr>';
		
		return html;
	},
	
	//GENERIC
	onChangeVariableValuesType : function(elm) {
		elm = $(elm);
		
		var p = elm.parent();
		var variable = p.children("input");
		var array = p.children("table");
		
		if (elm.val() == "variable" || elm.val() == "string") {
			variable.show();
			array.hide();
		}
		else {
			variable.hide();
			array.show();
		}
	},
	
	prepareInputFieldVariableValues : function(prefix, variable_values, get_html_function) {
		var html = '';
		var count = 0;
	
		if (variable_values)
			$.each(variable_values, function(i, value) {
				html += get_html_function(prefix + "[" + count + "]", value);
				count++;
			});
		
		return [html, count - 1];
	},
	
	addInputFieldVariableValues : function(elm, suffix, get_html_function, default_value) {
		var table = $(elm).parent().parent().parent().parent(); //$(elm).parent().closest("table"); //Do not use this, bc this might not exist
		var input_settings = table.parent().parent(); //table.parent().closest(".input_settings"); //Do not use this, bc this might not exist
		var field = input_settings.parent(); //input_settings.parent().closest(".field"); //Do not use this, bc this might not exist
		var midfix = input_settings.attr("prefix");
		var prefix = field.attr("prefix");
		
		midfix = midfix ? midfix : "";
		prefix = prefix ? prefix : "";
		
		var idx = parseInt(table.attr("count"));
		idx = idx >= 0 ? idx + 1 : 0;
		table.attr("count", idx);
	
		var html = get_html_function(prefix + midfix + suffix + "[" + idx + "]", default_value);
		var new_item = $(html);
		
		table.append(new_item);
	},
};
