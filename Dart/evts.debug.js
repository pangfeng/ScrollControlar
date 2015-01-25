(function(){
	
	var evts = {};
	
	/**
	 * @description 创建一个DOM元素，所有自定义公共事件都绑定在这个元素上
	 */
	var globalListener = $("<div style='width:0;height:0;display:none;'></div>").appendTo($("body"));

	var evt = {
		/**
		 * @description 将一个自定义公共事件绑定在evt上
		 * @param {String} e 事件名称，对应evts中的键
		 * @param {Function} callback 回调函数
		 */
		bind: function(e,callback){
			console.log("BIND: "+e);
			if(!evts[e]){
				evts[e] = e;
			}
			globalListener.bind(evts[e], callback);
		},
		
		/**
		 * @description 将一个自定义公共事件绑定从evt上移除
		 * @param {String} e 事件名称，对应evts中的键
		 * @param {Function} callback 回调函数
		 */
		unbind: function(e,callback){
			console.log("UNBIND: "+e);
			if(!callback){
				delete evts[e];
			}
			globalListener.unbind(e, callback);
		},
		
		/**
		 * @description 触发一个自定义公共事件
		 * @param {String} e 事件名称，对应evts中的键
		 * @param {Object} args 参数
		 */
		trigger: function(e,args){
			console.log("TRIGGER: "+e);
			var event = evts[e];
			if(event){
				globalListener.trigger(event, [args]);			
			}else{
				console.log(" Not found: " + e);
			}
		},
		
		triggerEvents:function(events){
			for(var i=0,l=events.length;i<l;i++){
				this.trigger(events[i]);
			}
		},
		
		getEvents: function(){
			return evts;
		}
	};
	p.extend(Dart, evt);
})();













