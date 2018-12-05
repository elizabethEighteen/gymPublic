$(function(){
	/*mask高度计算*/
	(function () {
		var $mask = $('#mask');
		var $screenHeight = $(document).height()
		$mask.height($screenHeight);
	})();


	/**/
	(function () {
		var $mask = $('#mask');
		var $useInstructionBtn = $('#con .useInfo');//使用说明按钮
		var $phurchase = $('#con .basicInfo');//购买按钮
		var $writeInfo = $('#writeInfo')//填写购买信息
		var $sureButton = $writeInfo.find('.sure');//确认购买按钮
		var $pay = $('#pay');//支付弹窗
		var $close = $pay.find('.close');
		var $coupon = $pay.find('.coupon');//选择优惠券
		var $useInstruction = $('#useInstruction');
		var $isUseInstruction = false;

		$phurchase.on('click',function () {
			$mask.css('display','block');
			$writeInfo.css('display','block');
		});//点击购买
		$sureButton.on('click',function(){
			$writeInfo.css('display','none');
			$pay.css('display','block');
		});//点击确认按钮
		$close.on('click',function(){
			$pay.css('display','none');
			$mask.css('display','none');
		});
		$coupon.on('click',function(){
			window.location.href = '../html/chooseConpou.html'
		});//点击选择优惠券


		$useInstructionBtn.on('click',function (){
			$mask.css('display','block');
			$useInstruction.css('display','block');
			$isUseInstruction = true;
		});
		$mask.on('click',function(){
			if ($isUseInstruction) {
				$mask.css('display','none');
				$useInstruction.css('display','none');
				$isUseInstruction = false;
			}else{
				return;
			}			
		});
		
	})();
});