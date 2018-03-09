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
* name;
*/
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        return _super.call(this) || this;
    }
    Bullet.prototype.init = function (x_, y_) {
        var bullet = fairygui.UIPackage.createObject("common", "bullet2").asImage;
        bullet.x = x_;
        bullet.y = y_;
        this.addChild(bullet);
        Laya.timer.loop(1, this, function () {
            bullet.y -= 10;
            if (bullet.y <= 0) {
                Laya.timer.clearAll(this);
                this.removeChild(bullet);
            }
        });
    };
    return Bullet;
}(fairygui.GComponent));
//# sourceMappingURL=Bullet.js.map