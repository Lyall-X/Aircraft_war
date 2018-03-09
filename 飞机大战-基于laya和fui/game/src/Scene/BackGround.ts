/*
* 游戏背景类
*/
class BackGround extends fairygui.GComponent {
    constructor() {
        super();
        this.init();
    }
    init(): void {
        var bg1 = fairygui.UIPackage.createObject("common", "background").asImage;
        this.addChild(bg1);

        var bg2 = fairygui.UIPackage.createObject("common", "background").asImage;
        bg2.y = -Laya.stage.height;
        this.addChild(bg2);

        Laya.timer.frameLoop(1, this, onLoop);
        function onLoop(): void {
            bg1.y++;
            bg2.y++;

            if (bg1.y > Laya.stage.height) {
                bg1.y = -Laya.stage.height + 1;
            } else if (bg2.y > Laya.stage.height) {
                bg2.y = -Laya.stage.height + 1;
            }
        }
    }
}