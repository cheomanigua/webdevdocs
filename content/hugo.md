---
title: "Hugo"
description: "Hugo framework reference pages"
---

## Installation

### Method 1

#### Intall Hugo

```
$ wget https://github.com/gohugoio/hugo/releases/download/v0.54.0/hugo_0.54.0_Linux-64bit.deb
$ sudo dpkg -i hugo_0.54.0_Linux-64bit.deb
$ sudo apt install -f
```

#### Create a new test site with **Dot theme** in a directory named *Dot*

`$ hugo new site dot`

#### Add a theme

```
$ cd dot
$ git init
$ cd themes
$ git submodule add https://github.com/Gethugothemes/dot-hugo-documentation-theme.git
$ mv dot-hugo-documentation-theme dot
$ cp -R dot/exampleSite/* ../
$ cd ..
```
Note that we do not use `git clone` but we use `git submodule add`. This is required if you want to host your site in <a href="https://gohugo.io/hosting-and-deployment/hosting-on-netlify/" target="_blank"> **Netlify**</a>

Also, if you are deploying into **Netlify**, you must add some dummy file in the following directories and commit them:

```
touch archetypes/.gitkeep
touch content/.gitkeep
touch layouts/.gitkeep
touch static/.gitkeep
touch data/.gitkeep
```

#### Start the Hugo development server:

`$ hugo server -w`

Now you can go to <a href="http://localhost:1313" target="_blank">localhost:1313</a> and the `Dot` theme should be visible.

---

### Method 2

#### Intall Hugo

`$ sudo apt install hugo`

#### Create a new site in adirectory named quickstart

`$ hugo new site quickstart`

#### Add a theme

```
$ cd quickstart
$ git init
$ git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
```

Edit your config.toml configuration file and add the Ananke theme:

`$ echo 'theme = "ananke"' >> config.toml`

#### Add some content

`$ hugo new posts/my-first-post.md`

Edit content/posts/my-first-post.md

#### Start the Hugo server with Draft enabled

`$ hugo server -D`

Now you can go to <a href="http://localhost:1313" target="_blank">localhost:1313</a>.
