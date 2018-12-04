$(function () {
	/*mask高度计算*/
	(function () {
		var $mask = $('#mask');
		var $screenHeight = $(document).height()
		$mask.height($screenHeight);
	})();


	/*banner*/
	(function () {
		var iNow = 0;
		var timmer;
		var $oUl = $('#banner .ad');
		var $con = $oUl.html();
		var liWidth = $oUl.find('li').width()
		var liNum = $oUl.find('li').length;
		var $nav = $('#banner .nav li')

		$oUl.html($con+$con);
		$oUl.width($oUl.find('li').length*liWidth);
		function move () {
			iNow ++;
			if (iNow == liNum*2) {
				$oUl.css('left',0);
				iNow = 0;
			}
			$oUl.animate({left:-iNow*liWidth});
			$nav.eq(iNow%liNum).addClass('active').siblings().removeClass('active');
		}
		timmer = setInterval(move,2000);
	})();
	/*新人福利券*/
	(function () {
		var timmer;
		var $mask = $('#mask');
		var $newPeople = $('#newPeople');
		var $close = $('.close');

		timmer = setTimeout(show,2000);
		function show () {
			$mask.css('display','block');
			$newPeople.css('display','block');
			clearTimeout(timmer);
		}
		$close.on('click',function(){
			$mask.css('display','none');
			$newPeople.css('display','none');
		});


	})();
	/*点击购买会员卡*/
	(function(){
		var $phurchaseImedeiately = $('#search button');
		$phurchaseImedeiately.on('click',function(){
			
			window.location.href = './html/phurchaseCard.html';
		});
	})();
});