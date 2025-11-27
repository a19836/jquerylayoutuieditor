<?php
/*
 * Copyright (c) 2025 Bloxtor (http://bloxtor.com) and Joao Pinto (http://jplpinto.com)
 * 
 * Multi-licensed: BSD 3-Clause | Apache 2.0 | GNU LGPL v3 | HLNC License (http://bloxtor.com/LICENSE_HLNC.md)
 * Choose one license that best fits your needs.
 *
 * Original JQuery Layout UI Editor Repo: https://github.com/a19836/jquerylayoutuieditor/
 * Original Bloxtor Repo: https://github.com/a19836/bloxtor
 *
 * YOU ARE NOT AUTHORIZED TO MODIFY OR REMOVE ANY PART OF THIS NOTICE!
 */

include __DIR__ . "/../util.php";
$menu_widgets_html = getDefaultMenuWidgetsHTML("../widget/");
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	
	<!-- (Optional) Color -->
	<script language="javascript" type="text/javascript" src="../lib/bloxtor/color_shortened.js"></script>
	
	<!-- JQuery -->
	<script language="javascript" type="text/javascript" src="../lib/jquery/js/jquery-1.8.1.min.js"></script>
	<script language="javascript" type="text/javascript" src="../lib/jqueryui/js/jquery-ui-1.11.4.min.js"></script>
	<link rel="stylesheet" href="../lib/jqueryui/css/jquery-ui-1.11.4.css">
	
	<!-- To work on mobile devices with touch -->
	<script language="javascript" type="text/javascript" src="../lib/jqueryuitouchpunch/jquery.ui.touch-punch.min.js"></script>
	
	<!-- Jquery Tap-Hold Event JS file -->
	<script language="javascript" type="text/javascript" src="../lib/jquerytaphold/taphold.js"></script>

	<!-- Material-design-iconic-font -->
	<link rel="stylesheet" href="../lib/materialdesigniconicfont/css/material-design-iconic-font.min.css">
	
	<!-- Parse_Str -->
	<script type="text/javascript" src="../lib/phpjs/functions/strings/parse_str.js"></script>
	
	<!-- MD5 -->
	<script language="javascript" type="text/javascript" src="../lib/jquery/js/jquery.md5.js"></script>
	
	<!-- JQuery Nestable2 -->
	<link rel="stylesheet" href="../lib/nestable2/jquery.nestable.min.css" type="text/css" charset="utf-8" />
	<script language="javascript" type="text/javascript" src="../lib/nestable2/jquery.nestable.min.js"></script>
	
	<!-- Add Code Editor JS files -->
	<script language="javascript" type="text/javascript" src="../lib/acecodeeditor/src-min-noconflict/ace.js"></script>
	<script language="javascript" type="text/javascript" src="../lib/acecodeeditor/src-min-noconflict/ext-language_tools.js"></script>
	
	<!-- Add Code Beautifier -->
	<script language="javascript" type="text/javascript" src="../lib/mycodebeautifier/js/MyCodeBeautifier.js"></script>

	<!-- Add Html/CSS/JS Beautify code -->
	<script language="javascript" type="text/javascript" src="../lib/jsbeautify/js/lib/beautify.js"></script>
	<script language="javascript" type="text/javascript" src="../lib/jsbeautify/js/lib/beautify-css.js"></script>
	<script language="javascript" type="text/javascript" src="../lib/myhtmlbeautify/MyHtmlBeautify.js"></script>
	
	<!-- Add Auto complete -->
	<script language="javascript" type="text/javascript" src="../lib/myautocomplete/js/MyAutoComplete.js"></script>
	<link rel="stylesheet" href="../lib/myautocomplete/css/style.css">
	
	<!-- CONTEXT MENU -->
	<link rel="stylesheet" href="../lib/jquerymycontextmenu/css/style.css" type="text/css" charset="utf-8" />
	<script language="javascript" type="text/javascript" src="../lib/jquerymycontextmenu/js/jquery.mycontextmenu.js"></script>
    	
	<!-- Layout UI Editor -->
		<!-- Layout UI Editor - HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
			 <script src="../lib/jqueryuidroppableiframe/js/html5_ie8/html5shiv.min.js"></script>
			 <script src="../lib/jqueryuidroppableiframe/js/html5_ie8/respond.min.js"></script>
		<![endif]-->
		
		<!-- Layout UI Editor - Add Iframe droppable fix -->
	    	<script type="text/javascript" src="../lib/jqueryuidroppableiframe/js/jquery-ui-droppable-iframe-fix.js"></script>    
	    
	    	<!-- Layout UI Editor - Add Iframe droppable fix - IE10 viewport hack for Surface/desktop Windows 8 bug -->
	    	<script src="../lib/jqueryuidroppableiframe/js/ie10-viewport-bug-workaround.js"></script>
	    	
		<!-- Layout UI Editor - Add Editor -->
		<link rel="stylesheet" href="../css/some_bootstrap_style.css" type="text/css" charset="utf-8" />
		<link rel="stylesheet" href="../css/style.css" type="text/css" charset="utf-8" />
		<link rel="stylesheet" href="../css/widget_resource.css" type="text/css" charset="utf-8" />
		
		<script language="javascript" type="text/javascript" src="../js/TextSelection.js"></script>
		<script language="javascript" type="text/javascript" src="../js/LayoutUIEditor.js"></script>
		<script language="javascript" type="text/javascript" src="../js/CreateWidgetContainerClassObj.js"></script>
		
		<!-- (Optional) Layout UI Editor - LayoutUIEditorFormField.js is optional, bc it depends of FormFieldsUtilObj.js -->
		<!--script language="javascript" type="text/javascript" src="../lib/bloxtor/FormFieldsUtilObj_shortened.js"></script>
		<script language="javascript" type="text/javascript" src="../js/LayoutUIEditorFormField.js"></script-->
		
		<!-- (Optional) Layout UI Editor - Add Widget Resources -->
		<!--script language="javascript" type="text/javascript" src="../js/LayoutUIEditorWidgetResource.js"></script-->
		
	<!-- (Optional) Others -->
	<link rel="stylesheet" href="css/blue.css" type="text/css" charset="utf-8" />
	<script language="javascript" type="text/javascript" src="../js/script.js"></script>
	
	<style>
	:root {
		/* scrollbar */
		--scrollbar-track-bg:#d5e3e4;
		--scrollbar-thumb-bg:#ccc;
	}

	.layout-ui-editor {
		height:auto;
		margin:0;
		position:absolute;
		top:0;
		left:0;
		right:0;
		bottom:25px;
	}
	.layout-ui-editor > .options .option.full-screen {
		display:none;
	}
	</style>
</head>
<body>
	<div class="layout-ui-editor reverse fixed-side-properties hide-template-widgets-options layout-ui-editor-5 layout-ui-editor-blue">
		<div class="template-widgets">
			<iframe class="template-widgets-droppable" data-init-src="layout_ui_editor_iframe.html"></iframe>
		</div>

		<ul class="menu-widgets hidden">
			<? echo $menu_widgets_html; ?>
		</ul>
	</div>
</body>
</html>
