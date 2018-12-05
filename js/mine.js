$(function(){
	/*编辑个人信息*/
	var $editPersonalInfo = $('#head .bottom button');
	$editPersonalInfo.on('click',function(){
		window.location.href = '../html/editPersonalInfo.html';
	});
	/*我的会员卡*/
	(function(){
		var $lis = $('#con li');
		$lis.eq(0).on('click',function(){
			window.location.href = '../html/myCard.html'
		});
	})();
});