Template.guides.helpers({
	tableSettings: function() {
		return {
			collection: Collections.Guides,
			rowsPerPage: 10,
			showFilter: true,
			fields: [
				{ key: 'firstName', label: 'First Name' },
				{ key: 'lastName', label: 'Last Name' },
				{ key: 'phone', label: 'Contact No.' },
				{ key: 'email', label: 'Email' },
				{ key: 'country', label: 'Country' },
				{ key: 'city', label: 'City' },
				{ key: 'referrer', label: 'Referrer', hidden: true },
				{ key: 'remarks', label: 'Remarks', hidden: true },
				{
					key: 'updatedAt',
					label: 'Last Updated',
					fn: function(value) {
						return moment(value).fromNow();
					}
				},
			],
			showRowCount: true,
			showColumnToggles: true,
			class: 'table table-bordered table-hover col-sm-12 tr-pointer ',
		};
	},
	// selectedGuideDoc: function() {
	// 	return Guides.findOne(Session.get("selectedGuideId"));
	// },
	// isSelectedGuide: function() {
	// 	return Session.equals("selectedGuideId", this._id);
	// },
	// formType: function() {
	// 	if (Session.get("selectedGuideId")) {
	// 		return "update";
	// 	}
	// 	else {
	// 		return "insert";
	// 	}
	// },
});

Template.guides.events({
	'click tr': function(){
		// console.log(this._id);
		// Session.set("selectedGuideId", this._id);
		Router.go('guideDetails', { _id: this._id });
	},
	// 'click #resetForm': function(){
	// 	Session.set("selectedGuideId", null);
	// 	AutoForm.resetForm("guideForm");
	// }
});



Template.registerHelper("Schemas", Schemas);
Template.registerHelper("Collections", Collections);
