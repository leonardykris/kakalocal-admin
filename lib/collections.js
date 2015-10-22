// Guides = new Mongo.Collection('guides');
Collections = {};
Schemas = {};

Schemas.GuideForm = new SimpleSchema({
    _id: {
        type: String,
        optional: true,
        autoform: {
            type: "hidden",
        }
    },
    type: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "boolean-radios",
                trueLabel: "Individual",
                falseLabel: "Organization",
                value: function() {
                    return true;
                },
            }
        },
    },
    firstName: {
        type: String,
        // optional: true,
    },
    lastName: {
        type: String,
        optional: true,
    },
    pictureURL: {
        type: String,
        optional: true,
        autoform: {
            label: "Picture URL",
        }
    },
    phone: {
        type: String,
        optional: true,
    },
    email: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "email"
            }
        }
    },
    country: {
        type: String,
        // optional: true,
        allowedValues: ["Phillipines", "Malaysia", "Singapore", "Vietnam", "Indonesia", "Thailand", "Laos", "Myanmar"]
    },
    city: {
        type: String,
        // optional: true,
        allowedValues: [ "Cebu", "Davao", "Iligan", "Lucena", "Manila", "Singapore"]
    },
    remarks: {
        type: String,
        optional: true,
        allowedValues: ["To be contacted", "Contacted (no reply)", "Contacted (going to meet)", "Met (turned down)", "Met (up to be a guide)", "Game (preparing)", "Game (ready)"],
    },
    referrer: {
        type: String,
        optional: true,
        allowedValues: ["Andrew", "Candice", "Juliene", "Mark", "CC"],
    },
    status: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    },
    activities: {
        type: Array,
        optional: true,
    },
    'activities.$': {
        type: Object
    },
    'activities.$.name': {
        type: String
    },
    'activities.$.charge': {
        type: Number
    },
    traits: {
        type: Array,
        optional: true,
    },
    'traits.$': {
        type: Object
    },
    'traits.$.specialties': {
        type: String
    },
    updatedAt: {
        type: Date,
        optional: true,
        autoform: {
            type: "hidden",
        }
    },
    createdAt: {
        type: Date,
        optional: true,
        autoform: {
            type: "hidden",
        }
    },

});

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

// if (Meteor.isServer) {

// }

// console.log(moment().format('YYYY-MM-D'));
