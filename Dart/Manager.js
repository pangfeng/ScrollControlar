(function(){
	var Manager = Dart.Class({
		
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
		removeListeners: function(){
			
		},
		
		bind: function(eventName, handler){
			Dart.bind(this.id+"."+eventName, handler);
		},
		
		CLASS_NAME: "Dart.Manager"
	});

    Dart.Manager = Manager;
})();
