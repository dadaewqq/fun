/* 可配置部分
 ***************************************************************************************/
var webkitVersionUrl = "http:\/\/trac.webkit.org\/browser\/tags\/Safari-%s";

var vi = [
    // 注释 chromium主版本号信息
    {
        first:{version:"5.0.307.1", date:"2010年1月。"},
        normal:{version:"5.0.375.55", date:"2010年5月。"},
        last:{version:"5.0.375.127", date:"2010年8月。"}
    },
    {
        first:{version:"6.0.408.1", date:"2010年5月。"},
        normal:{version:"6.0.472.53", date:"2010年9月。"},
        last:{version:"6.0.472.62", date:"2010年9月。"}
    },
    {
        first:{version:"7.0.503.0", date:"2010年8月。"},
        normal:{version:"7.0.517.43", date:"2010年10月。"},
        last:{version:"7.0.517.44", date:"2010年11月。"}
    },
    {
        first:{version:"8.0.552.5", date:"2010年10月。"},
        normal:{version:"8.0.552.215", date:"2010年11月。"},
        last:{version:"8.0.552.237", date:"2011年1月。"}
    },
    {
        first:{version:"9.0.570.1", date:"2010年11月。"},
        normal:{version:"9.0.597.84", date:"2011年2月。"},
        last:{version:"9.0.597.107", date:"2011年2月。"}
    },
    {
        first:{version:"10.0.612.3", date:"2010年12月。"},
        normal:{version:"10.0.648.127", date:"2011年3月。"},
        last:{version:"10.0.648.205", date:"2011年4月。"}
    },
    {
        first:{version:"11.0.686.0", date:"2011年2月。"},
        normal:{version:"11.0.696.57", date:"2011年4月。"},
        last:{version:"11.0.696.77", date:"2011年6月。"}
    },
    {
        first:{version:"12.0.712.0", date:"2011年3月。"},
        normal:{version:"12.0.742.91", date:"2011年6月。"},
        last:{version:"12.0.742.112", date:"2011年7月。"}
    },
    {
        first:{version:"13.0.767.1", date:"2011年5月。"},
        normal:{version:"13.0.782.107", date:"2011年8月。"},
        last:{version:"13.0.782.220", date:"2011年9月。"}
    },
    {
        first:{version:"14.0.794.0", date:"2011年6月。"},
        normal:{version:"14.0.835.163", date:"2011年9月。"},
        last:{version:"14.0.835.202", date:"2011年10月。"}
    },
    {
        first:{version:"15.0.849.0", date:"2011年8月。"},
        normal:{version:"15.0.874.102", date:"2011年10月。"},
        last:{version:"15.0.874.121", date:"2011年11月16日。"}
    },
    {
        first:{version:"16.0.899.0", date:"2011年9月。"},
        normal:{version:"16.0.912.63", date:"2011年12月13日。"},
        last:{version:"16.0.912.77 ", date:"2012年1月23日。"}
    },
    {
        first:{version:"17.0.928.0", date:"2011年11月。"},
        normal:{version:"17.0.963.46", date:"2012年2月8日。"},
        last:{version:"17.0.963.84", date:"2012年3月22日。"}
    },
    {
        first:{version:"18.0.1003.1", date:"2012年1月10日。"},
        normal:{version:"18.0.1025.142", date:"2012年4月30日。"},
        last:{version:"18.0.1025.168", date:"2012年4月30日。"}
    },
    {
        first:{version:"19.0.1041.0", date:"2012年2月14日。"},
        normal:{version:"19.0.1084.52", date:"2012年5月23日。"},
        last:{version:"19.0.1084.56", date:"2012年6月11日。"}
    },
    {
        first:{version:"20.0.1096.1", date:"2012年4月10日。"},
        normal:{version:"20.0.1132.43", date:"2012年6月26日。"},
        last:{version:"20.0.1132.59", date:"2012年7月28日。"}
    },
 {
        first:{version:"21.0.1145.0", date:"2012年5月21日。"},
        normal:{version:"21.0.1180.60", date:"2012年7月31日。"},
        last:{version:"21.0.1180.90", date:"2012年9月24日。"}
    },
    {
        first:{version:"22.0.1207.1", date:"2012年7月16日。"},
        normal:{version:"22.0.1229.79", date:"2012年9月25日。"},
        last:{version:"22.0.1229.94", date:"2012年10月10日。"}
    },
    {
        first:{version:"23.0.1243.2", date:"2012年8月23日。"},
        normal:{version:"23.0.1271.83", date:"2012年9月2日。"},
        last:{version:"23.0.1271.101", date:"2012年12月17日。"}
    },
    {
        first:{version:"24.0.1284.2", date:"2012年10月2日。"},
        normal:{version:"24.0.1312.52", date:"2013年1月10日。"},
        last:{version:"24.0.1312.71", date:"2012年2月14日。"}
    },
    {
        first:{version:"25.0.1359.3", date:"2012年12月13日。"},
        normal:{version:"25.0.1364.97", date:"2013年2月21日。"},
        last:{version:"25.0.1364.172", date:"2013年3月12日。"}
    },
    {
        first:{version:"26.0.1384.2", date:"2013年1月15日。"},
        normal:{version:"26.0.1410.43", date:"2013年3月26日。"},
        last:{version:"26.0.1410.64", date:"2013年4月9日。"}
    },
    {
        first:{version:"27.0.1423.0", date:"2013年2月26日。"},
        normal:{version:"27.0.1453.12", date:"2013年4月2日。"},
        last:{version:"27.0.1453.116", date:"2013年6月18日。"}
    },
    {
        first:{version:"28.0.1464.0", date:"2013年4月5日。"},
        normal:{version:"28.0.1500.71", date:"2013年7月9日。"},
        last:{version:"28.0.1500.95", date:"2013年7月30日。"}
   },
   {
        first:{version:"29.0.1516.3", date:"2013年5月24日。"},
        normal:{version:"29.0.1547.57", date:"2013年8月20日。"},
        last:{version:"29.0.1547.76", date:"2013年9月18日。"}
   },
   {
        first:{version:"30.0.1566.2", date:"2013年7月16日。"},
        normal:{version:"30.0.1599.66", date:"2013年10月03日。"},
        last:{version:"30.0.1599.114", date:"2013年10月22日。"}
   },
   {
        first:{version:"31.0.1612.0", date:"2013年8月27日。"},
        normal:{version:"31.0.1650.48", date:"2013年11月12日。"},
        last:{version:"31.0.1650.63", date:"2013年12月04日。"}
   },
   {
        first:{version:"32.0.1664.3", date:"2013年10月09日。"},
        normal:{version:"32.0.1700.76", date:"2014年01月14日。"},
    last:{version:"32.0.1700.102", date:"2014年01月27日。"}
   },
   {
        first:{version:"33.0.1707.0", date:"2013年11月12日。"},
        normal:{version:"33.0.1750.117", date:"2014年02月20日。"},
    last:{version:"33.0.1750.149", date:"2014年03月11日。"}
    },
    {
        first:{version:"34.0.1788.0", date:"2014年01月16日。"},
        normal:{version:"34.0.1847.116", date:"2014年04月08日。"},
    last:{version:"34.0.1847.137", date:"2014年05月13日。"}
    },
    {
        first:{version:"35.0.1862.2", date:"2014年02月27日。"},
        normal:{version:"35.0.1916.114", date:"2014年05月20日。"},
    last:{version:"35.0.1916.153", date:"2014年06月10日。"}
    },
    {
        first:{version:"36.0.1788.0", date:"2014年04月09日。"},
        normal:{version:"36.0.1985.125", date:"2014年07月16日。"},
    last:{version:"36.0.1985.143", date:"2014年08月14日。"}
    },
     {
        first:{version:"37.0.2017.2", date:"2014年05月28日。"},
        normal:{version:"37.0.2062.94", date:"2014年08月26日。"},
        last:{version:"37.0.2062.124", date:"2014年09月25日。"}
    },
    {
        first:{version:"38.0.2096.0", date:"2014年07月17日。"},
        normal:{version:"38.0.2125.111", date:"2014年10月28日。"},
    last:{version:"38.0.2125.122", date:"2014年11月12日。"}
    },
    {
        first:{version:"39.0.2138.3", date:"2014年08月28日。"},
        normal:{version:"39.0.2171.65", date:"2014年11月19日。"},
    last:{version:"39.0.2171.99", date:"2014年01月14日。"}
    },
    {
        first:{version:"40.0.2182.4", date:"2014年10月09日。"},
        normal:{version:"40.0.2214.93", date:"2015年01月26日。"},
    last:{version:"40.0.2214.115", date:"2015年02月19日。"}
    },
    {
        first:{version:"41.0.2224.3", date:"2014年11月20日。"},
        normal:{version:"41.0.2272.76", date:"2015年03月02日。"},
    last:{version:"41.0.2272.118", date:"2015年04月02日。"}
     },
    {
        first:{version:"42.0.2288.6", date:"2015年01月28日。"},
        normal:{version:"42.0.2311.90", date:"2015年04月14日。"},
    last:{version:"42.0.2311.152", date:"2015年05月13日。"}
    },
    {
        first:{version:"43.0.2327.5", date:"2015年03月10日。"},
        normal:{version:"43.0.2357.65", date:"2015年05月20日。"},
    last:{version:"43.0.2357.134", date:"2015年07月15日。"}
    },
    {
        first:{version:"44.0.2369.0", date:"2015年04月16日。"},
        normal:{version:"44.0.2403.89", date:"2015年07月21日。"},
        last:{version:"44.0.2403.157", date:"2015年08月21日。"}
    },
    {
        first:{version:"45.0.2414.0", date:"2015年05月28日。"},
        normal:{version:"45.0.2454.85", date:"2015年09月01日。"},
        last:{version:"", date:""}
    },
    {
        first:{version:"46.0.2467.2", date:"2015年07月30日。"},
        normal:{version:"46.0.2490.71", date:"2015年10月13日。"},
        last:{version:"45.0.2454.101", date:"2015年09月25日。"}
    },
     {
        first:{version:"47.0.2498.0", date:"2015年09月01日。"},
        normal:{version:"47.0.2526.73", date:"2015年12月02日。"},
        last:{version:"47.0.2526.111", date:"2016年01月14日。"}
    },
    {
        first:{version:"48.0.2535.0", date:"2015年10月15日。"},
        normal:{version:"48.0.2564.82", date:"2016年01月21日。"},
        last:{version:"48.0.2564.116", date:"2016年02月18日。"}
    },
    {
        first:{version:"49.0.2587.3", date:"2015年12月11日。"},
        normal:{version:"49.0.2623.75", date:"2016年03月02日。"},
        last:{version:"49.0.2623.110", date:"2016年03月29日。"}
    },
    {
        first:{version:"50.0.2633.3", date:"2016年01月29日。"},
        normal:{version:"50.0.2661.75", date:"2016年04月14日。"},
        last:{version:"", date:""}
    },
    {
        first:{version:"51.0.2679.0", date:"2016年03月15日。"},
        normal:{version:"51.0.2704.63", date:"2016年05月25日。"},
        last:{version:"51.0.2704.106", date:"2016年06月17日。"}
    },
    {
        first:{version:"52.0.2716.19", date:"2016年04月26日。"},
        normal:{version:"52.0.2743.82", date:"2016年07月21日。"},
        last:{version:"52.0.2743.116", date:"2016年08月04日。"}
    },
    {
        first:{version:"53.0.2756.0", date:"2016年06月02日。"},
        normal:{version:"53.0.2785.89", date:"2016年09月01日。"},
        last:{version:"53.0.2785.154", date:"2016年10月06日。"}
    },
    {
        first:{version:"54.0.2816.0", date:"2016年08月02日。"},
        normal:{version:"54.0.2840.59", date:"2016年10月12日。"},
        last:{version:"54.0.2840.100", date:"2016年11月09日。"}
    },
    {
        first:{version:"55.0.2873.0", date:"2016年09月27日。"},
        normal:{version:"55.0.2883.75", date:"2016年12月01日。"},
        last:{version:"55.0.2883.87", date:"2016年12月09日。"}
    },
    {
        first:{version:"56.0.2896.0", date:"2016年10月21日。"},
        normal:{version:"56.0.2924.76", date:"2017年01月25日。"},
        last:{version:"56.0.2924.87", date:"2017年03月01日。"}
    },
    {
        first:{version:"57.0.2950.4", date:"2016年12月14日。"},
        normal:{version:"57.0.2987.98", date:"2017年03月10日。"},
        last:{version:"57.0.2987.133", date:"2017年03月29日。"}
    },
    {
        first:{version:"58.0.3000.4", date:"2017年02月03日。"},
        normal:{version:"58.0.3029.81", date:"2017年04月19日。"},
        last:{version:"58.0.3029.110", date:"2017年05月09日。"}
    },
    {
        first:{version:"59.0.3063.4", date:"2017年04月06日。"},
        normal:{version:"59.0.3071.86", date:"2017年06月06日。"},
        last:{version:"59.0.3071.115", date:"2017年06月26日。"}
    },
    {
        first:{version:"60.0.3080.5", date:"2017年04月27日。"},
        normal:{version:"60.0.3112.78", date:"2017年07月26日。"},
        last:{version:"60.0.3112.113", date:"2017年08月24日。"}
    },
    {
        first:{version:"61.0.3124.10", date:"2017年06月09日。"},
        normal:{version:"61.0.3163.79", date:"2017年09月05日。"},
        last:{version:"61.0.3163.100", date:"2017年09月05日。"}
    },
    {
        first:{version:"62.0.3175.3", date:"2017年08月04日。"},
        normal:{version:"62.0.3202.62", date:"2017年10月17日。"},
        last:{version:"62.0.3202.94", date:"2017年11月13日。"}
    },
    {
        first:{version:"63.0.3213.3", date:"2017年09月13日。"},
        normal:{version:"63.0.3239.84", date:"2017年12月06日。"},
        last:{version:"63.0.3239.132", date:"2018年01月04日。"}
    },
    {
        first:{version:"64.0.3251.0", date:"2017年10月27日。"},
        normal:{version:"64.0.3282.119", date:"2018年01月24日。"},
        last:{version:"64.0.3282.186", date:"2018年02月22日。"}
    },
    {
        first:{version:"65.0.3294.5", date:"2017年12月15日。"},
        normal:{version:"65.0.3325.146", date:"2018年03月06日。"},
        last:{version:"65.0.3325.181", date:"2018年03月20日。"}
    },
    {
        first:{version:"66.0.3343.3", date:"2018年02月09日。"},
        normal:{version:"66.0.3359.117", date:"2018年04月17日。"},
        last:{version:"66.0.3359.181", date:"2018年05月15日。"}
    },
    {
        first:{version:"67.0.3371.0", date:"2018年03月17日。"},
        normal:{version:"67.0.3396.62", date:"2018年05月27日。"},
        last:{version:"67.0.3396.99", date:"2018年06月25日。"}
    },
    {
        first:{version:"68.0.3418.2", date:"2018年05月04日。"},
        normal:{version:"68.0.3440.75", date:"2018年07月24日。"},
        last:{version:"68.0.3440.84", date:"2018年07月30日。"}
     },
    {
        first:{version:"69.0.3452.0", date:"2018年06月08日。"},
        normal:{version:"69.0.3497.81", date:"2018年09月05日。"},
        last:{version:"", date:""}
    },
    {
        first:{version:"70.0.3510.0", date:"2018年08月03日。"},
        normal:{version:"", date:""},
        last:{version:"", date:""}
    }];
