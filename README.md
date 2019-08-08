# facebook-autoremove
Javascript for Facebook Group Admins to automate removal of members.

## Motivation
Facebook doesn't provide an option to batch remove members from a Facebook Group. Currently, if a Group Admins want to remove a group from Facebook they must remove members individually. This is not an issue for small groups, but can be time intensive for large groups that might have thousands of members.

Batch group member removal can be automated using `facebook-autoremove.js` and your web browser's console. This script only works if you have administrative permissions in the Facebook Group.

## Usage

1. Locate your Facebok ID number: http://findfacebookid.com/

1. Download `facebook-autoremove.js` script; copy and paste the raw script into a text editor.

1. Edit the line 4 of the script that starts with `var excludedFbIds = ['FbIDNumberHere'];` and replace placeholder text with your Facebook ID number. If you skip this step the script will likely your account from the group. Multiple facebook members can be excluded from the script by entering there ID into the array, separated by commas and single quotes (`var excludedFbIds = ['FbIDNumberOneHere','FbIDNumberTwoHere']`.

1. Navigate to the "Members" page of the Facebook group.

1. 1Open a Javascript console in your favorite browser. For Firefox or Chrome, right-click on the page and select "Inspect", then find the "Console" tab.

1. Locate the command prompt in the console, then copy and paste in your edited version of `facebook-autoremove.js`.

1. Press "ENTER" on you keyboard and watch this magic. It is recommended for large lists to check to see if the script has hung and needs to be restarted.

## Contribute

Found an issue? Post it in the [issue tracker](https://github.com/benmshapiro/facebook-autoremove/issues). <br> 
Want to add another awesome feature? [Fork](https://github.com/benmshapiro/facebook-autoremove/fork) this repository and add your feature, then send a pull request.

## License
The MIT License (MIT)
Copyright &copy; 2019 Ben Shapiro
