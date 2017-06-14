
$(document).ready(function() 
{					
	$('div.image').hover(function()
	{
		var section=$(document.createElement('div'));

		section.attr('class','imageHover');
				
		section.css('width',$(this).find('img').width());
		section.css('height',$(this).find('img').height());
							
		section.css('opacity','0.5').fadeIn(200);
		
		$(this).append(section);	
		$(this).one('click',function() { $(this).find('a').trigger('click'); });	
								
	},function() { $(this).find('.imageHover').fadeOut(200,function() { $(this).remove(); }); });

	$('div.image a[rel=gallery],div.image a').fancybox(
	{
		'titleShow'     	: false,
		'transitionIn'		: 'elastic',
		'transitionOut'	: 'elastic',
		'easingIn'      	: 'easeOutBack',
		'easingOut'     	: 'easeInBack'
	});					
});