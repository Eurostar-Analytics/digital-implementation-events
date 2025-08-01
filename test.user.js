// ==UserScript==
// @name         Tealium Data Layer to Adobe Analytics Mapper
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  Map Tealium utag.data to Adobe Analytics eVars and output to the console
// @author       KR
// @match        *://*.eurostar.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    console.log("Tampermonkey script loaded and running.");

    // Define mappings from Tealium utag.data to Adobe Analytics eVars
    const adobeMapping = {
        adobeanalytics_pagename: "eVar1 (Page Name)",
        currency: "eVar2 (Currency)",
        market: "eVar3 (Market)",
        language: "eVar4 (Language)",
        adobeanalytics_pagepath: "eVar6 (Page Path)",
        adobeanalytics_appname: "eVar7 (App Name)",
        adobeanalytics_pagecategory: "eVar8 (Page Category)",
        app_type: "eVar9 (App Type)",
        isLoggedIn: "eVar10 (Is Logged In)",
        customer_hashedemail: "eVar11 (Customer Hashed Email)",
        loyaltyTier: "eVar14 (Loyalty Tier)",
        adobeanalytics_visitorid: "eVar15 (AA Visitor ID)",
        adobeanalytics_orderId: "eVar21 (AA Order ID)",
        pointsOrRegular: "eVar23 (Points Or Regular)",
        transactionType: "eVar24 (Transaction Type)",
        paymentDetails: "eVar25 (Payment Details)",
        pnr: "eVar20 (PNR)"
        // Add more mappings as needed
    };

    // Function to log utag.data values mapped to Adobe eVars
    function logMappedDataLayer(eventType) {
        if (typeof window.utag.data === 'undefined') {
            console.warn("Tealium data layer (utag.data) not found.");
            return;
        }

        let mappedData = {};
        Object.keys(adobeMapping).forEach(tealiumKey => {
            if (window.utag.data.hasOwnProperty(tealiumKey)) {
                mappedData[adobeMapping[tealiumKey]] = window.utag.data[tealiumKey];
            }
        });

        if (Object.keys(mappedData).length > 0) {
            const eventLabel = eventType === "view"
                ? "%c TealiumQA View Event Mapping"
                : "%c TealiumQA Link Event Mapping";
            //const eventColor = eventType === "view" ? "green" : "blue";
            const eventColor = "red";

            console.groupCollapsed(eventLabel, `color: ${eventColor}; font-weight: normal;`);
            console.log("------------------------------");
            console.table(mappedData);
            console.log("------------------------------");
            console.groupEnd();
        } else {
            console.warn("No matching mappings found in utag.data.");
        }
    }

    // Hook into Tealium events
    function hookIntoTealium() {
        if (typeof window.utag !== 'undefined' && typeof window.utag.data !== 'undefined') {
            console.log("Tealium found, monitoring utag.view and utag.link.");

            const originalTealiumView = window.utag.view;
            const originalTealiumLink = window.utag.link;

            window.utag.view = function (a, b) {
                //console.log("%c🟢 TealiumQA View Event Triggered", "color: green; font-weight: bold;");
                logMappedDataLayer("view");
                originalTealiumView.apply(this, arguments);
            };

            window.utag.link = function (a, b) {
                //console.log("%c🔵 TealiumQA Link Event Triggered", "color: blue; font-weight: bold;");
                logMappedDataLayer("link");
                originalTealiumLink.apply(this, arguments);
            };
        } else {
            console.error("Tealium (utag) or utag.data not found.");
        }
    }

    // Wait for Tealium to be available
    function waitForTealiumData() {
        if (typeof window.utag !== 'undefined' && typeof window.utag.data !== 'undefined') {
            hookIntoTealium();
        } else {
            setTimeout(waitForTealiumData, 500);
        }
    }

    waitForTealiumData();

})();
