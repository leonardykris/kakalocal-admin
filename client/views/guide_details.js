Template.guideDetails.helpers({
	selectedGuideDoc: function() {
		return this;
	},
});

Template.guideDetails.onRendered(function() {
	$('.autoform-add-item').removeClass('btn-primary').addClass('btn-default');
	$('.autoform-remove-item').removeClass('btn-primary').addClass('btn-default');
});

Template.guideDetails.events({
	'click .autoform-add-item': function () {
		$('.autoform-remove-item').removeClass('btn-primary').addClass('btn-default');
	},
});