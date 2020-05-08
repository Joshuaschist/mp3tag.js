
[![mp3tag.js Banner](https://github.com/eidoriantan/mp3tag.js/raw/gh-pages/assets/images/banner.png)](https://mp3tag.js.org)

[![Node.js CI](https://github.com/eidoriantan/mp3tag.js/workflows/Node.js%20CI/badge.svg)](https://github.com/eidoriantan/mp3tag.js/actions?query=workflow%3A%22Node.js+CI%22)
[![Build Status](https://travis-ci.com/eidoriantan/mp3tag.js.svg?branch=master)](https://travis-ci.com/eidoriantan/mp3tag.js)
[![npm](https://img.shields.io/npm/v/mp3tag.js/latest?registry_uri=https%3A%2F%2Fregistry.npmjs.com%2Fmp3tag.js&label=mp3tag.js@latest)](https://npmjs.com/mp3tag.js)
![Maintenance](https://img.shields.io/maintenance/yes/2020)

**mp3tag.js** is an open sourced JavaScript library used to edit the metadata of
audio files. It currently supports ID3v1, ID3v2.3, and ID3v2.4 tags.

Visit [https://mp3tag.js.org](https://mp3tag.js.org) to learn more about the
library and view it in action through an [editor](https://mp3tag.js.org/editor).
You can also explore the [examples](https://github.com/eidoriantan/mp3tag.js/tree/master/examples)
directory.

The website is also open sourced and can be viewed at the
[gh-pages](https://github.com/eidoriantan/mp3tag.js/tree/gh-pages) branch.

### Features
 * Read ID3v1 and ID3v2 tags synchronously
 * Write ID3v1 and ID3v2 tags synchronously
 * Supports unsynchronisation
 * Standards compliant. See [id3.org](http://id3.org)

## Installation
You can download the ready-to-use script at
[GitHub releases](https://github.com/eidoriantan/mp3tag.js/releases) or you can
build your own by cloning this repository using `git` then build it.

```shell
git clone https://github.com/eidoriantan/mp3tag.js
cd ./mp3tag.js
npm install
npm run build
```

You can also install this package by using `npm`:

```shell
npm install --save mp3tag.js@latest
```

If you are using browser, you can just install the library through a CDN:

```
<script src="https://cdn.jsdelivr.net/npm/mp3tag.js@latest/dist/mp3tag.min.js">
```

## Usage
```html
<input type="file" id="input-file" accept="audio/mpeg">
<script>
const inputFile = document.getElementById('input-file')
inputFile.onchange = function () {
  const reader = new FileReader()
  reader.onload = function () {
    const buffer = this.result

    // MP3Tag Usage
    const mp3tag = new MP3Tag(buffer)
    mp3tag.read()
    console.log(mp3tag.tags)
  }

  if (this.files.length > 0) {
    reader.readAsArrayBuffer(this.files[0])
  }
}
</script>
```

If you want a detailed documentations, please visit the documentations page at
[mp3tag.js.org](https://mp3tag.js.org/docs).

### Support
If you had found a bug or any unexpected behavior, you can submit an issue
through [GitHub issues](https://github.com/eidoriantan/mp3tag.js/issues). If you
wanted to contribute to this repository, please refer to
[CONTRIBUTING.md](https://github.com/eidoriantan/mp3tag.js/blob/master/CONTRIBUTING.md).

You can also show your support by becoming a patron!

[![Patreon](https://c5.patreon.com/external/logo/become_a_patron_button.png)](https://www.patreon.com/eidoriantan)
