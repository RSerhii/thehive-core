/* Copyright (c) 2019 The Brave Authors. All rights reserved.
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

#include "brave/components/brave_shields/browser/ad_block_custom_filters_service.h"

#include "base/logging.h"
#include "brave/browser/brave_browser_process_impl.h"
#include "brave/common/pref_names.h"
#include "brave/components/brave_shields/browser/ad_block_service.h"
#include "brave/vendor/ad-block/ad_block_client.h"
#include "components/prefs/pref_service.h"
#include "content/public/browser/browser_thread.h"

namespace brave_shields {

AdBlockCustomFiltersService::AdBlockCustomFiltersService() {
}

AdBlockCustomFiltersService::~AdBlockCustomFiltersService() {
}

bool AdBlockCustomFiltersService::Init() {
  return UpdateCustomFilters(GetCustomFilters());
}

std::string AdBlockCustomFiltersService::GetCustomFilters() {
  DCHECK_CURRENTLY_ON(content::BrowserThread::UI);
  PrefService* local_state = g_browser_process->local_state();
  if (!local_state)
    return std::string();
  return local_state->GetString(kAdBlockCustomFilters);
}

bool AdBlockCustomFiltersService::UpdateCustomFilters(
    const std::string& custom_filters) {
  DCHECK_CURRENTLY_ON(content::BrowserThread::UI);
  PrefService* local_state = g_browser_process->local_state();
  if (!local_state)
    return false;
  local_state->SetString(kAdBlockCustomFilters, custom_filters);

  GetTaskRunner()->PostTask(
      FROM_HERE,
      base::BindOnce(
          &AdBlockCustomFiltersService::UpdateCustomFiltersOnFileTaskRunner,
          base::Unretained(this), custom_filters));

  return true;
}

void AdBlockCustomFiltersService::UpdateCustomFiltersOnFileTaskRunner(
    const std::string& custom_filters) {
  DCHECK_CALLED_ON_VALID_SEQUENCE(sequence_checker_);
  ad_block_client_->clear();
  if (!custom_filters.empty())
    ad_block_client_->parse(custom_filters.c_str());
}

scoped_refptr<base::SequencedTaskRunner>
AdBlockCustomFiltersService::GetTaskRunner() {
  // We share the same task runner for all ad-block and TP code
  return g_brave_browser_process->ad_block_service()->GetTaskRunner();
}

///////////////////////////////////////////////////////////////////////////////

std::unique_ptr<AdBlockCustomFiltersService>
AdBlockCustomFiltersServiceFactory() {
  return std::make_unique<AdBlockCustomFiltersService>();
}

}  // namespace brave_shields
