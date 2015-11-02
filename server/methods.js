Meteor.methods({
	submitForm: function(doc) {
		console.log("Client has called submitForm method.")
		if (doc) {
			try {
				check(doc, Schemas.GuideForm);
				Schemas.GuideForm.clean(doc);
				console.log(doc);
			} catch (e) {
				throw new Meteor.Error(e);
			}
			if (doc._id) {
				if (Guides.findOne({ _id: doc._id })) {
					console.log(doc._id + " exists! It was last updated on " + doc.updatedAt + ".");
					doc.updatedAt = moment().format();

					console.log(doc);
					Guides.update({ _id: doc._id }, { $set: doc }, function(error, result){
						if (error) {
							console.log("error");
						} else {
							console.log(result + " document(s) have been updated.");
						}
					});

					console.log("test after update")
				} else { console.log("Document with _id " + doc._id + " was not found."); }
			} else {
				// Assign _id here, because if it's in client it will keep spawning the _id even if selected user already have it
				doc._id = Random.id();
				doc.updatedAt = doc.createdAt = moment().format();
				console.log(doc);

				Guides.insert(doc, function(error, result){
					if (error) {
						console.log(error);
					} else {
						console.log(result + " has been inserted.");
					}
				});
			}
		} else { console.log("Document does not exist."); }
	},
	// This publishGuide method can both publish and unpublish a guide based on the params passed onto it
	publishGuide: function(doc, params) {
		console.log("Client has called publishGuide method.");
		check(params, Boolean);

		// We do triple checking here before get to update the collection
		// 1. Whether the document is properly passed
		// 2. Whether the document is a valid document with an _id, why?
		// 	2.1 Because an invalid document does not have an _id
		//	2.2 We only spawn an _id in the server once we have added a user
		// 3. Whether the document in the database that match the passed _id exists
		// Call me paranoid, but since I'm not doing check(doc, {params}) here I need all this
		if (doc) {
			if (doc._id) {
				if (Guides.findOne({ _id: doc._id })) {
					console.log(doc._id + " exists! It was last updated on " + doc.updatedAt + ".");
					doc.updatedAt = moment().format();

					Guides.update(
						{ _id: doc._id },
						{ $set: { isPublished: params }},
						function(error, result){
							if (!error) { console.log(result + " document(s) have been updated."); return true; }
							else { console.log(error); }
						}
					);
				} else { console.log("Document with _id " + doc._id + " was not found."); }
			} else { console.log("Invalid document."); }
		} else { console.log("Document does not exist."); }
	}
});