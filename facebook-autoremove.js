var removeGroupMembers = (function () {
	var removeGroupMembers = {};
	// Admins need to add their Facebook IDs to the next line to be excluded from the removal list.
	var excludedFbIDs = ['abcdefghijklm']; //Use commas in array to retain additional users.
	var usersToRemoveQueue = [];
	var scriptEnabled = false;
	var processing = false;

	removeGroupMembers.start = function() {
		scriptEnabled = true;
		removeAll();
	};

	removeGroupMembers.stop = function() {
		scriptEnabled = false;
	};

	function removeAll() {
		if (scriptEnabled) {
			listMembersToRemove();
			processList();
		}
	}

	function listMembersToRemove() {
		var adminActions = document.getElementsByClassName('adminActions');
		console.log(excludedFbIDs);
		for(var i=0; i<adminActions.length; i++) {
			var gearWheelIconDiv = adminActions[i];
			var hyperlinksInAdminDialog = gearWheelIconDiv.getElementsByTagName('a');
			var	var FbMemberName = getTextFromElement(gearWheelIconDiv.parentNode.parentNode.parentNode.getElementsByClassName('fcb')[0]);
			if (excludedFbIds.indexOf(FbmemberID) != -1) {
				console.log("SKIPPING "+FbMemberName+' ('+FbmemberID+')');
				continue;
			} else {
				usersToRemoveQueue.push({'memberID': FbmemberID, 'gearWheelIconDiv': gearWheelIconDiv})
			}
		}
	}

	function processList() {
		if (!scriptEnabled) {
            return;
        }
        if (usersToRemoveQueue.length > 0) {
            removeNext();
 
            setTimeout(function(){
                processList();
            },1000);
        } else {
            getMore();
        }
	}

	function removeNext() {
		if (!scriptEnabled) {
            return;
        }
        if (usersToRemoveQueue.length > 0) {
            var nextElement = usersToRemoveQueue.pop();
            removeMember(nextElement.memberID, nextElement.gearWheelIconDiv);
        }
	}

	function removeMember(memberID, gearWheelIconDiv) {
		if (processing) {
            return;
        }
        var gearWheelHref = gearWheelIconDiv.getElementsByTagName('a')[0];
        gearWheelHref.click();
        processing = true;
        setTimeout(function(){
            var popupRef = gearWheelHref.id;
            var popupDiv = getElementByattribute('data-ownerid',popupRef);
            var popupLinks = popupDiv.getElementsByTagName('a');
            for(var j=0; j<popupLinks.length; j++) {
                if (popupLinks[j].getattribute('href').indexOf('remove.php') !== -1) {
                    // this is the remove link
                    popupLinks[j].click();
                    setTimeout(function(){
                        var confirmButton = document.getElementsByClassName('layerConfirm uiOverlayButton selected')[0];
                        var errorDialog = getElementByattribute('data-reactid','.4.0');
                        if (confirmButton != null) {
                            if (canClick(confirmButton)) {
                                confirmButton.click();
                            } else {
                                console.log('This should not happen memberID: '+memberID);
                                5/0;
                                console.log(gearWheelIconDiv);
                            }
                        }
                        if (errorDialog != null) {
                            console.log("Error while removing member "+memberID);
                            errorDialog.getElementsByClassName('selected  layerCancel autofocus')[0].click();
                        } 
                        processing = false;
                    },700);
                    continue;
                }
            }
        },500);
	}

	function canClick(elem) {
		return (typeof elem != 'undefined') && (typeof elem.click != 'undefined');
	}

	function getMore() {
		processing = true;
        more = document.getElementsByClassName("pam uiBoxLightblue  uiMorePagerPrimary");
        if (typeof more != 'undefined' && canClick(more[0])) {
            more[0].click();
            setTimeout(function(){
                removeAll();
                processing = false;
           }, 2000);
        } else {
            removeGroupMembers.stop();
        }
	}

	function getTextFromElement(element) {
		var text = element.textContent;
        return text;
	}

	function getElementByattribute(attribute, value, root) {
		root = root || document.body;
        if(root.hasattribute(attribute) && root.getattribute(attribute) == value) {
            return root;
        }
        var children = root.children,
            element;
        for(var i = children.length; i--; ) {
            element = getElementByattribute(attribute, value, children[i]);
            if(element) {
                return element;
            }
        }
        return null;
	}

	return removeGroupMembers;
})();
removeGroupMembers.start();
