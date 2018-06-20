# Change Log
All changes will be listed here (since version v.0.1.0)
Project uses [Semantic Versioning](http://semver.org/).

## [2.4.0] - 2018-06-20
### Added
- Add support for disabled state on hover.

### Changed
- Update README with information how to support half-stars in rating results.
- Update README with information about contributors.

### Fixed
- Starability result uses images that support high pixel density screens thanks to [Mislav Marohnić](https://github.com/mislav)

## [2.3.0] - 2018-01-15
### Added
- Add animation coinFlip proposed by [Paulina Materna](https://github.com/paulinamaterna)

## [2.2.0] - 2018-01-10
### Changed
- Elminate browser repaints by adding "will-change: contents" to fieldsets with animation and changing the way animated pseudoelements are applied.

### Fixed
- Fix Autoprefixer build.
- Fix "heart" animation in Safari.

## [2.1.1] - 2017-11-11
### Added
- An outline around all stars after user focuses on the fieldset with keyboard.

## [2.1.0] - 2017-10-23
### Added
- Empty input to have no rating at all as a starting point.

## [2.0.0] - 2017-06-12
### Changed
- The library does not rely on the reversed order of inputs any more. This means that arrow keys are moving the stars in the right direction. To make it work visually, there was a need for a small CSS hack (adding pseudoelement with a background covering the stars to the left to make them highlighted), but the library is more user-friendly and supports Accessibility better than ever. For projects with the HTML structure from the previous version: the library still behaves the same and works, but it is  better to update the inputs' order to get the correct arrow behaviour.

## [1.3.2] - 2017-02-14
### Changed
- Add image variable name as a parameter in starability-animation-base mixin.

## [1.3.0] - 2017-02-14
### Added
- Add heartbeat animation.
- Add heart animation.

## [1.2.0] - 2017-02-02
### Added
- Add an example of showing the static rating with the corresponding 'starability-result' class.

## [1.1.1] - 2017-02-02
### Changed
- Remove aria-label attribute. It caused Chrome to skip reading the labels via Voice Over.

## [1.1.0] - 2017-02-01
### Changed
- Remove external images, store images using base64 encoding.

## [0.1.0] - 2016-05-19
### Added
- Library created.
- CHANGELOG.md, README.md, LICENSE.md files.
- Rating animations: basic, fade, grow, growRotate, slot, checkmark.
- index.html file with basic structure needed to use library.
- Gulpfile.js to generate css in expanded and minified version.
