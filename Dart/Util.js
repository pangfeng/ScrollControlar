Dart.Util = Dart.Util || {};
/**
 * @description 替换模板字符串中的变量（{{...}}）
 * @param map
 *            Object<key, value>
 * @param templet
 *            String
 */
Dart.Util.fromTemplet = function(map, templet) {
	var str = templet;
	for ( var key in map) {
		var reg = new RegExp("\{\{" + key + "\}\}", "g");
		str = str.replace(reg, map[key]);
	}
	return str;
}


/**
 * @description "aaa_bbb_ccc" to "aaaBbbCcc"
 */
Dart.Util.toHump = function(str, spliter) {
	var arr = str.split(spliter || "_"), item;
	var hump = arr.shift();
	for(var i =0, l=arr.length;i<l;i++){
		item = arr[i];
		hump += item.slice(0,1).toUpperCase()+item.substring(1);
	}
	return hump;
}

window.colsole = window.console || function() {};


