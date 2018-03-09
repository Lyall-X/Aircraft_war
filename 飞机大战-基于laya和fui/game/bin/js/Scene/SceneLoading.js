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
var SceneLoading = /** @class */ (function (_super) {
    __extends(SceneLoading, _super);
    function SceneLoading() {
        var _this = _super.call(this) || this;
        _this.view = fairygui.UIPackage.createObject("common", "SceneLoading").asCom;
        _this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        _this.addChild(_this.view);
        _this.on(Laya.Event.DISPLAY, _this, _this.onAddToStage);
        return _this;
    }
    SceneLoading.getInstance = function () {
        if (this.instance == null)
            this.instance = new SceneLoading();
        return this.instance;
    };
    SceneLoading.prototype.onAddToStage = function () {
        var files = [
            { url: "res/effect/effect@atlas0.png", type: Loader.IMAGE },
            { url: "res/effect/effect.bin", type: Loader.BUFFER },
            { url: "res/fui/page@atlas0.png", type: Loader.IMAGE },
            { url: "res/fui/page.bin", type: Loader.BUFFER },
            { url: "res/fui/panel@atlas0.png", type: Loader.IMAGE },
            { url: "res/fui/panel.bin", type: Loader.BUFFER },
            { url: "res/fui/arttext@atlas0.png", type: Loader.IMAGE },
            { url: "res/fui/arttext.bin", type: Loader.BUFFER },
            { url: "res/cloth/cloth@atlas_jiyk0.png", type: Loader.IMAGE },
            { url: "res/cloth/cloth.bin", type: Loader.BUFFER },
            { url: "res/weapon/weapon.bin", type: Loader.BUFFER },
            { url: "res/wing/wing.bin", type: Loader.BUFFER },
            { url: "res/data/copy.json", type: Loader.JSON },
            { url: "res/data/game.json", type: Loader.JSON },
            { url: "res/data/hero.json", type: Loader.JSON },
            { url: "res/data/lvl.json", type: Loader.JSON },
            { url: "res/data/monster.json", type: Loader.JSON },
            { url: "res/data/item.json", type: Loader.JSON },
            { url: "res/data/vip.json", type: Loader.JSON },
            { url: "res/data/task.json", type: Loader.JSON },
        ];
        Laya.loader.load(files, Handler.create(this, this.onLoaded), Handler.create(this, this.onProgress, null, false));
    };
    SceneLoading.prototype.onProgress = function (pro) {
        this.progressbar.value = Math.floor(pro * 100);
    };
    SceneLoading.prototype.onLoaded = function () {
        fairygui.UIPackage.addPackage("res/fui/page", Laya.loader.getRes("res/fui/page.bin"));
        fairygui.UIPackage.addPackage("res/fui/arttext", Laya.loader.getRes("res/fui/arttext.bin"));
        fairygui.UIPackage.addPackage("res/fui/panel", Laya.loader.getRes("res/fui/panel.bin"));
        fairygui.UIPackage.addPackage("res/effect/effect", Laya.loader.getRes("res/effect/effect.bin"));
        fairygui.UIPackage.addPackage("res/cloth/cloth", Laya.loader.getRes("res/cloth/cloth.bin"));
        fairygui.UIPackage.addPackage("res/weapon/weapon", Laya.loader.getRes("res/weapon/weapon.bin"));
        fairygui.UIPackage.addPackage("res/wing/wing", Laya.loader.getRes("res/wing/wing.bin"));
        Player.loadData();
        GameContainer.getInstance().loadScene(SceneLogin.getInstance()); //载入输入账号的界面
    };
    return SceneLoading;
}(fairygui.GComponent));
//# sourceMappingURL=SceneLoading.js.map