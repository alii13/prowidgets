![prowidgets](https://socialify.git.ci/alii13/prowidgets/image?description=1&descriptionEditable=Create%20personalized%20sliders%20to%20showcase%20your%20work%2C%20testimonials%2C%20pictures%20and%20much%20more%20inside%20notion.&font=Inter&forks=1&language=1&owner=1&pattern=Plus&stargazers=1&theme=Dark)
# Prowidgets.co

Prowidgets.co is made up on top of MERN stack. It supports both web and mobile.

It helps people to create personalized sliders to showcase your work, testimonials, pictures and much more inside notion 
eg: [notion slider](https://prowidgets.co/carousel/5x4HoXAK)

**Home view**

![Home view](https://i.ibb.co/jwPBSBw/prowidgets-home.gif)

**Inside view**

![Inside view](https://i.ibb.co/nmgwKT0/prowidgets.gif)

Features ✨:

- Google signup
- Google signin
- Logout
- Create flexible sliders
- 9+ cool sliders to choose from
- Upload your own photos to the slider
- Embed it into your notion document using link
- Sliders are updatable
- Can see all sliders which you created in your account ( live widgets section )
- Resizable slider panels for better visualization
- Toggle arrows, bullets
- Select your own bg color from color pallete for container
- Save slider in your account

### Features To Be Added

The following features are under development/open for contributions.Please first
create a feature issue to discuss about the feature you would like to take up.

- [ ] Testimonial slider
- [ ] Buttons
- [ ] Twitter shoutouts
- [ ] Social media share

### Running The Project

Prerequisites For uploading the image:
- Cloudinary account ( watch this video for setting up [cloudinary setup](https://www.youtube.com/watch?v=6uHfIv4981U) )
- For setting up google login ( read this [amazing article by shivanesh](https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del) )
- MongoDB account for storing the sliders

Prerequisites For Running The Project Locally:

- Node
- NPM
- Git


To clone this repository run:

```sh
$ git clone https://github.com/alii13/prowidgets.git
```

Head inside the cloned folder and install the dependencies using NPM

```sh
$ cd backend
$ npm install
```
```sh
$ cd ..
$ cd client
$ npm install
```

Next create a .env file in the root of the project directory, this is where you
will put all your prowidgets config keys, take each
property of the provided object and put it inside of the .env file like this:

```
REACT_APP_GOOGLE_CLIENT_ID=
REACT_APP_DOMAIN=https://prowidgets.co/
REACT_APP_CLOUDINARY_URL= https://api.cloudinary.com/v1_1/sliderso
 
```
For setting 

To start the server run :

```sh
$ cd backend
$ node index.js
```
Now go to the client Side

```sh
$ cd ..
$ cd client
$ npm start
```

Wait for a few minutes after which it should automatically spin up a development
server for you on the PORT:3000 & backend server on the PORT 5000 and take you to the login page

### Contributing

To contribute to this repository please first create an issue with the
appropriate template, after which you can directly fork this repository,make
changes and start a pull request to the master branch. Please also have a look
at our Contribution guidelines
[here](https://github.com/monizb/FireShort/blob/master/CONTRIBUTING.md)

### Live Demo

[https://prowidgets.co/](https://prowidgets.co/)

### License

MIT Licensed (Check
[here]())

## Contributors ✨

Thanks goes to these wonderful people
([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
   
  </tr>
  <tr>
   
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specification. Contributions of any kind welcome!
