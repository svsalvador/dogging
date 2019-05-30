# How to

First of all you must install firebase tool:

* `npm install -g firebase-tools`

And then you must make a login (this will web-prompt you tou authorize firebase from your google account):

* `firebase login`

## Base configuration

The application has a firebase initialization for you. You only has to include your firebase project
configuration into `config/environment.js`. This configuration is accesible through the firebase 
[console](https://console.firebase.google.com/u/0/) in `Settings -> Project config`. There, you must
click on `Add application`. Don't forget to check the Firebase Hosting check.

After that, you will find a `Firebase SDK snippet`. On `Configuration` option, you will see  something like this:

```
var ENV = {
  firebase: {
    apiKey: "xyz",
    authDomain: "YOUR-FIREBASE-APP.firebaseapp.com",
    databaseURL: "https://YOUR-FIREBASE-APP.firebaseio.com",
    projectId: "YOUR-FIREBASE-APP",
    storageBucket: "YOUR-FIREBASE-APP.appspot.com",
    messagingSenderId: "00000000000"
  }
```
If you don't have a project, click on `Add project` on th console main page and follow the instructions.

## Get a Cloud Storage bucket

You will have to give a bucket link to the config (field `storageBucket` in the config json).

To get this link, get to the Storage service in your main Project overview in the Firebase Console, then click on start.
Follow the instructions and you will get to another configuration window. Click on the chain icon to copy the storage link
(something like `gs://your-firebase-project.appspot.com`) and paste the link into de config json into `config/environment.js`.

## Create the Cloud Firestore database

Cloud Firestore is a non-relational database to support your app operations.

Access to Database service in your main Project overview in the Firebase Console and click "Create database". You
will be prompted about the database mode. For testing purposes I recomend the test mode. The database will be open to 
everyone but you can change this behaviour when you understand the access rules. Remember that this is not a safe mode 
for your database and everyone could see your data.

Once you have activated this service you don't have to include anything on your app to use (thanks to Emberfire).

## Set authentication mode

You must set the authentication mode to email/password option. Simply acces to Authentication service 
in your main Project overview in the Firebase Console and click on `Configure`, then active the email/password
option. Almost there...

## Use Firebase Hosting

Firebase gives to you a hosting service to deploy your app. Same as the other services, in your main Project overview 
in the Firebase Console, access the Hosting service, click on `Start` and finish the activation process. That's all.

I have preconfig your you some rules to make the Ember Single Page Application works in the `firebase.json`file.

## Cloud Functions
 
 Activate the Functions service, the same way you did with the Hosting Service.

## Deploy!

Now, you are ready to deploy your app to Firebase:

* `firebase deploy`

It will gives you an url. Checks everything is ok!


------------------------------------------------------------------------------------

# Ember part

This README outlines the details of collaborating on this Ember application.
A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd dogging`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
