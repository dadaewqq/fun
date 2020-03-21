$(function() {
    $("#test-editormd").removeAttr("class");
    var md = $("#mdeditor-textarea").text();
    $("#test-editormd").html("");
    editormd("test-editormd", {
        width: "100%",
        height: 740,
        path: './lib/',
        theme: "eclipse",
        previewTheme: "eclipse",
        editorTheme: "eclipse",
        markdown: md,
        codeFold: true,
        saveHTMLToTextarea: true, // 保存 HTML 到 Textarea
        searchReplace: true,
        htmlDecode: "style,script,iframe|on*", // 开启 HTML 标签解析，为了安全性，默认不开启
        emoji: false,
        taskList: true,
        tocm: true, // Using [TOCM]
        tex: true, // 开启科学公式TeX语言支持，默认关闭
        flowChart: true, // 开启流程图支持，默认关闭
        sequenceDiagram: true, // 开启时序/序列图支持，默认关闭,
        onload: function() {
            this.fullscreen();
        },
        toolbarIcons: function() {
            // Or return editormd.toolbarModes[name]; // full, simple, mini
            // Using "||" set icons align right.
            var toolBarIconArray = editormd.toolbarModes["full"];
            toolBarIconArray.push("download");
            return toolBarIconArray;
        },
        toolbarIconsClass: {
            download: "fa-download" // 指定一个FontAawsome的图标类
        },
        toolbarIconTexts: {
            download: "download" // 如果没有图标，则可以这样直接插入内容，可以是字符串或HTML标签
        },
        // 自定义工具栏按钮的事件处理
        toolbarHandlers: {
            download: function() {
                this.executePlugin("downloadDialog", "download-dialog/download-dialog");
            }
        }

    });
});