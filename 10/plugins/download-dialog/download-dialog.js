/*!
 * Help dialog plugin for Editor.md
 *
 * @file        help-dialog.js
 * @author      pandao
 * @version     1.2.0
 * @updateTime  2015-03-08
 * {@link       https://github.com/pandao/editor.md}
 * @license     MIT
 */

(function() {

	var factory = function (exports) {

		var $            = jQuery;
		var pluginName   = "download-dialog";

		exports.fn.downloadDialog = function() {
			var _this       = this;
			var lang        = this.lang;
			var editor      = this.editor;
			var settings    = this.settings;
			var path        = settings.pluginPath + pluginName + "/";
			var classPrefix = this.classPrefix;
			var dialogName  = classPrefix + pluginName, dialog;

			if (editor.find("." + dialogName).length < 1)
			{			
				var dialogContent = "<div class=\"markdown-body\" style=\"font-family:微软雅黑, Helvetica, Tahoma, STXihei,Arial;height:390px;overflow:auto;font-size:14px;border-bottom:1px solid #ddd;padding:0 20px 20px 0;\"></div>";

				dialog = this.createDialog({
					name       : dialogName,
					title      : "Html源码",
					width      : 840,
					height     : 540,
					mask       : settings.dialogShowMask,
					drag       : settings.dialogDraggable,
					content    : dialogContent,
					lockScreen : settings.dialogLockScreen,
					maskStyle  : {
						opacity         : settings.dialogMaskOpacity,
						backgroundColor : settings.dialogMaskBgColor
					},
					buttons    : {
						close : [lang.buttons.close, function() {      
							this.hide().lockScreen(false).hideMask();
							
							return false;
						}]
					}
				});
			}

			dialog = editor.find("." + dialogName);

			this.dialogShowMask(dialog);
			this.dialogLockScreen();
			dialog.show();

			var helpContent = dialog.find(".markdown-body");

			if (helpContent.html() === "") 
			{
				var htmlBody=$(".editormd-preview-container").eq(0).html();
				var htmlPrefix="<!DOCTYPE html>\n" +
                    "<html lang=\"zh\">\n" +
                    "<head>\n" +
                    "    <meta charset=\"utf-8\"/>\n" +
                    "    <title>Markdown在线编辑器 - www.MdEditor.com</title>\n" +
                    "    <link rel=\"shortcut icon\" href=\"https://www.mdeditor.com/images/logos/favicon.ico\" type=\"image/x-icon\"/>\n" +
                    "</head>\n" +
                    "<body>";
				var htmlSuffix="</body>\n" +
                    "</html>";
                helpContent.text(htmlPrefix+htmlBody+htmlSuffix);
			};
            dialog.find("." + classPrefix + "dialog-close").bind(editormd.mouseOrTouch("click", "touchend"), function() {
                helpContent.html("");
                return this;
            });
		};

	};
    
	// CommonJS/Node.js
	if (typeof require === "function" && typeof exports === "object" && typeof module === "object")
    { 
        module.exports = factory;
    }
	else if (typeof define === "function")  // AMD/CMD/Sea.js
    {
		if (define.amd) { // for Require.js

			define(["editormd"], function(editormd) {
                factory(editormd);
            });

		} else { // for Sea.js
			define(function(require) {
                var editormd = require("./../../editormd");
                factory(editormd);
            });
		}
	} 
	else
	{
        factory(window.editormd);
	}

})();
