$(function() {
	$('.change-devoured').on('click', function(event) {
		var id = $(this).data('id');
		var newDevour = $(this).data('newDevour');

		var newDevourType = {
			hungry: newDevour
		};

		$.ajax('/api/burgers/' + id, {
			type: 'PUT',
			data: newDevourType
		}).then(function() {
			location.reload();
		});
	});

	$('.create-form').on('submit', function(event) {
		event.preventDefault();

		var newBurger = {
			name: $('#burg').val().trim(),
			hungry: $('[name=hungry]:checked').val().trim()
		};

		$.ajax('/api/burgers', {
			type: 'POST',
			data: newBurger
		}).then(function() {
			location.reload();
		});
	});

	$('.delete-burger').on('click', function(event) {
		var id = $(this).data('id');

		$.ajax('/api/burgers/' + id, {
			type: 'DELETE'
		}).then(function() {
			location.reload();
		});
	});
});