var suggestion = [
    // 大版本号大于最新版
    "此版本极速内核尚未发布正式版，您可以作为尝鲜时使用。",
    // 大版本号为最新版，子版本号大于等于对应的版本号
    "此版本内核为已发布正式版的最新版极速内核，建议您继续使用。",
    // 大版本号为最新版，子版本号小于对应的版本号
    "此版本极速内核为非正式版，建议您选择使用最新正式版内核的浏览器。",
    // 大版本号为最新版-1，子版本号大于等于对应的版本号
    "此版本极速内核为较新的正式版。建议您继续使用，等待浏览器升级内核。",
    // 大版本号为最新版-1，子版本号小于对应的版本号
    "此版本极速内核为非正式版。建议您选择使用最新正式版内核的浏览器。",
    // 大版本号大于等于8、小于最新版-1，子版本号大于对应的版本号
    "此版本极速内核较旧。建议您选择使用最新正式版内核的浏览器。",
    // 大版本号大于等于8、小于最新版-1，子版本号小于对应的版本号
    "此版本极速内核为较旧的非正式版。建议您选择使用最新正式版内核的浏览器。",
    // 大版本号大于等于5、小于8，子版本号大于对应的版本号
    "此版本极速内核非常陈旧，面临安全风险。建议您立即更换为使用最新正式版内核的浏览器。",
    //大版本号大于等于5、小于8，子版本号小于对应的版本号
    "此版本极速内核为非常陈旧的非正式版，面临安全风险。建议立即更换为使用最新正式版内核的浏览器。",
    // 大版本号小于最低版本号
    "此版本极速内核非常陈旧，面临安全风险。建议您立即更换为使用最新正式版内核的浏览器。"
];
/*
 **********************************************************************************************/


