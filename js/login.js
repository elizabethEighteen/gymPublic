$(function(){
	/*选择协议*/
	(function () {
		var $protolSelectBtn = $('#bottom .isSelected');
		$protolSelectBtn.on('click',function(){
			$(this).toggleClass('active');
		});
	})();
})