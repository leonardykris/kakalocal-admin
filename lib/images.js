if (Meteor.isServer) {
  var imageStore = new FS.Store.S3("images", {
    // AWS credentials required here
    accessKeyId: Meteor.settings.AWSAccessKeyId,
    secretAccessKey: Meteor.settings.AWSSecretAccessKey,
    bucket: Meteor.settings.AWSBucket,
  });

  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      }
    }
  });
}

// On client we will only create a generic FS Store as we don't have access to S3 and we don't want client to get access to the AWS S3 settings either
if (Meteor.isClient) {
  var imageStore = new FS.Store.S3("images");
  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      },
      onInvalid: function(message) {
        toastr.error(message);
      }
    }
  });
}

Images.allow({
  insert: function() {
    return true;
  },
  update: function() {
    return true;
  },
  download: function() {
    return true;
  },
});