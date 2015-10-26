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
        autoform: {
            label: "First Name",
        }
    },
    lastName: {
        type: String,
        optional: true,
        autoform: {
            label: "Last Name",
        }
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
        autoform: {
            afFieldInput: {
                type: "tel",
            },
            label: "Phone Number",
        }
    },
    email: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "email"
            },
            label: "Email Address"
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
        allowedValues: [ "Cebu", "Davao", "Iligan", "Lucena", "Manila", "Singapore", "Tarlac", "Pampanga"]
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
                type: "textarea",
            }
        }
    },
    description: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "textarea",
            }
        }
    },
    feePerDay: {
        type: Number,
        optional: true,
        autoform: {
            label: "Fee/Day ($)"
        }
    },
    languages: {
        type: Array,
        optional: true,
    },
    'languages.$': {
        type: Object,
    },
    'languages.$.name': {
        type: String,
    },
    tags: {
        type: Array,
        optional: true,
    },
    'tags.$': {
        type: Object,
    },
    'tags.$.description': {
        type: String,
    },
    highlights: {
        type: Array,
        optional: true,
    },
    'highlights.$': {
        type: Object,
    },
    'highlights.$.description': {
        type: String,
    },
    inclusions: {
        type: Array,
        optional: true,
    },
    'inclusions.$': {
        type: Object,
    },
    'inclusions.$.description': {
        type: String,
    },
    exclusions: {
        type: Array,
        optional: true,
    },
    'exclusions.$': {
        type: Object,
    },
    'exclusions.$.description': {
        type: String,
    },
    experiences: {
        type: Array,
        optional: true,
    },
    'experiences.$': {
        type: Object,
    },
    'experiences.$.description': {
        type: String,
    },
    'experiences.$.duration': {
        type: String,
    },
    certifications: {
        type: Array,
        optional: true,
    },
    'certifications.$': {
        type: Object,
        autoform: {
            label: "Accreditations/Certifications"
        }
    },
    'certifications.$.description': {
        type: String,
    },
    'certifications.$.supportingLink': {
        type: String,
        autoform: {
            label: "Supporting Link"
        }
    },
    activities: {
        type: Array,
        optional: true,
    },
    'activities.$': {
        type: Object
    },
    'activities.$.time': {
        type: String,
        autoform: {
            afFieldInput: {
                type: "time"
            }
        }
    },
    'activities.$.description': {
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
