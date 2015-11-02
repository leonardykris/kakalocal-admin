Meteor.publish("guides", function() {
    return Guides.find();
});

Meteor.publish("images", function() {
    return Images.find();
});