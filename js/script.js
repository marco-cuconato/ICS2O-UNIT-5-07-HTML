/* Created by: Curtis Edwards
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT-5-07-HTML/sw.js", {
    scope: "/ICS2O-UNIT-5-07-HTML/",
  })
}

/**
 * Input.
 */

