$(document).ready(function(){
	$('form').submit(function(event){
		// get form data
		var formData = {
			'firstname'			: $('input[name=FirstName]').val(),
			'lastname'			: $('input[name=LastName]').val(),
			'phone'					: $('input[name=Phone]').val(),
			'email'					: $('input[name=Email]').val(),
			'companyname'		: $('input[name=Company]').val(),
			'jobfunction'		: $('input[name=Job_Function]').val()
		};

		// process form
		$.ajax({
			type						: 'POST',
			url							: form.action, // url where we want to post
			data						: formData,
			dataType				: 'json',
			encode					: true
		})

			.done(function(data){

				// log data to console to see what is being sent
				console.log(data);

			});

		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});

});