/*
 * 函数功能：      判断两个版本号的大小
 * 函数参数：      两个版本号的字符串
 * 函数返回值：    1 表示第一个版本号大于第二个
 *                 0 表示两个版本号相同
 *                -1 表示第一个版本号小于第二个
 */
function cmpVersion(szV1, szV2) {
    var arrV1 = szV1.split(".");
    var arrV2 = szV2.split(".");

    for (var i = 0; i < arrV1.length && i < arrV2.length; i++) {
        if (parseInt(arrV1[i]) > parseInt(arrV2[i]))
            return (1);
        else if (parseInt(arrV1[i]) < parseInt(arrV2[i]))
            return (-1);
    }
    if (arrV1.length == arrV2.length) {
        return (0);
    } else if (arrV1.length > arrV2.length) {
        return (1);
    } else {
        if (arrV1.length == 2 && arrV1[1] == 0) {
            return (1);
        } else {
            return (-1);
        }
    }
}

/*
 * 函数功能： 获取chromium版本号的类型
 * 函数参数： 版本号的字符串
 * 函数返回值：非正式,空
 */
function chromiumVersionType(version) {
    var versionType = [
        "",               // 大版本号已知，子版本号大于等于对应的版本号
        "（非正式版）"    // 大版本号已知，子版本号小于对应的版本号(正式版)/大版本号大于最新版
    ];

    var suggest = "";
    var arrV1 = version.split(".");
    if (parseInt(arrV1[0]) < parseInt(vi[0].normal.version.split(".")[0])) {
        suggest = versionType[0];
    } else if (parseInt(arrV1[0]) > parseInt(vi[vi.length - 1].normal.version.split(".")[0])) {
        suggest = versionType[1];
    }

    for (var i = 0; i < vi.length; i++) {
        if (vi[i].normal.version == "") {
            suggest = versionType[1];
            break;
        }
        var arrV2 = vi[i].normal.version.split(".");
        if (parseInt(arrV1[0]) == parseInt(arrV2[0])) {
            if (vi[i].normal.version!="" && cmpVersion(version, vi[i].normal.version) != -1) {
                suggest = versionType[0];
            } else {
                suggest = versionType[1];
            }
            break;
        }
    }

    return suggest;
}

