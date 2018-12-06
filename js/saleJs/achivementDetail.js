$(function(){
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
	});
	$monthBtn.on('click',function(){
		showPicker($monthPicker,$monthUl);
		$YearPicker.hide();
	});
	$yearLis.on('click',function (){
		$YearPicker.hide();
		$yearBtn.html($(this).html()+'年');
	});
	$monthLis.on('click',function (){
		$monthPicker.hide();
		$monthBtn.html($(this).html()+'月');
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
	}
});