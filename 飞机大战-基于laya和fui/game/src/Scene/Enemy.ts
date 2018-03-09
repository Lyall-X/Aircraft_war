/*
* name;
*/
class Enemy extends fairygui.GComponent {
    constructor() {
        super();
    }
    init(x: number): void {
        var enemy = fairygui.UIPackage.createObject("common", "enemy1_fly1").asImage;
        enemy.x = x
        this.addChild(enemy)
        Laya.timer.loop(1, this, enemy_fly)
        function enemy_fly() {
            enemy.y += 10
            if (enemy.y >= Laya.stage.height) {
                Laya.timer.clearAll(this)
                this.removeChild(enemy)
            }
        }
    }
}