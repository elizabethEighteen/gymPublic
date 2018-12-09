$(function () {
	/*绑定手机号*/
	(function () {
		var $bingPhoneNumber = $('#con .bindAccountUl li').eq(1);
		$bingPhoneNumber.bind('click',function () {
			window.location.href = '../html/bindPhone.html';
		});
	})();
	// /*选择性别*/
	(function(){
		var $genderManBtn = $('#con .basicInfoUl .genderMan');
		var $genderWomanBtn = $('#con .basicInfoUl .genderWoman');
		$genderManBtn.bind('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
		$genderWomanBtn.bind('click',function(){
			$(this).addClass('active').siblings().removeClass('active');
		});
	})();
	/*生日选择插件*/
	(function(){
		$('#con .basicInfoUl .selectBirthday').calendar();
	})();
	/*save*/
	(function(){
		var $saveBtn = $('#foot button');
		$saveBtn.bind('click',function(){
			window.location.href = '../html/mine.html';
		});
	})();
})