Meteor.methods({
	submitForm: function(doc) {
		console.log("Client has called submitForm method.")
		if (doc) {
			// console.log(doc);
			// check(doc, {
			// 	_id: String,
			// 	type: String,
			// 	firstName: String,
			// 	lastName: String,
			// 	pictureURL: String,
			// 	email: String,
			// });
			if (doc._id) {
				if (Guides.findOne({ _id: doc._id })) {
					console.log(doc._id + " already existed! It was last updated on " + doc.updatedAt + ".");
					doc.updatedAt = moment().format();

					Guides.update({ _id: doc._id }, { $set: doc }, function(error, result){
						if (error) {
							console.log(error);
						}
						else {
							console.log(result + " document(s) have been updated.");
						}
					});
				}
				else {
					console.log("Document with _id " + doc._id + " was not found.");
				}
			}
			else {
				// Assign _id here, because if it's in client it will keep spawning the _id even if selected user already have it
				doc._id = Random.id();
				doc.updatedAt = doc.createdAt = moment().format();

				Guides.insert(doc, function(error, result){
					if (error) {
						console.log(error);
					}
					else {
						console.log(result + " has been inserted.");
					}
				});
			}
		}
		else {
			console.log("Document does not exist.");
		}

	},
});