// ==UserScript==
// @name         SoliForum Login Fix
// @namespace    http://tampermonkey.net/
// @version      2024-02-08
// @description  Not official. Modifies a login confirmation button and its redirect in an attempt to bypass an SSL issue.
// @author       shaples
// @match        *://www.soliforum.com/login/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=soliforum.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const form_el_list = document.getElementsByClassName('frm-form');
    if (form_el_list.length > 0) {
        const form_el = form_el_list[0];
        const action_href = form_el.getAttribute('action');
        let new_action_href_firstedit = action_href.replace('https', 'http');
        const new_action_href = new_action_href_firstedit.replace(':80', '');
        form_el.setAttribute('action', new_action_href);
        console.log('[soliforum login fix] successfully set confirmation button link to: \'' + new_action_href + '\'');
    };

    const redirect_el_list = document.getElementsByName('redirect_url');
    if (redirect_el_list.length > 0) {
        const redirect_el = redirect_el_list[0];
        const value_href = redirect_el.getAttribute('value');
        let new_value_href_firstedit = value_href.replace('https', 'http');
        const new_value_href = new_value_href_firstedit.replace(':80', '');
        redirect_el.setAttribute('value', new_value_href);
        console.log('[soliforum login fix] successfully set redirect to: \'' + new_value_href + '\'');
    };
})();
