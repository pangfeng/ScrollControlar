/**
 * created: pangfeng, 2012-12-26
 * 
 */

(function(){
	var Widget = Dart.Class({
		
		id: "",
		/**
		 * @description 组件对应的页面节点，jquery类型
		 * @type DOMElement
		 */
		element: null,

		/**
		 * @description 初始化，构造函数
		 * @constructs
		 * @param {DOMElement|String} ele
		 * @param {Object} options
		 */
		initialize: function(options){
			var ele = options.ele;
			if(ele) this.element = (typeof ele == "string") ? $(ele) : ele;
            Dart.Util.extend(this, options);
			this.attachElements();
			this.reset();
			this.init();
			this.addDefaultListeners();
			this.addListeners();
		},
		
		/**
		 * @description 初始化时调用的方法
		 * @function
		 */
		init: function(){
		},		
		
		
		
		/**
		 * @description 重置组件状态
		 * @function
		 */
		reset: function(){},
		
		/**
		 * @description 绑定节点
		 * @function
		 */
		attachElements: function(){},

		/**
		 * @description 绑定事件
		 * @function
		 */
		addListeners: function(){},
		
		/**
		 * @description 移除事件
		 * @function
		 */
		removeListeners: function(){},
		
		/**
		 * @description 销毁组件
		 */
		destory: function(){
			this.removeListeners();
		},

		show: function(){
			this.element.show();
		},
		
		hide: function(){
			this.element.hide();
		},
		
		find: function(obj){
			return this.element.find(obj);
		},
		
		addDefaultListeners: function(){
			var id= this.id;
			if(!id){return;}
			var self = this;
            Dart.bind(id+".show", function(){
				self.show();
			})
            Dart.bind(id+".hide", function(){
				self.hide();
			})
		},
		
		/**
		 * @description 类名称
		 * @type String
		 */
		CLASS_NAME: "Dart.Widget"
	});

    Dart.Widget = Widget;
})();