// 获取chromium内核版本号的发布时间
function chromiumVersionDate(version) {
    var bv = parseInt(version.split(".")[0]);
    // 大版本号大于最大版本号
    if (bv > vi.length + 4) {
        if (vi[vi.length - 1].last.version && cmpVersion(version, vi[vi.length - 1].last.version) > 0) {
            return ("此版本 Chromium 内核发布于 " + vi[vi.length - 1].last.date.replace("。", " 之后。"));
        } else if (vi[vi.length - 1].normal.version && cmpVersion(version, vi[vi.length - 1].normal.version) > 0) {
            return ("此版本 Chromium 内核发布于 " + vi[vi.length - 1].normal.date.replace("。", " 之后。"));
        } else {
            return ("此版本 Chromium 内核发布于 " + vi[vi.length - 1].first.date.replace("。", " 之后。"));
        }
    }

    var firstVersion = vi[bv - 5].first.version;
    var normalVersion = vi[bv - 5].normal.version;
    var lastVersion = vi[bv - 5].last.version;

    var lowerVersion = vi[0].first.version;
    var upperVersion = vi[vi.length - 1].last.version;

    if (cmpVersion(version, lowerVersion) == -1) {
        return ("此版本 Chromium 内核发布早于 " + vi[0].first.date);

    } else if (cmpVersion(version, lowerVersion) == 0) {
        return ("此版本 Chromium 内核发布于 " + vi[0].first.date);

    } else if (upperVersion != "" && cmpVersion(version, upperVersion) == 1) {
        return "";

    } else if (cmpVersion(version, firstVersion) == -1) {
        return ("此版本 Chromium 内核发布早于 " + vi[bv - 5].first.date);

    } else if (cmpVersion(version, firstVersion) == 0) {
        return ("此版本 Chromium 内核发布于 " + vi[bv - 5].first.date);

    } else if (cmpVersion(version, firstVersion) == 1 &&
        cmpVersion(version, normalVersion) == -1) {
        if (vi[bv - 5].first.date == vi[bv - 5].normal.date) {
            return ("此版本 Chromium 内核发布于 " + vi[bv - 5].normal.date);
        } else {
            return ("此版本 Chromium 内核发布于 " + vi[bv - 5].first.date.replace("。", "") + "-" + vi[bv - 5].normal.date.replace("。", " 之间。"));
        }
    } else if (cmpVersion(version, firstVersion) == 1 && normalVersion == ""){
        return ("此版本 Chromium 内核发布于 " + vi[bv - 5].first.date.replace("。", "之后。"));

    } else if (cmpVersion(version, normalVersion) == 0) {
        return ("此版本 Chromium 内核发布于 " + vi[bv - 5].normal.date);

    } else if (cmpVersion(version, normalVersion) == 1 &&
        cmpVersion(version, lastVersion) == -1) {
        if (vi[bv - 5].normal.date == vi[bv - 5].last.date) {
            return ("此版本 Chromium 内核发布于 " + vi[bv - 5].normal.date);
        } else {
            return ("此版本 Chromium 内核发布于 " + vi[bv - 5].normal.date.replace("。", "") + "-" + vi[bv - 5].last.date.replace("。", " 之间。"));
        }
    } else if (cmpVersion(version, normalVersion) == 1 && lastVersion=="") {
        return ("此版本 Chromium 内核发布于 " + vi[bv - 5].normal.date.replace("。", "之后。"));

    } else if (cmpVersion(version, lastVersion) == 0) {
        return ("此版本 Chromium 内核发布于 " + vi[bv - 5].last.date);

    } else if (cmpVersion(version, lastVersion) == 1) {
        return ("此版本 Chromium 内核发布于 " + vi[bv - 5].last.date.replace("。", " 之后。"));
    }
}

