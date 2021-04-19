/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { Id } from '@common/common'
import { RequestBase } from '@common/common_abstractions/request/RequestBase'
import { Time } from '@common/common_options/time_unit/Time'

/**
 * @rest_spec_name eql.get
 * @since 7.9.0
 * @stability TODO
 */
export interface EqlGetRequest extends RequestBase {
  path_parts: {
    /**
     * Identifier for the search.
     */
    id: Id
  }
  query_parameters?: {
    /**
     * Period for which the search and its results are stored on the cluster. Defaults to the keep_alive value set by the search’s EQL search API request.
     */
    keep_alive?: Time
    /**
     * Timeout duration to wait for the request to finish. Defaults to no timeout, meaning the request waits for complete search results.
     */
    wait_for_completion_timeout?: Time
  }
}
