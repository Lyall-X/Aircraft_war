var GameUtils = /** @class */ (function () {
    function GameUtils() {
    }
    GameUtils.setFilter = function (target, color) {
        var colorFilter;
        switch (color) {
            case "gray":
                var colorMatrix = [
                    0.3, 0.6, 0, 0, 0,
                    0.3, 0.6, 0, 0, 0,
                    0.3, 0.6, 0, 0, 0,
                    0, 0, 0, 1, 0
                ];
                // colorFilter = new egret.ColorMatrixFilter(colorMatrix);
                break;
            default:
                target.filters = [];
                break;
        }
        if (colorFilter)
            target.filters = [colorFilter];
    };
    GameUtils.addClickListener = function (target, listener, thisObject) {
        if (target)
            target.onClick(thisObject, listener, [target]);
    };
    GameUtils.removeClickListener = function (target, listener, thisObject) {
        if (target)
            target.offClick(thisObject, listener);
    };
    /**
     * 播放背景音乐
     * @param file
     * @param loops
     */
    GameUtils.playMusic = function (file, loops) {
        var url = "res/sound/" + file + ".mp3";
        GameUtils.load(url, function (result) {
            if (!result)
                return;
            // Laya.SoundManager.playMusic(url, loops);
        });
    };
    /**
     * 播放音效
     * @param file
     * @param loops
     */
    GameUtils.playSound = function (file, loops) {
        var url = "res/sound/" + file + ".mp3";
        GameUtils.load(url, function (result) {
            if (!result)
                return;
            // Laya.SoundManager.playSound(url, loops);
        });
    };
    GameUtils.formatTime = function (time) {
        var s = Math.floor(time % 60);
        var m = Math.floor(time / 60) % 60;
        var h = Math.floor(time / 60 / 60);
        var result = "";
        if (h)
            result += h + "时";
        if (m)
            result += m + "分";
        if (s)
            result += s + "秒";
        return result;
    };
    GameUtils.formatTimeStamp = function (t) {
        function p(s) {
            return s < 10 ? "0" + s : s;
        }
        if (t.toString().length == 10)
            t *= 1000;
        var time = new Date(t);
        var y = time.getFullYear(); //年
        var m = time.getMonth() + 1; //月
        var d = time.getDate(); //日
        var h = time.getHours(); //时
        var mm = time.getMinutes(); //分
        var s = time.getSeconds(); //秒
        return y + "-" + p(m) + "-" + p(d) + " " + p(h) + ":" + p(mm) + ":" + p(s);
    };
    // K:1000  M:1000K  G:1000M  T:1000G  P:1000T  E:1000P  Z:1000E  Y:1000Z
    GameUtils.formatNumber = function (num) {
        if (!num)
            return;
        var units = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
        var mod = 1000;
        var i = 0;
        while (num >= mod) {
            num /= mod;
            i++;
        }
        var result = num + units[i];
        if (i > 0 && num > 0)
            result = num.toFixed(1) + units[i];
        return result;
    };
    /**
     * 通用加载方法
     * @param url
     * @param complete
     * @param caller
     */
    GameUtils.load = function (url, complete, caller) {
        Laya.loader.load(url, Handler.create(caller, complete, null, false));
    };
    /**
     * 清理指定地址资源缓存
     * @param url
     * @param forceDispose
     */
    GameUtils.clearTextureRes = function (url) {
        Laya.loader.clearTextureRes(url);
    };
    /**
     * 销毁指定地址资源缓存
     * @param url
     * @param forceDispose
     */
    GameUtils.clearRes = function (url, forceDispose) {
        Laya.loader.clearRes(url, forceDispose);
    };
    /**
     * 随机数
     * @param min
     * @param max
     */
    GameUtils.random = function (min, max) {
        if (min <= max)
            return Math.floor(min + Math.random() * (max - min + 1));
        else
            return 0;
    };
    GameUtils.convert = function (match, nosign) {
        if (nosign) {
            match.sign = "";
        }
        else {
            match.sign = match.negative ? "-" : match.sign;
        }
        var l = match.min - match.argument.length + 1 - match.sign.length;
        var pad = new Array(l < 0 ? 0 : l).join(match.pad);
        if (!match.left) {
            if (match.pad == "0" || nosign) {
                return match.sign + pad + match.argument;
            }
            else {
                return pad + match.sign + match.argument;
            }
        }
        else {
            if (match.pad == "0" || nosign) {
                return match.sign + match.argument + pad.replace(/0/g, " ");
            }
            else {
                return match.sign + match.argument + pad;
            }
        }
    };
    ;
    /**
     * 判断是否为中文
     * @param {*} str
     */
    GameUtils.isChinese = function (str) {
        var reg = /^[u4E00-u9FA5]+$/;
        if (!reg.test(str)) {
            return true;
        }
        return false;
    };
    ;
    /**
     * 获取字符串长度
     *
     * @param {*} str
    */
    GameUtils.getStringLength = function (str) {
        var strArr = str.split("");
        var length = 0;
        for (var i = 0; i < strArr.length; i++) {
            var s = strArr[i];
            if (this.isChinese(s)) {
                // if (s == " ")
                //     continue;
                length += 2;
            }
            else {
                length += 1;
            }
        }
        return length;
    };
    ;
    /**
     * 定时重复执行
     * @param time 间隔时间(ms)
     * @param caller 执行作用域，当前类就为this
     * @param method 回调函数，时间终止执行方法
     * @param args 回调参数
     */
    GameUtils.repeat = function (time, caller, method, args) {
        Laya.timer.loop(time, caller, method, args);
    };
    GameUtils.mouse = function () {
        Laya.Event.MOUSE_DOWN;
    };
    /**
     * 格式化字符串，使用通配符
     * 1.%% - 返回百分号本身
     * 2.%b - 二进制数字
     * 3.%c - ASCII对应的字符
     * 4.%d - 整数
     * 5.%f - 浮点数
     * 6.%o - 八进制数字
     * 7.%s - 字符串
     * 8.%x - 16进制数字 (小写字母形式)
     * 9.%X - 16进制数字 (大写字母形式)
     * 在 % 号和通配字符之间可用的选项包括 (比如 %.2f)：
     * 1.+      (强制在数字前面显示 + 和 - 符号作为正负数标记。缺省情况下只有负数才显示 - 符号)
     * 2.-      (变量左对齐)
     * 3.0      (使用0作为右对齐的填充字符)
     * 4.[0-9]  (设置变量的最小宽度)
     * 5..[0-9] (设置浮点数精度或字符串的长度)
     */
    GameUtils.format = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (typeof args == "undefined") {
            return null;
        }
        if (args.length < 1) {
            return null;
        }
        if (typeof args[0] != "string") {
            return null;
        }
        if (typeof RegExp == "undefined") {
            return null;
        }
        var string = args[0];
        var exp = new RegExp(/(%([%]|(\-)?(\+|\x20)?(0)?(\d+)?(\.(\d)?)?([bcdfosxX])))/g);
        var matches = new Array();
        var strings = new Array();
        var convCount = 0;
        var stringPosStart = 0;
        var stringPosEnd = 0;
        var matchPosEnd = 0;
        var newString = "";
        var match = null;
        while ((match = exp.exec(string))) {
            if (match[9]) {
                convCount += 1;
            }
            stringPosStart = matchPosEnd;
            stringPosEnd = exp.lastIndex - match[0].length;
            strings[strings.length] = string.substring(stringPosStart, stringPosEnd);
            matchPosEnd = exp.lastIndex;
            matches[matches.length] = {
                match: match[0],
                left: match[3] ? true : false,
                sign: match[4] || "",
                pad: match[5] || " ",
                min: match[6] || 0,
                precision: match[8],
                code: match[9] || "%",
                negative: parseInt(args[convCount]) < 0 ? true : false,
                argument: String(args[convCount])
            };
        }
        strings[strings.length] = string.substring(matchPosEnd);
        if (matches.length == 0) {
            return string;
        }
        if (args.length - 1 < convCount) {
            return null;
        }
        var code = null;
        var match = null;
        var i = null;
        var substitution = null;
        for (i = 0; i < matches.length; i++) {
            if (matches[i].code == "%") {
                substitution = "%";
            }
            else if (matches[i].code == "b") {
                matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(2));
                substitution = this.convert(matches[i], true);
            }
            else if (matches[i].code == "c") {
                matches[i].argument = String(String.fromCharCode((Math.abs(parseInt(matches[i].argument + "")))));
                substitution = this.convert(matches[i], true);
            }
            else if (matches[i].code == "d") {
                matches[i].argument = String(Math.abs(parseInt(matches[i].argument)));
                substitution = this.convert(matches[i]);
            }
            else if (matches[i].code == "f") {
                matches[i].argument = String(Math.abs(parseFloat(matches[i].argument)).toFixed(matches[i].precision ? matches[i].precision : 6));
                substitution = this.convert(matches[i]);
            }
            else if (matches[i].code == "o") {
                matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(8));
                substitution = this.convert(matches[i]);
            }
            else if (matches[i].code == "s") {
                matches[i].argument = matches[i].argument.substring(0, matches[i].precision ? matches[i].precision : matches[i].argument.length);
                substitution = this.convert(matches[i], true);
            }
            else if (matches[i].code == "x") {
                matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(16));
                substitution = this.convert(matches[i]);
            }
            else if (matches[i].code == "X") {
                matches[i].argument = String(Math.abs(parseInt(matches[i].argument)).toString(16));
                substitution = this.convert(matches[i]).toUpperCase();
            }
            else {
                substitution = matches[i].match;
            }
            newString += strings[i];
            newString += substitution;
        }
        newString += strings[i];
        return newString;
    };
    return GameUtils;
}());
//# sourceMappingURL=GameUtils.js.map