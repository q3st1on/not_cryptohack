import React from "react";

const radicalRSA = () => {
    let challenge = {
        title: "Radical RSA",
        points: 50,
        text: ["My friend said that my RSA has a radical flaw. I dont know what that means, mabe you can find out."],
        author: "q3st1on",
        placeholder: "Enter flag here: crypto{FLAG}",
        files: true,
        filepath: "https://raw.githubusercontent.com/q3st1on/not_cryptohack/gh-pages/challenges/RSA/exponent/radicalRSA/",
        scriptfile: "radicalRSA.py",
        outfile: "output.txt",
    };
    return (
        challenge
    );
};

export default radicalRSA;