$(function(){
	
	(function(){
		var $con = $('#con');
		var $ul = $con.find('ul');
		var $lis = $ul.find('li');

		$con.height($ul.height());/*搞定div容器的高度*/
		$lis.on('click',function(){
			$(this).toggleClass('active');
		});

	})();

});