import "./ToggleSwitch.css";
import React, { useState } from 'react';



const AUTH = () => {
  const form = [
    {
      "name": "Signup",
      "path": "/signup",
    },
    {
      "name": "Login",
      "path": "login",
    }
  ];
  const [formTog, setform] = useState(0);

  return (
    <div className="App" class = "bg-bgdark flex flex-col items-center min-h-screen">
      <div class="grid grid-flow-row auto-rows-max text-text text-center rounded-md w-2/3 border-navfocus border pt-2 pr-1 pl-1 m-3 pb-4">
        <p class = "text-highlightlight font-IBMPlexMonoBold text-3xl md:text-5xl align-middle">
          {form[formTog]["name"]}
        </p>
        <form method="POST" action={form[formTog]["path"]} >
          <div class="field pb-3">
              <div class="control flex flex-row">
                  <span class="w-0 md:w-1/3 text-highlightlight font-IBMPlexMonoBold text-right pr-1"></span>
                  <input class="rounded-md bg-bgmid text-sm md:text-base w-1/3" type="text" name="username" placeholder="Username" />
              </div>
          </div>

          <div class="field pb-3">
              <div class="control flex flex-row items-center">
                  <span class="w-0 md:w-1/3 text-highlightlight font-IBMPlexMonoBold text-right pr-1"></span>
                  <input class="rounded-md bg-bgmid text-sm md:text-base w-1/3" type="password" name="password" placeholder="Password" />
              </div>
          </div>
          <button class="button is-block is-info is-large is-fullwidth flex-initial w-1/4 md:w-2/12 rounded-md bg-green p-1 pt-1 text-text font-IBMPlexMonoRegular text-sm md:text-base">
            {form[formTog]["name"]}
          </button>
          <div class="flex items-center justify-center w-full mb-12 p-1">
              <label for="toggleB" class="flex items-center cursor-pointer">
                  <div class="relative">
                      <input type="checkbox" id="toggleB" class="sr-only" onClick={() => setform(formTog ^ 1)} />
                      <div class="block bg-bglight w-10 h-6 rounded-full border border-navfocus"></div>
                      <div class="dot absolute bg-highlightdark left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
                  </div>
                  <div class="ml-3 text-gray-700 font-medium">
                  </div>
              </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AUTH;