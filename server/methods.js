Meteor.methods({
	createNewGuide: function(params) {
		newGuide = Guides.insert(params);
	},
});