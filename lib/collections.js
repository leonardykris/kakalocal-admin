// Guides = new Mongo.Collection('guides');
Collections = {};
Schemas = {};

Schemas.GuideForm = new SimpleSchema({
    _id: {
        type: String,
        autoform: {
            type: "hidden",
            value: function() {
                return Random.id();
            }
        }
    },
    type: {
        type: String,
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
        type: String
    },
    lastName: {
        type: String
    },
    pictureURL: {
        type: String
    },
    email: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "email"
            }
        }
    },
    phone: {
        type: String,
    },
    country: {
        type: String,
        allowedValues: ["Phillipines", "Malaysia", "Singapore", "Vietnam", "Indonesia", "Thailand", "Laos", "Myanmar"]
    },
    city: {
        type: String,
        allowedValues: ["Manila", "Cebu", "Davao", "Lucena", "Iligan"]
    },
    remarks: {
        type: String,
        allowedValues: ["To be contacted", "Contacted (no reply)", "Contacted (going to meet)", "Met (turned down)", "Met (up to be a guide)", "Game (preparing)", "Game (ready)"],
    },
    referrer: {
        type: String,
        allowedValues: ["Andrew", "Candice", "Juliene", "Mark", "CC"],
    },
    status: {
        type: String,
        autoform: {
            afFieldInput: {
                type: "textarea"
            }
        }
    },
    activities: {
        type: Array,
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
    },
    'traits.$': {
        type: Object
    },
    'traits.$.specialties': {
        type: String
    },
    updatedAt: {
        type: Date,
        autoform: {
            type: "hidden",
            afFieldInput: {
                value: function() {
                    return moment().format();
                }
            }
        }
    },
    createdAt: {
        type: Date,
        autoform: {
            type: "hidden"
        }
    },

});

Guides = Collections.Guides = new Mongo.Collection("guides");
Guides.attachSchema(Schemas.GuideForm);
Guides.allow({
    insert: function() {
        return true;
    },
    remove: function() {
        return true;
    },
});

if (Meteor.isServer) {
    Meteor.publish("guides", function() {
        return Guides.find();
    });
}

// console.log(moment().format('YYYY-MM-D'));
