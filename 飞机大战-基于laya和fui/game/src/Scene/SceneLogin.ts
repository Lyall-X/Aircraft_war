class SceneLogin extends fairygui.GComponent {
    private view: fairygui.GComponent;
    private btn_loading: fairygui.GButton;

    private static instance: SceneLogin;
    public static getInstance(): SceneLogin {
        if (this.instance == null)
            this.instance = new SceneLogin();
        return this.instance;
    }

    public constructor() {
        super();
        this.view = fairygui.UIPackage.createObject("common", "SceneLogin").asCom;
        this.view.setSize(fairygui.GRoot.inst.width, fairygui.GRoot.inst.height);
        this.view.addRelation(fairygui.GRoot.inst, fairygui.RelationType.Size);
        this.addChild(this.view);
        this.btn_loading = this.view.getChild("btn_loading").asButton;
        this.btn_loading.onClick(this, this.onLogin)
    }

    private onLogin(): void {
        this.view.addChild(new BackGround())
        this.view.addChild(new Hero())

        Laya.timer.loop(2000, this, function () {
            var enemy = new Enemy();
            var enemy_x = Math.floor(0 + Math.random() * (640 - 0 + 1))
            enemy.init(enemy_x)
            this.addChild(enemy)
        })
        UI.Toast.show("请输入账号");
    }
}
