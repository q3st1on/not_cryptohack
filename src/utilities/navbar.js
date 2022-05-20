import React, { useEffect, useState } from "react";
import getCookie from "./getCookie";

const NavigationBar = () => {
    const fetchInfo = () => {
        fetch('/userAPI')
        .then(response =>{
            if (response.ok) {
                return response.json()
            }
            throw response;
        })
        .then(data => {
            console.log(data);
            if (data.points == NaN) {
                data.points = 0;
            }
            setData(data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    let user = getCookie('user');
    const [data, setData] = useState({'points': 0});
    useEffect(() => {
        const interval = setInterval(() => fetchInfo(), 10000);
        return () => {
          clearInterval(interval);
        };
        }, []
    )
    if (user == null) {
        return (
            <div className="sidenav" class="transition-colors hover:transition-colors flex h-fit w-full z-1 top-0 left-0 bg-bgdark justify-evenly pb-5 pt-3 text-text font-IBMPlexMonoBold text-sm md:text-xl">
                <a href="/" class="transition-colors hover:transition-colors hover:text-darkred">HOME</a>
                <a href="/INTRODUCTION.js" class="transition-colors hover:transition-colors hover:text-darkred">INTRODUCTION</a>
                <a href="/MATHS.js" class="transition-colors hover:transition-colors hover:text-darkred">MATHS</a>
                <a href="/RSA.js" class="transition-colors hover:transition-colors hover:text-darkred">RSA</a>
                <a href="/DIFFIE-HELLMAN.js" class="transition-colors hover:transition-colors hover:text-darkred">DIFFIE-HELLMAN</a>
                <a href="/AUTH.js" class="transition-colors hover:transition-colors hover:text-darkred">SIGNUP/LOGIN</a>
            </div>
        );
    } else {
        return (
            <div className="sidenav" class="transition-colors hover:transition-colors flex h-fit w-full z-1 top-0 left-0 bg-bgdark justify-evenly pb-5 pt-3 text-text font-IBMPlexMonoBold text-sm md:text-xl">
                <a href="/" class="transition-colors hover:transition-colors hover:text-darkred">HOME</a>
                <a href="/INTRODUCTION.js" class="transition-colors hover:transition-colors hover:text-darkred">INTRODUCTION</a>
                <a href="/MATHS.js" class="transition-colors hover:transition-colors hover:text-darkred">MATHS</a>
                <a href="/RSA.js" class="transition-colors hover:transition-colors hover:text-darkred">RSA</a>
                <a href="/DIFFIE-HELLMAN.js" class="transition-colors hover:transition-colors hover:text-darkred">DIFFIE-HELLMAN</a>
                <span class="transition-colors hover:transition-colors hover:text-darkred" onClick={() => fetchInfo()}>{data.points} pts</span>
            </div>
        );
    }
};

export default NavigationBar;