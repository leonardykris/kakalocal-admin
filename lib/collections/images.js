Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("imageStore")]
});

Images.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  },
  download: function() {
    return true;
  },
  fetch: null
});