/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { SocksProxyAgent } from 'socks-proxy-agent';

import { genAI } from "./utils/common.js";

async function run() {
  const agent = new SocksProxyAgent(
    'socks://xxx:xxx@192.168.1.1:1080'
  );

  const model = genAI.getGenerativeModel(
    { model: "gemini-1.5-flash-latest" },
    { httpAgent: agent },
  );

  const chat = model.startChat();

  const msg = "Hello! How are you?";

  const result = await chat.sendMessage(msg);
  const response = result.response;
  const text = response.text();
  console.log(text);
}

run();
