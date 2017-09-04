# Multi-lingual React Form Component

Demo of re-usable React component with multi-lingual form.

Browse to https://lsiden.github.io/ to see a live demo.

## Description

This demo is derived from an actual project I am working on.

The page presents a simple form with several fields with validation logic,
and outside the form, a separate selector to select one of several available languages.
When the user selects a different language,
it re-renders the embedded form to show labels and error message in the selected language.

## Features

### Encapsulated connection to Redux store

It connects the component to a Redux store via the [react-redux](https://github.com/reactjs/react-redux) library.
It encapsulates this connection in a way that isolates it from any app that uses this component.

The component can do this because it will not share any state with the app that uses it.
It's only interface to its context is through its properties.

See [Wiki pages] for info about features of this demo
and some problems I had to solve.

## Getting Started

1. Download or clone this repository to a new project directory.
1. In the new project directory, run "yarn install".

Then:
* Type "yarn test" to run a single test.
* Type "yarn test:watch" for continuous integration.
* Type "yarn start" and open http://localhost:8080 in your browser.
* Type "yarn build" to build a dist/bundle.js
that can be imported into other apps to re-use the form
after you have customized it for your own needs.
* Type "yarn build:demo" to create dist/bundle.demo.js as a standalone demo, as I have.
I used the very cool [RawGit](https://rawgit.com/) to import it into my page.

## Log Messaging

To see log messages in the console testing or in the browser devtools console,
prepend "DEBUG=demo-form-component:*" to each of the above "yarn" commands.
You can replace the asterix a full name to see the debug output for only one module.
See the [visionmedia/debug](https://github.com/visionmedia/debug)
README for usage details and suggestions.

## Author

Lawrence Siden  
Westside Consulting LLC  
Ann Arbor, MI  
lsiden@gmail.com

## Copyright
Lawrence Siden, 2017

## License

[MIT](https://opensource.org/licenses/MIT)
