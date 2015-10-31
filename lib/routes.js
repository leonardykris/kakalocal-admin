Router.configure({
  layoutTemplate: 'masterLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'pageNotFound',
  yieldTemplates: {
    nav: {
      to: 'nav'
    },
    footer: {
      to: 'footer'
    },
  },
  waitOn: function() {
    // console.log('Iron router start');
    return [
      Meteor.subscribe("guides")
    ]
  },
  action: function() {
    if (this.ready()) {
      this.render("home");
    } else {
      this.render("loading");
    }
  }
});

Router.map(function() {
  this.route('home', {
    path: '/',
  });

  this.route('general');
  this.route('guides');
  this.route('guideDetails', {
    path: 'guides/:_id',
    template: 'guideDetails',
    data: function(){
      if (this.params._id === "new"){
        return null;
      } else {
        return Guides.findOne(this.params._id);
      }
    }
  });
});

Router.plugin('ensureSignedIn', {
  only: ['general', 'guides']
});

Router.onBeforeAction(function() {
  if (Meteor.loggingIn()) {
    this.render('loading');
  } else if (Meteor.user() && !Meteor.user().emails[0].verified) {
    // this.render('verifyEmail');
    Accounts.verifyEmail;
  } else {
    this.next();
  }
});

//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');


AccountsTemplates.configure({
  texts: {
    title: {
      signIn: "",
    }
  },
  forbidClientAccountCreation: true,
});