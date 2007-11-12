// Pref Service
gPrefSvc = Components.classes["@activestate.com/koPrefService;1"].
                      getService(Components.interfaces.koIPrefService);

function NumberOrName()
{
    try {
        numButton = document.getElementById('html_entity-number-button');
        gPrefSvc.prefs.setBooleanPref("kHTML_Entities", numButton.checked);
        // alert(numButton.checked);
    } catch (e) {
        alert(e);
    }
}



function html_entity_insert ( v_string , v_integer )
{

    var is_number = false; // User String Entity or use number entity

    var scimoz = null;
    var selectedText = null;

    try {
        // load from settings
        if (gPrefSvc.prefs.hasPref("kHTML_Entities"))
            is_number = gPrefSvc.prefs.getBooleanPref("kHTML_Entities");
        else
            gPrefSvc.prefs.setBooleanPref("kNoseAutoTest", is_number);
        // Set entity
        if (is_number == false) {
        // get in string format
            entity = '&' + v_string + ';';
        } else {
        // get in number format
            entity = '&#' + v_integer + ';';
        }
    } catch (e) {
        alert(e);
    }

    // testing
    try {
        scimoz = ko.views.manager.currentView.scintilla.scimoz;
        selectedText = scimoz.selText;
        // alert(selectedText);
    } catch(ex) {
        alert(ex);
    }


    // write to komodo
    try {
        var scimoz = gViewMgr.currentView.scintilla.scimoz;
        scimoz.insertText(scimoz.currentPos, entity);
    } catch (e) {
        alert(e);
    }

    try {
        var newCurrentPos = scimoz.currentPos + entity.length;
        scimoz.currentPos = newCurrentPos;
        scimoz.anchor = newCurrentPos;
    } catch (e) {
        alert(e);
    }

    // Focus
    try {
        ko.views.manager.currentView.setFocus()
    } catch (e){
        alert(e);
    }

    // alert(v_integer + ' == ' + v_string);
}



function kHTML_Entitis_Init()
{
    try {
        if (gPrefSvc.prefs.hasPref("kHTML_Entities")){
            numButton = document.getElementById('html_entity-number-button');
            is_number = gPrefSvc.prefs.getBooleanPref("kHTML_Entities");
            numButton.checked = is_number;
        }
    } catch (e){
        alert(e);
    }
}

// Ensure we load the remote server information when the overlay is loaded.
addEventListener("load", kHTML_Entitis_Init, false);