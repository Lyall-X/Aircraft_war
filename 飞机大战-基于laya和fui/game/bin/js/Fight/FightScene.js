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
var Fight;
(function (Fight) {
    var FightScene = /** @class */ (function (_super) {
        __extends(FightScene, _super);
        function FightScene() {
            var _this = _super.call(this) || this;
            var self = _this;
            _this.view = fairygui.UIPackage.createObject("common", "layerFight").asCom;
            _this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
            _this.view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
            _this.addChild(_this.view);
            _this.img_background = _this.view.getChild("img_background").asLoader;
            _this.on(Laya.Event.DISPLAY, _this, _this.onAddToStage);
            _this.on(Laya.Event.UNDISPLAY, _this, _this.onRemoveFromStage);
            return _this;
        }
        FightScene.prototype.onAddToStage = function () {
        };
        FightScene.prototype.onRemoveFromStage = function () {
        };
        FightScene.prototype.enterMap = function (mapId) {
            var self = this;
            GameUtils.load("res/bg/" + mapId + ".jpg", function () {
                self.img_background.url = "res/bg/" + mapId + ".jpg";
            }, this);
        };
        return FightScene;
    }(fairygui.GComponent));
    Fight.FightScene = FightScene;
})(Fight || (Fight = {}));
//# sourceMappingURL=FightScene.js.map