Template.guideDetails.helpers({
	selectedGuideDoc: function() {
    // Check whether the page has a document loaded with it, passed by iron router
    if (this) { return this; }
    else { return null; }
	},
  showPicture: function() {
    if (this.hasOwnProperty('pictureURL')) {
      var image = Images.findOne({ _id: this.pictureURL });
      return image;
    } else {
      return "No image was found.";
    }
  }
});

Template.guideDetails.onRendered(function() {
  // Run holder
  window.Holder.run();

  // Change the colors of the + and - buttons
	$('.autoform-add-item').removeClass('btn-primary').addClass('btn-default');
	$('.autoform-remove-item').removeClass('btn-primary').addClass('btn-default');

  // Add hooks for Meteor method
  AutoForm.addHooks(
    ["updateGuideForm"],
    {
      before   : {
        method: CfsAutoForm.Hooks.beforeInsert
      },
      after    : {
        method: CfsAutoForm.Hooks.afterInsert
      }
    }
  );
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