// 获取chromium版本的建议
function chromiumVersionSuggestion(version) {
    var arrV1 = version.split(".");
    var latestIndex = 12;
    for (var i=vi.length-1; i>=0; i--) {
        if (vi[i].normal.version != "") {
            latestIndex = i;
            break;
        }
    }

    if (parseInt(arrV1[0]) > parseInt(vi[latestIndex].normal.version.split(".")[0])) {
        return (suggestion[0]);
    } else if (cmpVersion(version, vi[latestIndex].normal.version) != -1) {
        return (suggestion[1]);
    } else if (parseInt(arrV1[0]) == parseInt(vi[latestIndex].normal.version.split(".")[0]) &&
        cmpVersion(version, vi[latestIndex].normal.version) == -1) {
        return (suggestion[2]);
    } else if (parseInt(arrV1[0]) == parseInt(vi[latestIndex-1].normal.version.split(".")[0]) &&
        cmpVersion(version, vi[latestIndex-1].normal.version) != -1) {
        return (suggestion[3]);
    } else if (parseInt(arrV1[0]) == parseInt(vi[latestIndex-1].normal.version.split(".")[0]) &&
        cmpVersion(version, vi[latestIndex-1].normal.version) == -1) {
        return (suggestion[4]);
    } else if (parseInt(arrV1[0]) < parseInt(vi[latestIndex-1].normal.version.split(".")[0]) &&
        parseInt(arrV1[0]) >= 8 &&
        cmpVersion(version, vi[parseInt(arrV1[0]) - 5].normal.version) != -1) {
        return (suggestion[5]);
    } else if (parseInt(arrV1[0]) < parseInt(vi[latestIndex-1].normal.version.split(".")[0]) &&
        parseInt(arrV1[0]) >= 8 &&
        cmpVersion(version, vi[parseInt(arrV1[0]) - 5].normal.version) == -1) {
        return (suggestion[6]);
    } else if (parseInt(arrV1[0]) < 8 &&
        parseInt(arrV1[0]) >= 5 &&
        cmpVersion(version, vi[parseInt(arrV1[0]) - 5].normal.version) != -1) {
        return (suggestion[7]);
    } else if (parseInt(arrV1[0]) < 8 &&
        parseInt(arrV1[0]) >= 5 &&
        cmpVersion(version, vi[parseInt(arrV1[0]) - 5].normal.version) == -1) {
        return (suggestion[8]);
    } else if (parseInt(arrV1[0]) < 5) {
        return (suggestion[9]);
    }
}

