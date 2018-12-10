$(function(){
	/*useInstruction*/
	(function(){
		var $useInstructionBtn = $('#con .useInstruction');
		$useInstructionBtn.on('click',function(){
			window.location.href = '../html/useInstruction.html';
		});
	})();
	/*使用优惠券*/
	(function(){
		var $useCouponsBtn = $('#con .useImediate');
		$useCouponsBtn.on('click',function(){
			window.location.href = '../index.html';
		});
	})();
});