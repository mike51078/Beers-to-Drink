$(function() {
	$('.burger_change').on('click', function(event) {
		event.preventDefault();
		var id = $(this).data('id');
		console.log(id);
		var newDevour = $(this).data('change');
		console.log(newDevour);

		if (newDevour == true) {
			newDevour == false;
		} else if (newDevour == false) {
			newDevour == true;
		}

		var newDevourType = {
			devoured: newDevour
		};

		$.ajax('/api/burgers/' + id, {
			type: 'PUT',
			data: newDevourType
		}).then(function() {
			location.reload();
		});
	});
});
