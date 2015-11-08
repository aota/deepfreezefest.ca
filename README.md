# Deep Freeze Festival

## Content Editing

Most content edits can be made via [Prose](http://prose.io). Use the [AOTA](https://github.com/aota) account.


## Built with Jekyll for Github Pages

Using the [Github Pages gem][pages-gem].

To match the live Github Pages environment, run `bundle update`. To run the Jekyll development server run:

```
jekyll serve --watch
```

...then load [localhost:4000](localhost:4000).

## Marked-up with Foundation

[Foundation 4][foundation], to be specific.

Sass compilation is handled automatically by Jekyll. The base file is `assets/css/main.scss` and the include directory is `assets/_sass/`.   See [Jekyll's documentation][jekyll-sass].

### Sass mixins from Bourbon.io

See [Bourbon.io][bourbon].


## Generating Map tiles

Read [this](http://macwright.org/2012/08/13/images-as-maps.html) and [this](http://build-failed.blogspot.ca/2012/11/zoomable-image-with-leaflet.html).

These are the commands to generate new map tiles. Source files not included; `df2014-map.jpg` just needs to be a big jpg (this one was 4933 by 5483 px). You'll need [GDAL](http://www.gdal.org/): `brew update && brew install gdal`.

```shell
python togeo.py df2014-map.jpg
gdal2tiles.py -p raster df2014-map.jpg.tif maptiles
```


[foundation]: http://foundation.zurb.com/
[jekyll-sass]: http://jekyllrb.com/docs/assets/
[bourbon]: http://bourbon.io/docs/
[pages-gem]: https://github.com/github/pages-gem