// 判断是否为chrome内核浏览器
function isChromium(userAgent) {
    var chromium = "mozilla/&&applewebkit/&&chrome/&&safari/".split("&&");
    for (var i = 0; i < chromium.length; i++)
        if (userAgent.indexOf(chromium[i]) < 0)
            return false;
    return true;
}

// 判断是否为webkit内核浏览器
function isWebkit(userAgent) {
    if (userAgent.indexOf("applewebkit/") < 0)
        return false;
    return true;
}

// 检测到chrome内核浏览器时显示
function chromiumDisplay(userAgent) {
    var version = userAgent.match(/chrome\/([\d.]+)/)[1];

    var versionType = chromiumVersionType(version);
    var versionsObj = document.getElementById("version");
    var suggestionObj = document.getElementById("suggestion");
    var versionDate = chromiumVersionDate(version);
    var suggestion = chromiumVersionSuggestion(version);
    var versionNum = version.split(".")[0];

    versionsObj.innerHTML = "版本号：<strong>" + version + "<\/strong>" + versionType;
    if (versionNum >= 8 && versionType == "") {
        suggestionObj.innerHTML = versionDate + "<br \/>" + suggestion;
    } else {
        suggestionObj.innerHTML = versionDate + "<br \/><span style='color:#900101;'>" + suggestion + "<\/span>";
        var versionDiv = document.getElementById("in");
        versionDiv.style.background = "#C49259";
        versionDiv.style.borderColor = "#C49259";
        document.getElementById("version").style.borderBottomColor = "#9b6A33";
        document.getElementById("tb").style.borderTopColor = "#D7B287";
    }
}

