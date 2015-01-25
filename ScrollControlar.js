(function(){
	window.app = window.app || {};

	window.app.ScrollControlar = Dart.Class({
		id:'',

		scrollTime: new Date().getTime(),

		lastScrollTop:0,
		
		elSelector: '',

		rowsElSelector:'',

		targetElSelector: '',

		targetRowsElSelector: '',

		rowHeight: 1,

		targetRowHeight: 1,

		indexAttr: 'index',

		//防止两个el互相触发。
		actived: true,

		initialize: function(options){
			$.extend(this, options);
			this.selectEls();
			this.el.on('scroll', this.onScroll.bind(this));

			this.el.on('mouseover', function(){
				this.actived = true;
			}.bind(this));
			this.targetEl.on('mouseover', function(){
				this.actived = false;
			}.bind(this))
		},

		selectEls: function(){
			this.el = $(this.elSelector);
			this.targetEl=$(this.targetElSelector);
			this.rows = $(this.rowsElSelector);
			this.targetRows = $(this.targetRowsElSelector);
		},

		/**
		 *  计算当前触发scroll事件和上一次触发scroll事件的时间间隔。
		 *	如果间隔时间很短（<200ms）那就认为用户是在连续滚动。(scrolling)
		 *	如果间隔时间较长(>=200ms)就认为用户之前有停顿，这是一次新的滚动。(scrollstart)
		 * 
		 */
		onScroll: function(){	
			if(!this.actived) return;
			var time = new Date().getTime(), delta = time-this.scrollTime;
			var curScrollTop = this.scrollTop;
			if(delta<200){
				this.selectEls();
				this.scrolling(curScrollTop-lastScrollTop);
			}else{			
				this.scrollStart();
			}	
			lastScrollTop = curScrollTop;
			scrollTime = time;
		},

		scrollStart: function(){	
			if(!this.actived) return;
			var topRow = this.getFirstInView(this.el, this.rows);
			var index = topRow.attr(this.indexAttr);
			var targetRow = $(this.targetRowsElSelector+"["+this.indexAttr+"='"+index+"']");
			var targetRowTop = targetRow.offset().top;
			this.targetEl.scrollTop(this.targetEl.scrollTop()+targetRowTop);
		},

		scrolling: function(scrollDelta){	
			if(!this.actived) return;
			this.targetEl.scrollTop(this.targetEl.scrollTop()+scrollDelta*(20/52));
		},

		getFirstInView: function(content, rows){
			for(var i=0,l=rows.length;i<l;i++){
				var row = $(rows[i]);
				if(row.offset().top>=0){
					return row;
				}
			}
		}
	});
}());