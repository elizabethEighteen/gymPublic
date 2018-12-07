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
	/*点击确定*/
	(function(){
		var $sureBtn = $('#foot .sure');
		$sureBtn.on('click',function(){
			window.location.href = '../html/phurchaseCard.html';
		});
	})();
});