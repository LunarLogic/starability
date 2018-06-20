# Starability.css - Accessible rating with animations on top

![](https://raw.githubusercontent.com/LunarLogic/starability/master/gh-images/starability-showcase.gif)

Accessible rating forms with cute animations on top. The name is the combination of two words: star and accessibility (or ability in general, whatever pleases you). Starability ratings are made with HTML, CSS (no JavaScript), and are accessible by keyboard, so even people using screen readers are able to use them. To achieve this effect I am using the sibling combinators technique that was introduced by [Lea Verou](http://lea.verou.me) in ["Accessible star rating widget with pure CSS" blogpost](http://lea.verou.me/2011/08/accessible-star-rating-widget-with-pure-css/), but it is bit upgraded: does not rely on a reverse order of the inputs, what makes it even more accessible. The goal of this small library was to combine the Lea's technique with neat animations and make it easy to quickly use it on your website.

**Remember:** to submit the data you will need to add a bit of your own code. Here we have just a fieldset with a collection of radio buttons, neatly styled. **There are no dependencies in this library.**

**Important:** The library does not rely on a reverse order of inputs any more. This means that the issue with the keyboard arrows moving in a reverse direction is no longer there. It is strongly advised to update the HTML structure in your project, although the updated CSS doesn't break the functionality even for [the previous version of HTML markup](https://github.com/LunarLogic/starability/blob/f3b34818d6b704465278f69dde506c78a6a6f444/README.md#how-to-use).

## Demo

[You can check how Starability.css looks here.](http://lunarlogic.github.io/starability/)

## Folder Structure

**This step by step tutorial is based on an assumption that project directory structure looks as follows:**

* index.html
* /css
  * css file with chosen rating (eg.: starability-fade.min.css)

If you have a different file structure, remember to update file path for CSS stylesheet links (in HTML `<head>`).

## How to use

1. [Copy the structure of HTML](https://github.com/LunarLogic/starability/blob/master/index.html) (fieldset and insides), to make sure the styles work correctly.  If you want more than one rating widget on the same page, remember that the **id's need to be different for each radio buttons collection**:

    ```html

    <fieldset class="starability-basic">
      <legend>First rating:</legend>
      <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
      <input type="radio" id="first-rate1" name="rating" value="1" />
      <label for="first-rate1" title="Terrible">1 star</label>
      <input type="radio" id="first-rate2" name="rating" value="2" />
      <label for="first-rate2" title="Not good">2 stars</label>
      <input type="radio" id="first-rate3" name="rating" value="3" />
      <label for="first-rate3" title="Average">3 stars</label>
      <input type="radio" id="first-rate4" name="rating" value="4" />
      <label for="first-rate4" title="Very good">4 stars</label>
      <input type="radio" id="first-rate5" name="rating" value="5" />
      <label for="first-rate5" title="Amazing">5 stars</label>
    </fieldset>

    <fieldset class="starability-basic">
      <legend>First rating:</legend>
      <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
      <input type="radio" id="second-rate1" name="rating" value="1" />
      <label for="second-rate1" title="Terrible">1 star</label>
      <input type="radio" id="second-rate2" name="rating" value="2" />
      <label for="second-rate2" title="Not good">2 stars</label>
      <input type="radio" id="second-rate3" name="rating" value="3" />
      <label for="second-rate3" title="Average">3 stars</label>
      <input type="radio" id="second-rate4" name="rating" value="4" />
      <label for="second-rate4" title="Very good">4 stars</label>
      <input type="radio" id="second-rate5" name="rating" value="5" />
      <label for="second-rate5" title="Amazing">5 stars</label>
    </fieldset>
    ```

2. Add a stylesheet with a name of an animation that works best for your app name inside your website's `<head>` element. There are [the minified versions](https://github.com/LunarLogic/starability/tree/master/starability-minified) or [standard CSS files](https://github.com/LunarLogic/starability/tree/master/starability-css). Let's say we want a fading animation:

    ```html
    <head>
      <link rel="stylesheet" type="text/css" href="css/starability-fade.min.css"/>
    </head>
    ```

    If you wish to use more than one animation per website (though better stick to one!), you can include the file with all of the animations combined:

    ```html
    <head>
      <link rel="stylesheet" type="text/css" href="css/starability-all.min.css"/>
    </head>
    ```


3. Add the chosen rating version class name to the fieldset element in your HTML. For our fading animation you would have to add the `.starability-fade` class:

    ```html
    <fieldset class="starability-fade">
    ```

## List of rating animations

For now you can choose one of the animations listed below. Go to the [demo](http://lunarlogic.github.io/starability/) to see how they look.

  - starability-basic
  - starability-slot
  - starability-grow
  - starability-growRotate
  - starability-fade
  - starability-checkmark
  - starability-heart
  - starability-heartbeat
  - starability-coinFlip (by [Paulina Materna](https://github.com/paulinamaterna))

## Supported browsers

Starability.css works in IE10+ and all modern browsers. If you want to support browsers below IE10, you should disable animations for them, for example by using [Modernizr](https://modernizr.com/).

## Disabling hover action

This rating system by default reacts to `:hover`, changing the background image position. This is an operation that causes repaints. If you want to make your website as light as possible, you can remove declaration that will highlight stars on hover:

```css
.starability-fade > input:hover ~ label {
  background-position: 0 -30px;
}
```

## Accessible outline

By default, if user focuses with keyboard on the rating widget, there is an outline around all the stars to make it easier to navigate. This is not visible for users using only mouse. The function can be turned off by setting the `$accessible-focus-ring` variable to `false` in [_variables.scss file](https://github.com/LunarLogic/starability/blob/master/starability-scss/_variables.scss) and removing a span with `.starability-focus-ring` class from the HTML. It is not advised though to remove the outline.

![](https://raw.githubusercontent.com/LunarLogic/starability/master/gh-images/starability-focus-ring.png)

There is also another functionality that can be turned on by changing the `$accessible-outline` variable value to `true`. It will show an outline around active stars that are in the keyboard focus. It can enhance the widget's accessibility for some users.

![](https://raw.githubusercontent.com/LunarLogic/starability/master/gh-images/starability-accessibility-outline.png)

## Showing the static rating result

You can add the static results of the rating anywhere you need it. To indicate how many stars were added, change the `data-rating` value on an element with the `starability-result` class. Please note, that this supports only integer numbers. If you wish to show the results as the float numbers, you might need to use other solution.

```html
  <h3>Rated element name</h3>
  <p class="starability-result" data-rating="3">
    Rated: 3 stars
  </p>
```

There is no official support for half-stars, as we don't want to make the library output bigger than needed, but you can easily add the support for showing half-stars in the rating results. To do so, [check the answer in this issue](https://github.com/LunarLogic/starability/issues/26#issuecomment-367013528).

## Further customisation with SASS

If you are well-versed with SASS, you can easily adjust rating widget to your needs, e.g. have a 10-star based system or turn off outline and hover. It can be done by setting `true`/`false` values to the variables in the [_variables.scss file](https://github.com/LunarLogic/starability/blob/master/starability-scss/_variables.scss) and running the gulp task to process the files. Of course, to have a 10-stars system you also need add additional radio inputs in your HTML.

If you are not using SCSS syntax, you can also have a 10-star based system. Just remember to change the width of the fieldset element in your CSS, so that the stars would all fit it (for example for 10 stars, the width of fieldset should be 10x the width of a star, so 300px).

## Changelog

Check what was changed in the newest version in the [Changelog](https://github.com/LunarLogic/starability/blob/master/CHANGELOG.md).

## Contributors

The library wouldn't be what it is now without:

  - [Anna Migas](https://github.com/szynszyliszys)
  - [Paulina Materna](https://github.com/paulinamaterna)
  - [Scott O'Hara](https://github.com/scottaohara)
  - [Mislav Marohnić](https://github.com/mislav)
  - [Dan Dascalescu](https://github.com/dandv)
  - [Steve Lacey](https://github.com/stevelacey)
  - [Artur Parkhisenko](https://github.com/arturparkhisenko)
  - [Barry Els](https://github.com/barryels)
  - [Alex Carpenter](https://github.com/alexcarpenter)

## License

The library is [licensed](https://github.com/LunarLogic/starability/blob/master/LICENSE) under [The MIT License (MIT)](http://choosealicense.com/licenses/mit/).

Go to the [Lunar Logic website](http://www.lunarlogic.io/) to learn more [about us](http://www.lunarlogic.io/company) and [our work](http://www.lunarlogic.io/portfolio).
