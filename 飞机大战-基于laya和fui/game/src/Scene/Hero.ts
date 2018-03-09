/*
* 玩家飞机类
*/
class Hero extends fairygui.GComponent {
    public constructor() {
        super();
        this.init();
    }
    init() {
        var plane = fairygui.UIPackage.createObject("common", "hero_fly1").asImage;
        this.addChild(plane)

        Laya.stage.on("mousemove", this, hero_fly);
        function hero_fly(): void {
            plane.x = Laya.stage.mouseX - plane.width / 2;
            plane.y = Laya.stage.mouseY - plane.height / 2;
        }

        Laya.timer.loop(200, this, function () {
            var bullet = new Bullet();
            bullet.init(plane.x + plane.width / 2 - 2, plane.y - 8)
            this.addChild(bullet)
        })
    }
}