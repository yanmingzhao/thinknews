$(function(){
	
	$.ajax({
		type:"post",
		url:"/index/newdata"
	}).then(function(data){
		$('select').html('');
		var str = '';
		$.each(data.data, function(i,n) {
			str+='<option value="'+n.id+'">'+n.type+'</option>'
		});
		$('select').html(str);
	})
	
	
	$('[type=submit]').click(function(){
		$('form').submit(function(){
			
			return false;
		})
	});
	
	
	
	
	
});