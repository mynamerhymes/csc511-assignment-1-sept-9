# assignment-one-final

This is a basic time and date application that pulls the local time from your computer.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd assignment-one-final`
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

To deploy the application use the installation documentation to install the fundamentals, after all prerequesites have been met run ember server in the terminal where your local app repo is located and run http://localhost:4200. The time will display based on your local computer's time and a another time zone with the ability to refresh. What was done to get this working was to create a simple ember component by navigating to the root folder where your ember app is and using ember generate component timer-tracker. After generating this component, javascript date and time functions were used to implement the date and time. To update the time a refresh button was added and tracking were added to the variables so that a refresh function could be implemented. these components were used in the handle bars files of the app and a simple action button was used for a refresh. 

## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
