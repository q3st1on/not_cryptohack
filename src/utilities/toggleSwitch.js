import React from "react";
import "./ToggleSwitch.css";
  
const ToggleSwitch = ({ label }) => {
  return (
    <div class="flex items-center justify-center w-full mb-12 p-1">
        <label for="toggleB" class="flex items-center cursor-pointer">
            <div class="relative">
                <input type="checkbox" id="toggleB" class="sr-only" />
                <div class="block bg-bglight w-10 h-6 rounded-full border border-navfocus"></div>
                <div class="dot absolute bg-highlightdark left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
            </div>
            <div class="ml-3 text-gray-700 font-medium">
                {label}{" "}
            </div>
        </label>
    </div>
  );
};
  
export default ToggleSwitch;