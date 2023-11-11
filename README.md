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
```

### See how to install

<a href="https://asciinema.org/a/opMAjsjOoQL6wC5UTFJexl6v7" target="_blank"><img src="https://asciinema.org/a/opMAjsjOoQL6wC5UTFJexl6v7.svg" width="300px"/></a>

## Usage

| Output format | By default | Short options | Full options       |
| ------------- | ---------- | ------------- | ------------------ |
| `stylish`     | `true`     | `-f stylish`  | `--format stylish` |
| `plain`       |            | `-f plain`    | `--format plain`   |
| `json`        |            | `-f json`     | `--format json`    |

```bash
# stylish format by default
$ gendiff -f stylish <filepath1> <filepath2>
```

```bash
# plain format
$ gendiff -f json <filepath1> <filepath2>
```

```bash
# json format
$ gendiff -f stylish <filepath1> <filepath2>
```

### Demo

#### Stylish format

<a href="https://asciinema.org/a/gZPM8HBKCRriBNSnIl5u6Teqp" target="_blank"><img src="https://asciinema.org/a/gZPM8HBKCRriBNSnIl5u6Teqp.svg" width="300px"/></a>

#### Pain format

<a href="https://asciinema.org/a/As8cwE8Pf3O22SVjL6aXnFPF9" target="_blank"><img src="https://asciinema.org/a/As8cwE8Pf3O22SVjL6aXnFPF9.svg" width="300px"/></a>

#### JSON format

<a href="https://asciinema.org/a/06ER0NuMLWlRJLWprqe1oFTdj" target="_blank"><img src="https://asciinema.org/a/06ER0NuMLWlRJLWprqe1oFTdj.svg" width="300px"/></a>
