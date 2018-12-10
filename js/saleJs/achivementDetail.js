$(function(){
	/*防止body滑动*/
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
	/*datePicker*/
	var $yearBtn = $('#head .year');
	var $monthBtn = $('#head .month');
	var $YearPicker = $('#datePickerYear');
	var $monthPicker = $('#datePickerMonth');
	var $yearUl =  $YearPicker.find('ul');
	var $monthUl =  $monthPicker.find('ul');
	var $yearLis = $yearUl.find('li');
	var $monthLis = $monthUl.find('li');

	$yearBtn.on('click',function(){
		showPicker($YearPicker,$yearUl);
		$monthPicker.hide();
		stopScroll();
	});
	$monthBtn.on('click',function(){
		showPicker($monthPicker,$monthUl);
		$YearPicker.hide();
		stopScroll();
	});
	$yearLis.on('click',function (){
		$YearPicker.hide();
		$yearBtn.html($(this).html()+'年');
		recoverScroll();
	});
	$monthLis.on('click',function (){
		$monthPicker.hide();
		$monthBtn.html($(this).html()+'月');
		recoverScroll();
	});							

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
		/*touch*/
		var x,endx;
		var nowtop = parseInt(ulName.css('top'));
		ulName[0].addEventListener('touchstart',function(ev){
			var touch = ev.targetTouches[0];
			 x = parseInt(touch.pageY);
			 nowtop = parseInt(ulName.css('top'));
			;
		});
		ulName[0].addEventListener('touchmove',function(ev){
			var touch = ev.targetTouches[0];
			endx = parseInt(touch.pageY);				
			var disx = endx - x;
			var temp = disx+nowtop;
			if (temp > 0) {
				temp = 0;
			}else {
				temp = temp<-140? -140: temp;
			}

			$(oUl).css('top',temp);
		});
	}
	/*提现阶梯*/
	(function(){
		var $withDrawFloorBtn = $('#conTime .title');
		$withDrawFloorBtn.on('click',function(){
			window.location.href = '../../html/useInstruction.html';
		});
	})();
});