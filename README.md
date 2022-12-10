# Portfolio Site

Made using NextJS, Typescript, Sanity Studio and Tailwind CSS.

See the live site at [http://www.emilioguarino.com] (http://www.emilioguarino.com)

## Helpful quirks to know about for updating with new projects or modifiying

In NextJS, using the `<Image />` component optimizes load time. Don't forget to whitelist URLs of remote images.

Image component doesn't seem to like certain Tailwind classes in the wrapper, e.g. you need to put "rounded-full" class in the `<Image />` component itself.

## To Add new content

Log into Sanity and add the content to it's respective category and it will populate on the front end of the site.

## To Add New Categories of to site

1. In the Sanity folder, add a new schema for whatever category of thing you want to create and import that into schema.js

2. Log into Sanity and add some data.

3. In the typings.d.ts add a new interface for data the api will check.

4. In the api folder, add a new endpoint to return that data from Sanity. Import the type from step 3.

5. In the utils folder, add a fetch function to return the data from the api

6. In index.tsx create a fetch request with getStaticProps for the new thing

7. Create a component and place it on the page where we want it to render

8. Pass data into component via props.

9. Add Menu Item if necessary

## Getting this to work

you will need to setup and configure Sanity Studio locally, then deploy and paste your projectId into the sanity.json

The contact form uses Nodemailer to send emails on the backend.

I recommend configuring a dedicated email just for the form to use. If you are using gmail, just pasting in a username and password will not work, you need to configure the account correctly. See their docs for instructions on how to do this.

## Deploying to Vercel

If you fork this and decide to use it yourself and deploy on Vercel, you will need to substitute your base URL or the page will render out with a 500 internal error.

First, deploy the app normally, then get your deployment URL from Vercel (you'll see the 500 error). On vercel.com under your project settings, go to Environment Variables, then you will need to paste in your base URL to get it to run.
