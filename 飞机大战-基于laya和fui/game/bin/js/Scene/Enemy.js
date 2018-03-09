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
var Enemy = /** @class */ (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        return _super.call(this) || this;
    }
    Enemy.prototype.init = function (x) {
        var enemy = fairygui.UIPackage.createObject("common", "enemy1_fly1").asImage;
        enemy.x = x;
        this.addChild(enemy);
        Laya.timer.loop(1, this, enemy_fly);
        function enemy_fly() {
            enemy.y += 10;
            if (enemy.y >= Laya.stage.height) {
                Laya.timer.clearAll(this);
                this.removeChild(enemy);
            }
        }
    };
    return Enemy;
}(fairygui.GComponent));
//# sourceMappingURL=Enemy.js.map