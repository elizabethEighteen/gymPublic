$(function(){
	/*mask高度计算*/
	(function () {
		var $mask = $('#mask');
		var $screenHeight = $(document).height()
		$mask.height($screenHeight);
	})();
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
	/*邀请好友*/
	(function (){
		var $lis = $('#con li');
		$lis.eq(1).on('click',function(){
			window.location.href = '../html/inviteFriend.html'
		});
	})();
	/*我的优惠券*/
	(function (){
		var $lis = $('#con li');
		$lis.eq(2).on('click',function(){
			window.location.href = '../html/myCoupon.html'
		});
	})();
	/*特需套餐*/
	(function (){
		var $lis = $('#con li');
		$lis.eq(3).on('click',function(){
			window.location.href = '../html/specialMeal.html'
		});
	})();
	/*退出*/
	(function(){
		var $exitBtn = $('#foot button')
		var $mask = $('#mask');
		var $exitDialog = $('#exitDialog');
		var $sure = $exitDialog.find('.sure');
		var $cancel = $exitDialog.find('.cancel');
		$exitBtn.on('click',function(){
			$mask.show();
			$exitDialog.show();
		});
		$sure.on('click',function() {
			$mask.hide();
			$exitDialog.hide();
		});
		$cancel.on('click',function() {
			$mask.hide();
			$exitDialog.hide();
		});
	})();
	
});