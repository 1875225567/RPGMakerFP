cc.Class({
    extends: cc.Component,

    properties: {
        emotionAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },
        itemAtlas: {
            default: null,
            type: cc.SpriteAtlas
        },
        avatarAtlas: cc.SpriteAtlas
    },

    // use this for initialization
    onLoad: function() {
        this.balloonClip = [];
        //this.createBalloonClip();
        this.itemTable = {};
        var self = this;
        //读取道具列表到缓存中
        var fileName = "Global/Item";
        cc.loader.loadRes(fileName, function(err, jsonData) {
            if (err) {
                cc.log(fileName, 'read error');
                return;
            }
            cc.log("load item table");
            self.itemTable = jsonData;
            cc.loader.releaseRes(fileName);
        });
    },

    getEmotionAtlas: function() {
        return this.emotionAtlas;
    },

    getItemSprite: function(itemId) {
        var name = "IconSet_" + itemId;
        var spriteFrame = this.itemAtlas.getSpriteFrame(name);
        if (spriteFrame != null && spriteFrame != undefined)
            return spriteFrame;
        else
            return null;
    },

    getAvatar: function(actorId) {
        var name = actorId.toString();
        var spriteFrame = this.avatarAtlas.getSpriteFrame(name);
        return (spriteFrame == null ? null : spriteFrame);

    },

    getItemInfo: function(itemId) {
        return this.itemTable[itemId];
    },

});