# Downtown ReactJS ATX 

## Setup
* clone repo
* `npm install`
* `npm start`

Open browser to `localhost:8000`

## Background

Downtown ReactJS ATX Meetup webpage as an introduction to ReactJS.

Sections
* Splash
* Community
* Join
* Partnership
* Speakers
* About Us

## Project Details

* Fonts
* Layout/Grid
* Images
* API Schema

### Fonts

### Layouts

Layouts are more of an art than a science. They are dependent on the content. Usually, the design team is working with a layout system which the developers implement with CSS. 

Once the layouts are fixed for the target sizes use CSS Grids & Flex-box to implement

#### for Web

For a screen size of 1440px, a layout of 6 columns with a gutter size of 24px gives a based unit of 98px. This can be harmonized with a 2-1-1-2-2-1-1-2 column metric.

#### for Mobile

For a screen size of 375px, a layout of 16 columns with a gutter size of 9px gives a based unit of 15px. This can be harmonized with a 1-1-3-1-2-2-1-3-1-1 column metric, a 10 column layout. A 1-1-2-4-4-2-1-1 harmonic can also be used, which results in a 8 column layout with the same base unit.

### Images

* ReactJS-Meetup Logo
* Gitter Logo
* Host & Co-Host

### API Schema

* Join Submission
* Parternship Form
* Speaker Form

#### Join Submission
```
POST
{
  email: String-maxLen(64)-required
}
```

#### Partnership Form
```
POST
{
  name: String-maxLen(64)-required,
  email: String-maxLen(64)-required,
  jobTitle: String-maxLen(64),
  company: String-maxLen(64),
  partnership: [Enum(String-'venue', 'food', 'drinks', 'speakers', 'workshop', 'hackathon')]-maxLen(6)-required
}
```

#### Speaker Form
```
Post
{
  name: String-maxLen(64)-required,
  email: String-maxLen(64)-required,
  jobTitle: String-maxLen(64),
  company: String-maxLen(64),
  experience: Enum(String, '< 6 months', '< 1 year', '< 3 years', '< 5 years', '< 7 years', '> 7 years'),
  topic: String-maxLen(128),
  topicType: [Enum(String-'lightening', 'interactive', 'showcase', 'instructional', 'panel']-maxLen(5),
  topicDuration: Enum(String-'15min', '30-45min', '1hr', '> 1hr')
}
```

## Level-Up

* [BabelJS](https://babeljs.io/)
* [WebpackJS](https://webpack.js.org/)
* [React hot loader](https://github.com/gaearon/react-hot-loader)
* [Postcss](https://postcss.org/)

### CSS

* [Guide to grids](https://css-tricks.com/snippets/css/complete-guide-grid/)
* [Break points](https://getflywheel.com/layout/css-breakpoints-responsive-design-how-to)
* [Viewport units](https://css-tricks.com/fun-viewport-units/)
* [Modular scale](https://www.modularscale.com/?16&px&1.5)
* [Unicode check](https://www.htmlsymbols.xyz/unicode/U+2713)
* [Styling Checkboxes](https://dev.to/proticm/styling-html-checkboxes-is-super-easy-302o)
* [CSS Tree menu](https://www.thecssninja.com/css/css-tree-menu)
* [CSS Folding list](http://bradclicks.com/CSSplay/foldingList.html)
* [Button role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role)
