Template.footer.helpers({
	quote: function() {
		return Fake.fromArray([
			"Don't try to be original, just try to be good. - Paul Rand",
			"Simplicity and common sense should characterize planning and strategic direction. - Ingvar Kamprad",
			"If you don’t fail at least 90 percent of the time, you’re not aiming high enough. - Alan Kay",
			"I try to work the hardest I can without burning myself out. - Justin Kan",
			"You make your own luck. Every single minute of every day. - Hiten Shah",
			"Listen to your customers, not your competitors. - Joel Spolsky"
		]);
	},
	random: function() {
		return Fake.sentence([5]);
	}
});