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
	/*余额*/
	(function(){
		var $lis = $('#con li');
		var $withDraw = $lis.eq(0).find('button');
		$withDraw.on('click',function(){
			window.location.href = '../../html/saleHtml/applyWithDraw.html';
		});
	})();
	/*业绩明细*/
	(function (){
		var $lis = $('#con li');
		$lis.eq(1).on('click',function(){
			window.location.href = '../../html/saleHtml/achivementDetail.html';
		});
	})();
	/*我的会员卡*/
	(function (){
		var $lis = $('#con li');
		$lis.eq(2).on('click',function(){
			window.location.href = '../../html/myCard.html';
		});
	})();
	/*我的推广码*/
	(function (){
		var $lis = $('#con li');
		$lis.eq(3).on('click',function(){
			window.location.href = '../../html/inviteFriend.html';
		});
	})();
	/*特需套餐*/
	(function (){
		var $lis = $('#con li');
		$lis.eq(5).on('click',function(){
			window.location.href = '../../html/specialMeal.html';
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
	/*底部tab*/
	(function (){
		var $indexBtn = $('#tab .index');
		var $mineBtn = $('#tab .mine');
		$indexBtn.on('click',function (){
			window.location.href = '../../index.html';
		});
		$mineBtn.on('click',function (){
			window.location.href = '../../html/mine.html';
		});
	})();
	/*test*/
	(function (){
		var $test = $('#test');
		$test.on('click',function (){
			window.location.href = '../../html/mine.html';
		});
	})();
	
});