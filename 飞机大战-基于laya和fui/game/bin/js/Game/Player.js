var Player = /** @class */ (function () {
    function Player() {
    }
    // public static config: any = {};
    // public static user: any = {};
    // public static item: any = {};
    // public static create: any[] = [];
    // public static hero: any = {};
    // public static city: any = {};
    // public static heroTask: any[] = [];
    // public static open: any = {};
    // public static heroTaskNum: any = {};
    // public static task: any = {};
    // public static mail: any = {};
    // public static shop: any = {};
    // public static chat: any = [];
    // public static sign: any = {};
    /**
     * 加载数据配置
     */
    Player.loadData = function () {
        //     var configName = ["copy", "monster", "item", "game", "lvl", "vip", "task"];
        //     for (var i in configName) {
        //         var name = configName[i];
        //         var result = Laya.loader.getRes(`res/data/${name}.json`);
        //         switch (name) {
        //             case "copy":
        //             case "monster":
        //             case "item":
        //             case "task":
        //                 Player.config[name] = {};
        //                 for (var i in result) {
        //                     if (result[i].id >= 0 && result[i].name) {
        //                         Player.config[name][result[i].id] = result[i];
        //                         Player.config[name][result[i].name] = result[i];
        //                     }
        //                 }
        //                 break;
        //             case "game":
        //                 Player.config[name] = {};
        //                 for (var i in result) {
        //                     if (result[i].id >= 0 && result[i].key) Player.config[name][result[i].key] = result[i];
        //                 }
        //                 break;
        //             case "lvl":
        //             case "vip":
        //                 Player.config[name] = {};
        //                 for (var i in result) {
        //                     if (result[i].id >= 0) Player.config[name][result[i].id] = result[i];
        //                 }
        //                 break;
        //             default:
        //                 Player.config[name] = result;
        //                 break;
        //         }
        //     }
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map