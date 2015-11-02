Guides = Collections.Guides = new Mongo.Collection("guides");
Guides.attachSchema(Schemas.GuideForm);
Guides.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  },
});