$(function(){
	//处理加载的type数据
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
	//处理信息
	$('[type=submit]').click(function(e){
		if(window.value&&window.hello==undefined){
			alert('请先上传图片')
			return false;
		};
		var end = true;
		$('input[type=text],textarea').each(function(i,ele){
			if($.trim($(ele).val())==''||window.hello==undefined){
				alert('请输入内容');
				end = false;
				return false;
			}else{
				end = true;
			}
		});
		if(end){
			console.log($('form').serializeArray());
			$.ajax({
				type:"post",
				url:"/index/adddata",
				data:$('form').serializeArray()
			}).then(function(data){
				alert(data)
			})
		}
		return false;
	});
	
	
	
	
	
});