### Hexlet tests and linter status:

[![Actions Status](https://github.com/Lika1998Lika/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/Lika1998Lika/frontend-project-46/actions)

[![Actions Status](https://github.com/Lika1998Lika/calculator-project/actions/workflows/linter.yml/badge.svg)](https://github.com/Lika1998Lika/calculator-project/actions/workflows/linter.yml)

[![Actions Status](https://github.com/Lika1998Lika/calculator-project/actions/workflows/test-jest.yml/badge.svg)](https://github.com/Lika1998Lika/calculator-project/actions/workflows/test-jest.yml)

[![Maintainability](https://api.codeclimate.com/v1/badges/a532422f3042b22a7e52/maintainability)](https://codeclimate.com/github/Lika1998Lika/calculator-project/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/a532422f3042b22a7e52/test_coverage)](https://codeclimate.com/github/Lika1998Lika/calculator-project/test_coverage)

## Description

This is utility that determines the difference between two data structures. A similiar mechanism is used when outputting tests or when automatically tracking changes in configuration files.

Utility features:

- Support for different input formats: `yaml`, `json`, `ini`
- Generation a report in the form of `plain text`, `stylish`, `json`

### Usage example:

```bash
# plain format
gendiff --format plain path/to/file.yml another/path/file.json

Property 'common.follow' was added with value: false
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group2' was removed

# stylish format
gendiff filepath1.json filepath2.json

{
  + follow: false
    setting1: Value 1
  - setting2: 200
  - setting3: true
  + setting3: {
        key: value
    }
  + setting4: blah blah
  + setting5: {
        key5: value5
    }
}
```

## Install

###### system requirements:

Node 14.x version at least

```bash
#clone this repository on your machine
$git clone https://github.com/Lika1998Lika/calculator-project

#go to directory where you downloaded it
$cd calculator-project

# run the one of these command to install all necessary dependencies
$make install
or
$npm ci

# this command is responsible for linking commands from package.json to "./bin" directory
$npm link

#run utility
$ gendiff <filepath1> <filepath2>
```

<a href="https://asciinema.org/a/7RceSarq7y2w7P5rVTn4q3kYs" target="_blank"><img src="https://asciinema.org/a/7RceSarq7y2w7P5rVTn4q3kYs.svg" width="250"/></a>
