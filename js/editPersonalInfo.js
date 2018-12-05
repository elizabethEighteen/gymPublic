$(function () {
	/*绑定手机号*/
	(function () {
		var $bingPhoneNumber = $('#con .bindAccountUl li').eq(1);
		$bingPhoneNumber.on('click',function () {
			window.location.href = '../html/bindPhone.html';
		});
	})();
})