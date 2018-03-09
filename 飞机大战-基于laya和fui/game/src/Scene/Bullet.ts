/*
* name;
*/
class Bullet extends fairygui.GComponent {
    constructor() {
        super();
    }
    init(x_: number, y_: number): void {
        var bullet = fairygui.UIPackage.createObject("common", "bullet2").asImage;
        bullet.x = x_
        bullet.y = y_
        this.addChild(bullet)

        Laya.timer.loop(1, this, function () {
            bullet.y -= 10;
            if (bullet.y <= 0) {
                Laya.timer.clearAll(this)
                this.removeChild(bullet)
            }
        })
    }
}