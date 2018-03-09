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
* 玩家飞机类
*/
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super.call(this) || this;
        _this.init();
        return _this;
    }
    Hero.prototype.init = function () {
        var plane = fairygui.UIPackage.createObject("common", "hero_fly1").asImage;
        this.addChild(plane);
        Laya.stage.on("mousemove", this, hero_fly);
        function hero_fly() {
            plane.x = Laya.stage.mouseX - plane.width / 2;
            plane.y = Laya.stage.mouseY - plane.height / 2;
        }
        Laya.timer.loop(200, this, function () {
            var bullet = new Bullet();
            bullet.init(plane.x + plane.width / 2 - 2, plane.y - 8);
            this.addChild(bullet);
        });
    };
    return Hero;
}(fairygui.GComponent));
//# sourceMappingURL=Hero.js.map