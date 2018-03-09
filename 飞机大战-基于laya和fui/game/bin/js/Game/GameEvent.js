var GameEvent = /** @class */ (function () {
    function GameEvent() {
    }
    GameEvent.getInstance = function () {
        if (this.instance == null)
            this.instance = new laya.events.EventDispatcher();
        return this.instance;
    };
    GameEvent.EVENT_LOGIN_SUCCESS = "EVENT_LOGIN_SUCCESS";
    GameEvent.EVENT_LOGIN_NOUSER = "EVENT_LOGIN_NOUSER";
    GameEvent.EVENT_UPDATE_USER_INFO = "EVENT_UPDATE_USER_INFO";
    //Item
    GameEvent.EVENT_UPDATE_ITEM = "EVENT_UPDATE_ITEM";
    GameEvent.EVENT_GET_ITEM_BY_TYPE = "EVENT_GET_ITEM_BY_TYPE";
    GameEvent.EVENT_ITEM_CHOOSE = "EVENT_ITEM_CHOOSE";
    GameEvent.EVENT_UPDATE_EQUIP = "EVENT_UPDATE_EQUIP";
    GameEvent.EVENT_SHOP_UPGRADE = "EVENT_SHOP_UPGRADE";
    GameEvent.EVENT_CREATEQUEUE_UPDATE = "EVENT_CREATEQUEUE_UPDATE";
    //Battle
    GameEvent.EVENT_BATTLE = "EVENT_BATTLE";
    //Hero
    GameEvent.EVENT_HERO_UPDATE = "EVENT_HERO_UPDATE";
    //Mail
    GameEvent.EVENT_MAIL_UPDATE = "EVENT_MAIL_UPDATE";
    //Shop
    GameEvent.EVENT_UPDATE_SHOP = "EVENT_UPDATE_SHOP";
    //Chat
    GameEvent.EVENT_UPDATE_CHAT = "EVENT_UPDATE_CHAT";
    GameEvent.EVENT_UPDATA_STRENGTH = "EVENT_UPDATA_STRENGTH";
    GameEvent.EVENT_UPDATA_GEM = "EVENT_UPDATA_GEM";
    GameEvent.EVENT_UPDATA_STAR = "EVENT_UPDATA_STAR";
    GameEvent.EVENT_PAGEHEROTOP_STATE_CHANGE = "EVENT_PAGEHEROTOP_STATE_CHANGE";
    //Task
    GameEvent.EVENT_UPDATE_TASK = "EVENT_UPDATE_TASK";
    //Sign
    GameEvent.EVENT_UPDATE_SIGN = "EVENT_UPDATE_SIGN";
    //����
    GameEvent.EVENT_SMELT = "EVENT_SMELT";
    //摇钱树
    GameEvent.EVENT_UPDATE_TREE = "EVENT_UPDATE_TREE";
    //月卡面板
    GameEvent.EVENT_UPDATE_YK = "EVENT_UPDATE_YK";
    return GameEvent;
}());
//# sourceMappingURL=GameEvent.js.map