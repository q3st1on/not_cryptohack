import React from "react";
import { Link } from "react-router-dom";


const NavigationBar = () => {
    return (
        <div className="sidenav" class="transition-colors hover:transition-colors flex h-fit w-full z-1 top-0 left-0 bg-bgdark justify-evenly pb-5 pt-3">
            <Link to="/" class="transition-colors hover:transition-colors text-text font-IBMPlexMonoBold text-xl hover:text-darkred">HOME</Link>
            <Link to="/INTRODUCTION.js" class="transition-colors hover:transition-colors text-text font-IBMPlexMonoBold text-xl hover:text-darkred">INTRODUCTION</Link>
            <Link to="/MATHS.js" class="transition-colors hover:transition-colors text-text font-IBMPlexMonoBold text-xl hover:text-darkred">MATHS</Link>
            <Link to="/RSA.js" class="transition-colors hover:transition-colors text-text font-IBMPlexMonoBold text-xl hover:text-darkred">RSA</Link>
            <Link to="/DIFFIE-HELLMAN.js" class="transition-colors hover:transition-colors text-text font-IBMPlexMonoBold text-xl hover:text-darkred">DIFFIE-HELLMAN</Link>
        </div>
    );
};

export default NavigationBar;