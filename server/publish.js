Meteor.publish("guides", function() {
    return Guides.find();
});