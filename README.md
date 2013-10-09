# Deep Freeze Festival

## Content Editing

Most content edits can be made via [Prose](http://prose.io). Use the [AOTA](https://github.com/aota) account.


## Built with Jekyll for Github Pages

### Plugins

Because this site is built to be hosted on Github Pages we [cannot use Jekyll plugins][no-plugins]. However, certain plugins are _very_ useful and worth a little extra effort.

We're using a Sitemap generator plugin `_plugins/sitemap_generator.rb`; the catch being that it must be run locally and then commited just like a static page. At some point this could be combined with other automation tasks in a delpoy script. Note that this plugin has been altered from the [original][sitemap_gen].

## Marked-up with Foundation

[Foundation 4][foundation], to be specific.

## Sass mixins from Bourbon.io

See [Bourbon.io][bourbon]

To compile, run the following command from the root directory: `sass --watch assets/sass:assets/css --style compressed`

## Misc

Regex for wrapping `{10 mins}` found in schedule: `\{(\d+\s\w*)\}` replace with something like `<time class="timetable-duration">\1</time>`


[no-plugins]: http://jekyllrb.com/docs/plugins/
[sitemap_gen]: https://github.com/kinnetica/jekyll-plugins
[foundation]: http://foundation.zurb.com/
[bourbon]: http://bourbon.io/docs/
