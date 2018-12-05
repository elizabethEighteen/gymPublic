$(function () {
	/*mask高度计算*/
	(function () {
		var $mask = $('#mask');
		var $screenHeight = $(document).height()
		$mask.height($screenHeight);
	})();
	/*点击基本信息*/
	(function(){
		var $basicInfoBtn = $('#con .basicInfo');
		var $mask = $('#mask');
		var $basicInfoDialog = $('#basicInfoDialog');
		var isBasic = false;
		$basicInfoBtn.on('click',function(){
			$mask.show();
			$basicInfoDialog.show();
			isBasic = true;
		});
		$mask.on('click',function(){
			if (isBasic) {
				$mask.hide();
				$basicInfoDialog.hide();
				isBasic = false;
			}
		});
	})();
	/*点击使用说明*/
	(function(){
		var $useInstructionBtn = $('#con .useInfo');
		var $mask = $('#mask');
		var $useInstruction = $('#useInstruction');
		$useInstructionBtn.on('click',function(){
			$mask.show();
			$useInstruction.show();
		});
		$mask.on('click',function(){
			$mask.hide();
			$useInstruction.hide();
		});
	})();
});