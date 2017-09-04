# Affordable Living Calculator Web Component

Demo of re-usable React component with multi-lingual form.

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

## Author
Lawrence Siden  
Westside Consulting LLC  
Ann Arbor, MI  
lsiden@gmail.com

## Copyright
Lawrence Siden, 2017

## License

No license.
