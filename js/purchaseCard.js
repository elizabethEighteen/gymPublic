$(function(){
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



	/**/
	(function () {
		var $mask = $('#mask');
		var $useInstructionBtn = $('#con .useDirection');//使用说明按钮
		var $phurchase = $('#con .phurchase');//购买按钮
		var $writeInfo = $('#writeInfo')//填写购买信息
		var $sureButton = $writeInfo.find('.sure');//确认购买按钮
		var $pay = $('#pay');//支付弹窗
		var $close = $pay.find('.close');
		var $coupon = $pay.find('.coupon');//选择优惠券
		var $useInstruction = $('#useInstruction');
		var $isUseInstruction = false;
		var isLogin = true;

		$phurchase.on('click',function () {
			if (!isLogin) {
				/*提醒登录*/
				var $login = $('#login');
				var $cancel = $login.find('.cancel');
				var $sure = $login.find('.sure');
				$mask.css('display','block');
				$login.css('display','block');
				
				$cancel.on('click',function () {
					$mask.css('display','none');
					$login.css('display','none');
				});
				$sure.on('click',function(){
					window.location.href = '../html/login.html';
				});	
			}else{
				$mask.css('display','block');
				$writeInfo.css('display','block');
				$('#writeInfo .genderPicker').css('display','none');
				$('#writeInfo .gradePicker').css('display','none');
				stopScroll();
			}
			
		});//点击购买
		$sureButton.on('click',function(){
			$writeInfo.css('display','none');
			$pay.css('display','block');
		});//点击确认按钮
		$close.on('click',function(){
			$pay.css('display','none');
			$mask.css('display','none');
			recoverScroll();
		});
		$coupon.on('click',function(){
			window.location.href = '../html/chooseConpou.html'
		});//点击选择优惠券


		$useInstructionBtn.on('click',function (){
			$mask.css('display','block');
			$useInstruction.css('display','block');
			$isUseInstruction = true;
			stopScroll();
		});
		$mask.on('click',function(){
			if ($isUseInstruction) {
				$mask.css('display','none');
				$useInstruction.css('display','none');
				$isUseInstruction = false;
				recoverScroll();
			}else{
				return;
			}			
		});
		/*切换支付方式*/
		(function(){
			var $payStyleBtns = $('#pay li strong');
			$payStyleBtns.on('click',function(){
				$payStyleBtns.each(function(){
					$(this).removeClass('active');
				});
				$(this).addClass('active');
			});
		})();
		
	})();
	/*picker*/
	(function (){
		var $genderBtn = $('#writeInfo .genderSelector');
		var $gradeBtn = $('#writeInfo .gradeSelector');
		var $genderPicker = $('#writeInfo .genderPicker');
		var $gradePicker = $('#writeInfo .gradePicker');
		var $genderLis = $genderPicker.find('li');
		var $gradeUl = $gradePicker.find('ul');
		var $gradeLis = $gradePicker.find('li');
		/*gender*/
		$genderBtn.on('click',function(){
			$genderPicker.toggle();
			$gradePicker.hide();
		});
		$genderLis.on('click',function(){
			$genderBtn.html($(this).html()+`<strong></strong>`);
			$genderPicker.hide();
		});
		/*grade*/
		$gradeBtn.on('click',function(){
			showPicker($gradePicker,$gradeUl);
			$genderPicker.hide();
			$gradeUl.css('top',0);
		});
		$gradeLis.on('click',function(){
			$gradePicker.hide();		
			$gradeBtn.html($(this).html()+`<strong></strong>`);
		});
		/*选择年级按钮点击*/
		function showPicker(pickerName,ulName) {
			var oUl = ulName[0];
			var n = 0;
			pickerName.toggle();

			oUl.onmousewheel = fn;
			if (oUl.addEventListener) {
				oUl.addEventListener('DOMMouseScroll', fn, false);
			}
			function fn(ev) {
				var ev = ev || event;
				var b = true;			
				if (ev.wheelDelta) {
					b = ev.wheelDelta > 0 ? true : false;
				} else {
					b = ev.detail < 0 ? true : false;
				}			
				if ( b ) {
					n++;
					n = n>0 ? 0 : n;
					ulName.css('top',n*10);
				} else {
					n--;
					n = n<-14 ? -14 : n;
					ulName.css('top',n*10);
				}
				if (ev.preventDefault) {
					ev.preventDefault();
				}
				return false;	
			}
			var x,endx;
			var nowtop = parseInt($gradeUl.css('top'));
			oUl.addEventListener('touchstart',function(ev){
				var touch = ev.targetTouches[0];
				 x = parseInt(touch.pageY);
				 nowtop = parseInt($gradeUl.css('top'));
				
			});
			oUl.addEventListener('touchmove',function(ev){
				var touch = ev.targetTouches[0];
				endx = parseInt(touch.pageY);				
				var disx = endx - x;
				var temp = disx+nowtop;
				if (temp > 0) {
					temp = 0;
				}else {
					temp = temp<-185? -185: temp;
				}

				$(oUl).css('top',temp);
			});
		}
	})();
});