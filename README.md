# facebook-autoremove
Javascript for Facebook Group Admins to automate removal of members.

# Motivation
Facebook doesn't provide an option to batch remove members from a Facebook Group. Currently, if a Group Admins want to remove a group from Facebook they must remove members individually. This is not an issue for small groups, but can be time intensive for large groups that might have thousands of members.

Batch group member removal can be automated using `facebook-autoremove.js` and your web browser developer console. This script only works if you have administrative permissions in the Facebook Group.

# Usage

Locate your Facebok ID number: http://findfacebookid.com/

Download `facebook-autoremove.js` script; copy and paste the raw script into a text editor.

Edit the line 4 of the script that starts with `var excludedFbIds = ['FbIDNumberHere'];` and replace placeholder text with your Facebook ID number. If you skip this step the script will likely your account from the group. Multiple facebook members can be excluded from the script by entering there ID into the array, separated by commas and single quotes (`var excludedFbIds = ['FbIDNumberOneHere','FbIDNumberTwoHere']`.

Navigate to the "Members" page of the Facebook group.

Open a Javascript console in your favorite browser. For Firefox or Chrome, right-click on the page and select "Inspect", then find the "Console" tab.

Locate the command prompt in the console, then copy and paste in your edited version of `facebook-autoremove.js`.

Press "ENTER" on you keyboard and watch this magic. It is recommended for large lists to check to see if the script has hung and needs to be restarted.