// 检测到webkit内核浏览器时显示
function webkitDisplay(userAgent) {
    var version = userAgent.match(/applewebkit\/([\d.]+)/)[1];
    var versionsObj = document.getElementById("version");
    versionsObj.innerHTML = "版本号：<strong>" + version + "<\/strong>";
    webkitVersionUrl = webkitVersionUrl.replace("%s", version);
    var suggestion = "您的浏览器使用了Webkit内核。<a href='" + webkitVersionUrl + "'>点此查看<\/a>内核发布时间";
    var suggestionObj = document.getElementById("suggestion");
    suggestionObj.innerHTML = suggestion;
}

// 未检测到极速内核版本号时显示
function othersDisplay(userAgent) {
    var versionsObj = document.getElementById("version");
    versionsObj.innerHTML = "未能检测到极速内核版本号";
    var suggestionObj = document.getElementById("suggestion");
    suggestionObj.innerHTML = "请使用双核浏览器的极速模式或其他Chromium、Webkit内核浏览器进行检测。";
}


// 判断浏览器类型
function whatBrowser() {
    var userAgent = navigator.userAgent.toLowerCase();
    if (isChromium(userAgent)) {
        chromiumDisplay(userAgent);
    } else if (isWebkit(userAgent)) {
        webkitDisplay(userAgent);
    } else {
        othersDisplay(userAgent);
    }
}