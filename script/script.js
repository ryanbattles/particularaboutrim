
	function clearText(field,text) 
	{
		 $(field).val(text==false ? '' : ($(field).val().length==0 ? text : $(field).val())); 
	}