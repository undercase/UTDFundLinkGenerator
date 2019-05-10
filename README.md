# UTD Fund Link Generator

This is a tool to generate custom donation forms for the UTD Office of Development and Alumni Relations. It is deployed to [thomashobohm.com/UTDFundLinkGenerator](http://thomashobohm.com/UTDFundLinkGenerator/). Below are instructions for how to modify, build, and deploy this application.

## Modifying the Data

The data for the application is stored in three variables at the top of `App.js`: `giftAmounts`, `pledgeAmounts`, and `designations`. If you modify the values of these arrays / objects, your changes will be reflected in the frontend.

`giftAmounts`: These are the possible values that the donation amount can take if it is a one-time gift.

`pledgeAmounts`: These are the possible values that the donation amount can take if it is a subscription / pledge.

`designations`: These are the designation types, or areas the end user can choose to donate to.

## Installation and Testing

To install this application, clone this repository and run `npm i` in its directory to install the dependencies. Next, run `npm start` to start a React server with hot reloading. Then navigate to `localhost:3000` to see the application in action.

## Deployment

To deploy this application, run `npm build` to produce a static website in the `build` directory. Then run the command `git subtree push --prefix build origin gh-pages` to push that subtree to the `gh-pages` branch, so that your updates are reflected in the static website.

## Contact

Reach out to `undercase` with questions, comments, or concerns.
