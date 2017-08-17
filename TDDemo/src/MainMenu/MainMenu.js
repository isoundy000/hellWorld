/**
 * Created by lingjianfeng on 15/4/1.
 */

var MainMenuLayer = cc.Layer.extend({
    backgroundLayer     : null,     // 背景层
    mainLayar           : null,     // 游戏层
    ctor:function () {
        this._super();
        // 加载[背景层]
        this.loadBackgroundLayer();
        // 加载[游戏主层]
        this.loadMainLayer();
        return true;
    },
    loadBackgroundLayer : function(){
        this.backgroundLayer = new MMBackgroundLayer();
        this.addChild(this.backgroundLayer);
    },
    loadMainLayer : function(){
        this.mainLayar = new MMMainLayer();
        this.addChild(this.mainLayar);
    }
});

var MainMenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        this.loadResource();
        this.loadLayer();
    },
    onExit : function(){
        this.unLoadResource();
        this._super();
    },
    loadResource : function(){
    },
    unLoadResource : function(){
    },
    loadLayer : function(){
        var layer = new MainMenuLayer();
        this.addChild(layer);
    }
});
