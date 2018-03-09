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
var UI;
(function (UI) {
    var PageGuide = /** @class */ (function (_super) {
        __extends(PageGuide, _super);
        function PageGuide() {
            var _this = _super.call(this) || this;
            _this.view = fairygui.UIPackage.createObject("page", "pageGuide").asCom;
            _this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
            _this.view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
            _this.addChild(_this.view);
            _this.createMc();
            _this.login = _this.view.getChild("btn_login").asButton;
            GameUtils.addClickListener(_this.login, _this.open, _this);
            return _this;
        }
        PageGuide.getInstance = function () {
            if (this.instance == null)
                this.instance = new PageGuide();
            return this.instance;
        };
        PageGuide.prototype.createMc = function () {
            for (var i = 0; i < 20; i++) {
                var flower = fairygui.UIPackage.createObject("common", "createRole_ceshi_00" + GameUtils.random(1, 3)).asImage;
                this.addChild(flower);
                flower.x = GameUtils.random(0, 640);
                flower.y = -50;
                var timeline = new Laya.TimeLine();
                timeline.to(flower, { x: GameUtils.random(0, 640), y: GameUtils.random(200, 430), alpha: 0 }, 4000, Laya.Ease.cubicInOut, 0);
                timeline.play(GameUtils.random(0, 4000), true);
            }
        };
        PageGuide.prototype.open = function () {
            UIManager.getInstance().loadUI("layerMain");
            this.removeChild(this.view);
        };
        return PageGuide;
    }(fairygui.GComponent));
    UI.PageGuide = PageGuide;
})(UI || (UI = {}));
//# sourceMappingURL=PageGuide.js.map