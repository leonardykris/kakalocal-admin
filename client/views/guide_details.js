Template.guideDetails.helpers({
	selectedGuideDoc: function() {
    // Check whether the page has a document loaded with it, passed by iron router
    if (this) { return this; }
    else { return null; }
	},
});

Template.guideDetails.onRendered(function() {
  // Change the colors of the + and - buttons
	$('.autoform-add-item').removeClass('btn-primary').addClass('btn-default');
	$('.autoform-remove-item').removeClass('btn-primary').addClass('btn-default');
});

Template.guideDetails.events({
	'click .autoform-add-item': function () {
		$('.autoform-remove-item').removeClass('btn-primary').addClass('btn-default');
	},
	'click #publishButton': function() {
    Meteor.call('publishGuide', this, true,
      function (error, result) {
        if (!error) { console.log(result); }
        else { console.log(error); }
      }
    );
  },
  'click #unPublishButton': function() {
    Meteor.call('publishGuide', this, false,
      function (error, result) {
        if (!error) { console.log(result); }
        else { console.log(error); }
      }
    );
	},
});