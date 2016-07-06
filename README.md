# Starability.css - Accessible rating with animations on top

Accessible rating forms with cute animations on top. Name is the combination of two words: star and accessibility (or ability in general, whatever pleases you). Starability ratings are done in pure HTML and CSS, and are accessible by keyboard, so even people using screen readers are able to use it. To achieve this effect I am using sibling combinators technique that was introduced by [Lea Verou](http://lea.verou.me) in ["Accessible star rating widget with pure CSS" blogpost](http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/). The goal of this small library was to combine this technique with neat animations and make it easy to quickly apply it to your website.

**Remember:** to submit the data you will need to add a bit of your own code. Here we have just a fieldset with collection of radio buttons, neatly styled.

## Demo

[You can check how Starability.css looks here.](http://lunarlogic.github.io/starability/)

## Folder Structure

**This step by step tutorial is based on an assumption that your file structure in project directory looks as it follows:**

* index.html
* /css
  * css file with chosen rating (eg.: starability-fade.min.css)
* /starability-images
  * icons.png
  * icons@2x.png
  * icons-checkmark.png *(include this file if you are going to use checkmark rating)*
  * icons-checkmar@2x.png *(include this file if you are going to use checkmark rating)*

If you have different file structure, remember to update file paths for icons (in css files) and css stylesheet link (in HTML <head>).

## How to use

1. [Copy the structure of HTML](https://github.com/LunarLogic/starability/blob/master/index.html) (fieldset and insides), to make sure the styles work correctly.  If you want more than one rating widget on the same page, remember that the **id's need to be different for each radio buttons collection**:

    ```html

    <fieldset class="starability-basic">
      <legend>First rating:</legend>
      <input type="radio" id="first-rate5" name="rating" value="5" />
      <label for="first-rate5" title="Amazing">5 stars</label>
      <input type="radio" id="first-rate4" name="rating" value="4" />
      <label for="first-rate4" title="Very good">4 stars</label>
      <input type="radio" id="first-rate3" name="rating" value="3" />
      <label for="first-rate3" title="Average">3 stars</label>
      <input type="radio" id="first-rate2" name="rating" value="2" />
      <label for="first-rate2" title="Not good">2 stars</label>
      <input type="radio" id="first-rate1" name="rating" value="1" />
      <label for="first-rate1" title="Terrible">1 star</label>
    </fieldset>

    <fieldset class="starability-basic">
      <legend>Second rating:</legend>
      <input type="radio" id="second-rate5" name="rating" value="5" />
      <label for="second-rate5" title="Amazing">5 stars</label>
      <input type="radio" id="second-rate4" name="rating" value="4" />
      <label for="second-rate4" title="Very good">4 stars</label>
      <input type="radio" id="second-rate3" name="rating" value="3" />
      <label for="second-rate3" title="Average">3 stars</label>
      <input type="radio" id="second-rate2" name="rating" value="2" />
      <label for="second-rate2" title="Not good">2 stars</label>
      <input type="radio" id="second-rate1" name="rating" value="1" />
      <label for="second-rate1" title="Terrible">1 star</label>
    </fieldset>
    ```


2. Add a stylesheet with a name of an animation works best for your app name inside your website's <head> element. There are [the minified versions](https://github.com/LunarLogic/starability/tree/master/starability-minified) or [standard css files](https://github.com/LunarLogic/starability/tree/master/starability-css). Let's say we want fading animation:

    ```html
    <head>
      <link rel="stylesheet" type="text/css" href="css/starability-fade.min.css"/>
    </head>
    ```

    If you wish to use more than one animation per website (better stick to one!), you can include the file with all of the animations combined:

    ```html
    <head>
      <link rel="stylesheet" type="text/css" href="css/starability-all.min.css"/>
    </head>
    ```


3. Add chosen rating version class name to the fieldset element in your HTML. For our fading animation you would have to add '.starability-fade' class:

    ```html
    <fieldset class="starability-fade">
    ```


4. Include icon files in your images directory. CSS files use a relative path "../images/icons.png". You might want to change that if your file structure looks different than one proposed at the top.

## List of rating animations

For now you can choose one of versions listed below. Go to [demo](http://lunarlogic.github.io/starability/) to see how they look.

  - starability-basic
  - starability-slot
  - starability-grow
  - starability-growRotate
  - starability-fade
  - starability-checkmark

## Supported browsers

Starability.css works in IE10+ and all modern browsers. If you want to support browsers below IE10, you should disable animations for them for example using [Modernizr](https://modernizr.com/).

## Disabling hover action

This rating system by default reacts to :hover, changing background image position. This is an operation that causes webiste repaints. If you want to make your website as light as possible, you can remove declaration that will highlight stars on hover:

```html
.starability-fade > input:hover ~ label {
  background-position: 0 -30px;
}
```

## Further customisation with SASS

If you are verse with SASS you can easily adjust rating widget to your needs, e.g. have 10 star based system or turn off outline and hover. It can be done by setting true/false values to the variables in [_variables.scss file](https://github.com/LunarLogic/starability/blob/master/starability-scss/_variables.scss) and running gulp task to process files. Of course to have 10 stars system you also need add additional radio inputs in your HTML.

If you are not using scss syntax, you can also have a 10 star based system. Just remember to change width of the fieldset element in your css, so that the stars would all fit it (for example for 10 stars width of fieldset should be 10x width of a star, so 300px).

## Changelog

Check what was changed in the newest version in the [Changelog](https://github.com/LunarLogic/starability/blob/master/CHANGELOG.md).

## License

The library is [licensed](https://github.com/LunarLogic/starability/blob/master/LICENSE) under [The MIT License (MIT)](http://choosealicense.com/licenses/mit/).

Go to [Lunar Logic website](http://www.lunarlogic.io/) to learn more [about us](http://www.lunarlogic.io/company) and [our work](http://www.lunarlogic.io/portfolio).
