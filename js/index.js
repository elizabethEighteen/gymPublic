$(function () {
	/*mask高度计算*/
	(function () {
		var $mask = $('#mask');
		var $screenHeight = $(document).height()
		$mask.height($screenHeight);
	})();
	function stopScroll() {
    // 弹出时
	    $('body').on('touchmove', preventDefaultFn);
	    $('body').css({
	        'overflow': 'hidden'
	    })
	}

	function recoverScroll() {
	    // 隐藏时
	    $('body').off('touchmove', preventDefaultFn);
	    $('body').css({
	        'overflow': 'auto'
	    })
	}
	function preventDefaultFn(event) {
	    event.preventDefault();
	}

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
			stopScroll();
		}
		$close.on('click',function(){
			$mask.css('display','none');
			$newPeople.css('display','none');
			recoverScroll();
		});


	})();
	/*点击购买会员卡*/
	(function(){
		var $phurchaseImedeiately = $('#search button');
		$phurchaseImedeiately.on('click',function(){
			
			window.location.href = './html/phurchaseCard.html';
		});
	})();
	/*提醒登录*/
	// (function (){
	// 	var $lis = $('#content li');
	// 	var $mask = $('#mask');
	// 	var $login = $('#login');
	// 	var $cancel = $login.find('.cancel');
	// 	var $sure = $login.find('.sure');
	// 	$lis.on('click',function(){
	// 		$mask.css('display','block');
	// 		$login.css('display','block');
	// 	});
	// 	$cancel.on('click',function () {
	// 		$mask.css('display','none');
	// 		$login.css('display','none');
	// 	});
	// 	$sure.on('click',function(){
	// 		window.location.href = './html/login.html';
	// 	});
	// })();
	/*扫码进场*/
	(function (){
		var $tip = $('#tip');
		var timmer = null;
		$('#banner').on('click',function(){
			clearInterval(timmer);
			$tip.show();
			timmer = setTimeout(function(){
				$tip.hide();
			},3000);
		});
	})();
	/*底部tab*/
	(function (){
		var $indexBtn = $('#tab .index');
		var $mineBtn = $('#tab .mine');
		$indexBtn.on('click',function (){
			window.location.href = './index.html';
		});
		$mineBtn.on('click',function (){
			window.location.href = './html/mine.html';
		});
	})();
});