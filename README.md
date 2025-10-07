# Description
Simple plugin for [Insomnia](https://insomnia.rest/) to allow custom regular expressions to be generated randomly when mocking template tags (i.e., scripts, request body parameters, environmental variables).
# How to Install
## Insomnia GUI
Navigate to `Application > Preferences > Plugins` and enter `insomnia-plugin-faker-regex` in the **Install Plugin** field, then press the **Install Plugin** button to the right.
## Manual
- Navigate to your local Insomnia plugins directory
- Run the command `git clone https://github.com/pro-beanz/insomnia-plugin-faker-regex.git` in the directory
- `cd` into the directory
- Run `npm install`
- In Insomnia, make sure that the plugin is enabled in the preferences.
# Usage
Inside a field that allows template tags, press `Ctrl`+`Space` to search for "Randomized Regular Expression" and insert it. Clicking on it will allow you to enter a regular expression that is accepted by [randexp](https://www.npmjs.com/package/randexp).
# Motivation
There seem to be many [Faker](https://fakerjs.dev/) adaptions to Insomnia plugins, but none of the publicly available ones seem to allow the degree of control that regular expressions allow. This side project aims to remedy that and hopefully make it easier for others in the future to mock complex expressions with randomized values in Insomnia.
