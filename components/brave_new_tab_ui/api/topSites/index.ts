// Copyright (c) 2019 The Brave Authors. All rights reserved.
// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this file,
// you can obtain one at http://mozilla.org/MPL/2.0/.
import { defaultTopSitesData } from '../../stories/default/data/topSites'
import { NetworkInterfaceBase } from 'os'
export type TopSitesData = NewTab.Site[]

/**
 * Obtains the top sites
 */
export function getTopSites (): Promise<TopSitesData> {
  return new Promise(resolve => {
    chrome.topSites.get((topSites: NewTab.Site[]) => {
      var defaultSites = defaultTopSitesData.map(u => u as NewTab.Site)
      topSites = topSites.concat(defaultSites.slice(0, Math.max(defaultTopSitesData.length - topSites.length, 0)))
      resolve(topSites || [])
    })
  })
}
