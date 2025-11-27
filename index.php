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

include __DIR__ . "/util.php";
$menu_widgets_html = getDefaultMenuWidgetsHTML("widget/");
?>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
	
	<!-- (Optional) Color -->
	<script language="javascript" type="text/javascript" src="lib/bloxtor/color_shortened.js"></script>
	
	<!-- JQuery -->
	<script language="javascript" type="text/javascript" src="lib/jquery/js/jquery-1.8.1.min.js"></script>
	<script language="javascript" type="text/javascript" src="lib/jqueryui/js/jquery-ui-1.11.4.min.js"></script>
	<link rel="stylesheet" href="lib/jqueryui/css/jquery-ui-1.11.4.css">
	
	<!-- To work on mobile devices with touch -->
	<script language="javascript" type="text/javascript" src="lib/jqueryuitouchpunch/jquery.ui.touch-punch.min.js"></script>
	
	<!-- Jquery Tap-Hold Event JS file -->
	<script language="javascript" type="text/javascript" src="lib/jquerytaphold/taphold.js"></script>

	<!-- Material-design-iconic-font -->
	<link rel="stylesheet" href="lib/materialdesigniconicfont/css/material-design-iconic-font.min.css">
	
	<!-- Parse_Str -->
	<script type="text/javascript" src="lib/phpjs/functions/strings/parse_str.js"></script>
	
	<!-- MD5 -->
	<script language="javascript" type="text/javascript" src="lib/jquery/js/jquery.md5.js"></script>
	
	<!-- JQuery Nestable2 -->
	<link rel="stylesheet" href="lib/nestable2/jquery.nestable.min.css" type="text/css" charset="utf-8" />
	<script language="javascript" type="text/javascript" src="lib/nestable2/jquery.nestable.min.js"></script>
	
	<!-- Add Code Editor JS files -->
	<script language="javascript" type="text/javascript" src="lib/acecodeeditor/src-min-noconflict/ace.js"></script>
	<script language="javascript" type="text/javascript" src="lib/acecodeeditor/src-min-noconflict/ext-language_tools.js"></script>
	
	<!-- Add Code Beautifier -->
	<script language="javascript" type="text/javascript" src="lib/mycodebeautifier/js/MyCodeBeautifier.js"></script>

	<!-- Add Html/CSS/JS Beautify code -->
	<script language="javascript" type="text/javascript" src="lib/jsbeautify/js/lib/beautify.js"></script>
	<script language="javascript" type="text/javascript" src="lib/jsbeautify/js/lib/beautify-css.js"></script>
	<script language="javascript" type="text/javascript" src="lib/myhtmlbeautify/MyHtmlBeautify.js"></script>
	
	<!-- Add Auto complete -->
	<script language="javascript" type="text/javascript" src="lib/myautocomplete/js/MyAutoComplete.js"></script>
	<link rel="stylesheet" href="lib/myautocomplete/css/style.css">
	
	<!-- CONTEXT MENU -->
	<link rel="stylesheet" href="lib/jquerymycontextmenu/css/style.css" type="text/css" charset="utf-8" />
	<script language="javascript" type="text/javascript" src="lib/jquerymycontextmenu/js/jquery.mycontextmenu.js"></script>
   
	<!-- Layout UI Editor -->
		<!-- Layout UI Editor - HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!--[if lt IE 9]>
			 <script src="lib/jqueryuidroppableiframe/js/html5_ie8/html5shiv.min.js"></script>
			 <script src="lib/jqueryuidroppableiframe/js/html5_ie8/respond.min.js"></script>
		<![endif]-->
		
		<!-- Layout UI Editor - Add Iframe droppable fix -->
    	<script type="text/javascript" src="lib/jqueryuidroppableiframe/js/jquery-ui-droppable-iframe-fix.js"></script>    
    
    	<!-- Layout UI Editor - Add Iframe droppable fix - IE10 viewport hack for Surface/desktop Windows 8 bug -->
    	<script src="lib/jqueryuidroppableiframe/js/ie10-viewport-bug-workaround.js"></script>
	    	
		<!-- Layout UI Editor - Add Editor -->
		<link rel="stylesheet" href="css/some_bootstrap_style.css" type="text/css" charset="utf-8" />
		<link rel="stylesheet" href="css/style.css" type="text/css" charset="utf-8" />
		<link rel="stylesheet" href="css/widget_resource.css" type="text/css" charset="utf-8" />
		
		<script language="javascript" type="text/javascript" src="js/TextSelection.js"></script>
		<script language="javascript" type="text/javascript" src="js/LayoutUIEditor.js"></script>
		<script language="javascript" type="text/javascript" src="js/CreateWidgetContainerClassObj.js"></script>
		
		<!-- (Optional) Layout UI Editor - LayoutUIEditorFormField.js is optional, bc it depends of FormFieldsUtilObj.js -->
		<script language="javascript" type="text/javascript" src="lib/bloxtor/FormFieldsUtilObj_shortened.js"></script>
		<script language="javascript" type="text/javascript" src="js/LayoutUIEditorFormField.js"></script>
		
		<!-- (Optional) Layout UI Editor - Add Widget Resources -->
		<script language="javascript" type="text/javascript" src="js/LayoutUIEditorWidgetResource.js"></script>
	
	<!-- (Optional) Add Fontawsome Icons CSS -->
	<link rel="stylesheet" href="lib/fontawesome/css/all.min.css">

	<!-- (Optional) Add Fancy LighBox lib -->
	<link rel="stylesheet" href="lib/jquerymyfancylightbox/css/style.css" type="text/css" charset="utf-8" media="screen, projection" />
	<script language="javascript" type="text/javascript" src="lib/jquerymyfancylightbox/js/jquery.myfancybox.js"></script>

	<!-- (Optional) Add DropDowns main JS and CSS files -->
	<link rel="stylesheet" href="lib/jquerysimpledropdowns/css/style.css" type="text/css" charset="utf-8" />
	<!--[if lte IE 7]>
		     <link rel="stylesheet" href="lib/jquerysimpledropdowns/css/ie.css" type="text/css" charset="utf-8" />
	<![endif]-->
	<script language="javascript" type="text/javascript" src="lib/jquerysimpledropdowns/js/jquery.dropdownPlain.js"></script>
		
	<!-- (Optional) Others -->
	<link rel="stylesheet" href="examples/css/beauty.css" type="text/css" charset="utf-8" />
	<script language="javascript" type="text/javascript" src="js/script.js"></script>
	
	<style>
		.menu {
			height:26px;
			background:var(--main-iframe-bg, #d5e3e4);
			font-size:11px;
			font-family:var(--main-font-family);
		}
		.menu .dropdown {
			margin: 0;
			padding: 0;
		}
		.menu a, .menu ul.dropdown li a, .menu ul.dropdown li label {
			text-decoration:none;
			color:var(--main-iframe-top-title-color);
		}
		.menu ul.dropdown li {
			white-space:nowrap;
			font-weight:normal;
			border-left:1px solid #ccc;
		}
		.menu ul.dropdown li:not(.hover):not(:hover) {
			background:var(--main-iframe-bg, #d5e3e4);
		}
		.menu ul.dropdown li.hover, .menu ul.dropdown li:hover {
			background:var(--link-color, #4070FF);
		}
		.menu ul.dropdown li.hover > a, .menu ul.dropdown li:hover > a {
			color:#fff;
		}
		.menu ul.dropdown ul {
			border: 1px solid #ccc;
			border-radius: 5px;
			z-index:999;
		}
		
		body .layout-ui-editor-beauty.full-screen {
			top:26px !important;
			border-top:1px solid var(--tabs-item-active-border, #ccc);
		}
	</style>
</head>
<body>
	<div class="menu">
		<ul class="dropdown">
			<li class="" title="Design">
				<a>Design</a>
				<ul>
					<li class="" title="Add another Template Widgets Droppable">
						<a onClick="addTemplateWidgetsDroppable('.layout-ui-editor-default');return false;">Add Template Widgets Droppable</a>
					</li>
					<li class="" title="Toggle Reverse">
						<a onClick="toggleReverse('.layout-ui-editor-default');return false;">Flip panels</a>
					</li>
					<li class="" title="Show Widgets">
						<a onClick="showWidgets('.layout-ui-editor-default');return false;">Show Widgets</a>
					</li>
					<li class="" title="Show Layers">
						<a onClick="showLayers('.layout-ui-editor-default');return false;">Show Layers</a>
					</li>
					<li class="" title="Show Settings">
						<a onClick="showSettings('.layout-ui-editor-default');return false;">Show Settings</a>
					</li>
					<li class="" title="Toggle Responsive Layout">
						<a onClick="toggleResponsiveLayout('.layout-ui-editor-default');return false;">Toggle Responsive Layout</a>
					</li>
					<li class="" title="Toggle Borders">
						<a onClick="toggleBorders('.layout-ui-editor-default');return false;">Toggle Borders</a>
					</li>
					<li class="" title="Toggle Source/UI">
						<a onClick="toggleSourceUI('.layout-ui-editor-default');return false;">Toggle Source/UI</a>
					</li>
				</ul>
			</li>
			<li class="" title="Other examples">
				<a>Other examples</a>
				<ul>
					<li class="" title="Editor with iFrame">
						<a href="examples/iframe.php" target="with_iframe">With iframe</a>
					</li>
					<li class="" title="Editor with Form Validation">
						<a href="examples/form_validation.php" target="form_validation">With Form Validation</a>
					</li>
					<li class="" title="Editor with Dynamic Resources">
						<a href="examples/dynamic_resources.php" target="dynamic_resources">With Dynamic Resources to DB</a>
					</li>
					<li class="" title="Multiple Editors at the same time">
						<a href="examples/multiple_layouts.php" target="multiple_layouts">Multiple Editors</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	
	<div class="layout-ui-editor reverse fixed-side-properties layout-ui-editor-default layout-ui-editor-beauty full-screen">
		<ul class="menu-widgets hidden">
			<? echo $menu_widgets_html; ?>
		</ul>
	</div>
</body>
</html>
