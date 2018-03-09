var GameHandler = /** @class */ (function () {
    function GameHandler() {
    }
    GameHandler.GameEvent = {
        UserLoginReq: 1,
        UserLoginAck: 2,
        UserCreateReq: 3,
        AlertNotify: 4,
        SyncUser: 5,
        SyncHero: 6,
        SyncItem: 7,
        SyncEquip: 8,
        SyncMail: 9,
        FightReq: 10,
        FightAck: 11,
        BuyBagGridReq: 12,
        ChangeEquipReq: 13,
        LockEquipReq: 14,
        StrengthReq: 15,
        StrengthAck: 16,
        UpstarReq: 17,
        UpstarAck: 18,
        TaskReq: 19,
        TaskAck: 20,
        UpgemReq: 21,
        UpgemAck: 22,
        RefineReq: 23,
        RefineAck: 24,
        MailReq: 25,
        MailAck: 26,
        WingReq: 27,
        WingAck: 28,
        UseItemReq: 29,
        SmeltReq: 30,
        SmeltAck: 31,
        SyncShop: 32,
        ShopReq: 33,
        UpskillReq: 34,
        UpskillAck: 35,
        ChatReq: 36,
        ChatAck: 37,
        CallHeroReq: 38,
        SignReq: 39,
        SignAck: 40,
        MonthCardReq: 41,
        MonthCardAck: 42,
        SyncOfflineEarnings: 43,
        BuyCoinReq: 44,
        BuyCoinAck: 45,
    };
    GameHandler.handler = (_a = {},
        _a[GameHandler.GameEvent.UserLoginAck] = function (data) {
            var status = data.status;
            if (status == 0)
                UI.Toast.show("连接失败！！");
            else if (status == 1)
                GameEvent.getInstance().event(GameEvent.EVENT_LOGIN_SUCCESS);
            else if (status == 2)
                GameEvent.getInstance().event(GameEvent.EVENT_LOGIN_NOUSER);
        },
        _a[GameHandler.GameEvent.AlertNotify] = function (data) {
            UI.Toast.show(data.msg);
        },
        _a[GameHandler.GameEvent.SyncUser] = function (data) {
            for (var i in data) {
                if (!data.hasOwnProperty(i))
                    continue;
                if (i == "time") {
                    data[i] = Date.now() / 1000 - data[i];
                }
                Player.user[i] = data[i];
            }
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATE_USER_INFO);
        },
        _a[GameHandler.GameEvent.SyncHero] = function (data) {
            for (var i in data.hero) {
                var temp = data.hero[i];
                if (GameUtils.isNull(temp.fightSort))
                    continue;
                if (!Player.hero[temp.fightSort])
                    Player.hero[temp.fightSort] = {};
                for (var j in temp) {
                    if (!temp.hasOwnProperty(j))
                        continue;
                    if (temp[j] instanceof Array && temp[j].length == 0)
                        continue;
                    if (j == "attr")
                        temp.attr = JSON.parse(temp.attr);
                    Player.hero[temp.fightSort][j] = temp[j];
                }
            }
            GameEvent.getInstance().event(GameEvent.EVENT_HERO_UPDATE, false);
        },
        _a[GameHandler.GameEvent.SyncItem] = function (data) {
            if (!Player.user.bag)
                Player.user.bag = {};
            for (var i in data.item) {
                if (data.item[i].id)
                    Player.user.bag[data.item[i].id] = data.item[i];
                if (data.item[i].id && data.item[i].num == 0)
                    delete Player.user.bag[data.item[i].id];
            }
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATE_ITEM, false);
        },
        _a[GameHandler.GameEvent.SyncEquip] = function (data) {
            if (!Player.user.equipBag)
                Player.user.equipBag = {};
            for (var i in data.equip) {
                var info = data.equip[i];
                if (info.id && info.eid != 0)
                    Player.user.equipBag[data.equip[i].id] = data.equip[i];
                else if (info.id && info.eid == 0)
                    delete Player.user.equipBag[info.id];
            }
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATE_EQUIP, false);
        },
        _a[GameHandler.GameEvent.SyncMail] = function (data) {
            for (var i in data.mail) {
                Player.mail[data.mail[i].id] = data.mail[i];
            }
            GameEvent.getInstance().event(GameEvent.EVENT_MAIL_UPDATE, false);
        },
        _a[GameHandler.GameEvent.FightAck] = function (data) {
            GameEvent.getInstance().event(GameEvent.EVENT_BATTLE, data);
        },
        _a[GameHandler.GameEvent.SyncShop] = function (data) {
            for (var i in data.shop) {
                Player.shop[data.shop[i].id] = data.shop[i];
                if (data.shop[i].limit == 0)
                    delete Player.shop[data.shop[i].id];
            }
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATE_SHOP);
        },
        _a[GameHandler.GameEvent.ChatAck] = function (data) {
            for (var i in data.chat) {
                Player.chat.push(data.chat[i]);
            }
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATE_CHAT);
        },
        _a[GameHandler.GameEvent.StrengthAck] = function (data) {
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATA_STRENGTH, data);
        },
        _a[GameHandler.GameEvent.UpgemAck] = function (data) {
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATA_GEM, data);
        },
        _a[GameHandler.GameEvent.TaskAck] = function (data) {
            for (var i in data) {
                if (!data.hasOwnProperty(i))
                    continue;
                if (i == "achieve") {
                    if (!Player.task.achieve)
                        Player.task.achieve = {};
                    for (var j in data.achieve)
                        Player.task.achieve[data.achieve[j].id] = data.achieve[j];
                }
                else
                    Player.task[i] = data[i];
            }
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATE_TASK);
        },
        _a[GameHandler.GameEvent.SignAck] = function (data) {
            for (var i in data) {
                if (!data.hasOwnProperty(i))
                    continue;
                if (data[i] instanceof Array && data[i].length <= 0)
                    continue;
                Player.sign[i] = data[i];
            }
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATE_SIGN);
        },
        _a[GameHandler.GameEvent.UpstarAck] = function (data) {
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATA_STAR, data);
        },
        _a[GameHandler.GameEvent.SmeltAck] = function (data) {
            GameEvent.getInstance().event(GameEvent.EVENT_SMELT, data);
        },
        _a[GameHandler.GameEvent.MonthCardAck] = function (data) {
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATE_YK, data);
        },
        _a[GameHandler.GameEvent.SyncOfflineEarnings] = function (data) {
            UIManager.getInstance().loadUI("panelOffline", data);
        },
        _a[GameHandler.GameEvent.BuyCoinAck] = function (data) {
            GameEvent.getInstance().event(GameEvent.EVENT_UPDATE_TREE, data);
        },
        _a);
    return GameHandler;
}());
var _a;
//# sourceMappingURL=GameHandler.js.map