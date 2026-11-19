
	document.addEventListener('DOMContentLoaded', function() {
		var years = document.querySelectorAll('.footer .year');
		for (var i = 0; i < years.length; i++) {
			years[i].textContent = new Date().getFullYear();
		}

		// Scale the original slider as a whole so its fixed-size transitions still align.
		var slider = document.getElementById('slider');
		if (slider) {
			var wrapper = document.getElementById('sliderWrapper');
			var resizeSlider = function() {
				var scale = Math.min(1, wrapper.clientWidth / 960);
				var compact = window.matchMedia('(max-width: 991px)').matches;
				slider.style.transform = compact ? 'scale(' + scale + ')' : '';
				wrapper.style.height = compact ? 350 * scale + 70 + 'px' : '';
				var controls = slider.querySelector('.nivo-controlNav');
				if (controls) {
					controls.style.transform = compact ? 'translateX(-50%) scale(' + 1 / scale + ')' : '';
					controls.style.bottom = compact ? -50 / scale + 'px' : '';
				}
			};
			window.addEventListener('load', resizeSlider);
			window.addEventListener('resize', resizeSlider);
			resizeSlider();
		}
	});

	function clearText(field,text) 
	{
		 $(field).val(text==false ? '' : ($(field).val().length==0 ? text : $(field).val())); 
	}
