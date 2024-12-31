ctx.prototype.__iterateKeys = function(obj, callback) {
    let keys = Object.keys(obj), key;

    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        callback.call(this, key);
    }
};

ctx.prototype.__applyStyleState = function(styleState){
    this._iterateKeys(styleState, function(key){
        this[key] = styleState[key]
    })
}

ctx.prototype._setDefaultStyles = function(){
    this._iterateKeys(STYLES, function(key){
        this[key] = STYLES[key].canvas;
    });
}

ctx.prototype._getStyleState = function(){
    var styleState = {};

    this._iterateKeys(STYLES, function(key){
        styleState[key] = this[key]
    })
    
    return styleState;
}