/**
 * Created with JetBrains WebStorm.
 * User: pp
 * Date: 13-7-23
 * Time: 下午5:05
 * To change this template use File | Settings | File Templates.
 */
(function(){
    var Service = Dart.Class({
        initialize: function(options){
            Dart.Util.extend(this, options);
            this.init();
            this.addListeners();
        },
        init: function(){},

        /**
         * @description addListeners
         * @function
         */
        addListeners: function(){},

        /**
         * @description removeListeners
         * @function
         */
        removeListeners: function(){},        
        		
        CLASS_NAME: "Dart.Service"
    });

    Dart.Service = Service;
})();

