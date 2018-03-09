var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
* 游戏背景类
*/
var BackGround = /** @class */ (function (_super) {
    __extends(BackGround, _super);
    function BackGround() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    BackGround.prototype.init = function () {
        var bg1 = fairygui.UIPackage.createObject("common", "background").asImage;
        this.addChild(bg1);
        var bg2 = fairygui.UIPackage.createObject("common", "background").asImage;
        bg2.y = -Laya.stage.height;
        this.addChild(bg2);
        Laya.timer.frameLoop(1, this, onLoop);
        function onLoop() {
            bg1.y++;
            bg2.y++;
            if (bg1.y > Laya.stage.height) {
                bg1.y = -Laya.stage.height + 1;
            }
            else if (bg2.y > Laya.stage.height) {
                bg2.y = -Laya.stage.height + 1;
            }
        }
    };
    return BackGround;
}(fairygui.GComponent));
//# sourceMappingURL=BackGround.js.map