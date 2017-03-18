cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function() {
        this.gameNode = cc.find('Game');
        this.game = this.gameNode.getComponent("Game");
        this.scene = cc.find('Canvas').getComponent("Scene");
        this.boundingBox = cc.rect(0, 0, this.node.windth, this.node.height);

        var halfWidth = cc.visibleRect.width / 2;
        var halfHeight = cc.visibleRect.height / 2;
        this.minX = -(this.node.width - halfWidth);
        this.maxX = -halfWidth;
        this.minY = -(this.node.height - halfHeight);
        this.maxY = -halfHeight;
        this.prePos = { x: 0, y: 0 };
    },

    lateUpdate: function(dt) {
        if (!this.game.cameraFollowFlag) return;
        var target = this.scene.getActorTarget(this.game.playerId);
        var pos = target.getPos();

        pos.x = cc.clampf(-pos.x, this.minX, this.maxX);
        pos.y = cc.clampf(-pos.y, this.minY, this.maxY);

        this.node.setPosition(pos);
    },
});