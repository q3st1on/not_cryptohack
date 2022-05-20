import React, { useState, useEffect } from "react";
import texParse from './texParse';
import fileDownload from 'js-file-download'
import axios from 'axios';

const handleDownload = (url, filename) => {
  axios.get(url, {
    responseType: 'blob',
  })
  .then((res) => {
    fileDownload(res.data, filename)
  })
}

const Challenge = (challenge_details) => {
  const [input, setInput] = useState('');
  const [complete, setComplete] = useState(false);
  const [toggle, setToggle] = useState(false);

  const fetchInfo = () => {
    fetch('/userAPI')
    .then(response =>{
        if (response.ok) {
            return response.json()
        }
        throw response;
    })
    .then(resp => {
      if (resp["solved"].includes(challenge_details.name)) {
        setComplete(true);
      }
    })
    .catch(error => {
        console.log(error);
    })
  }
  useEffect(() => fetchInfo())

  async function submitFlag(data = {}) {
    const response = await fetch('/submitflag', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data)
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(resp => {
      console.log(resp);
      if (resp["Flag"] == "Correct") {
        setComplete(true);
      } else {
        alert("The flag you entered was incorrect :(");
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  function fileDownload() {
    if (challenge_details.files === true) {
      let scriptpath = challenge_details.filepath + challenge_details.scriptfile;
      let outpath = challenge_details.filepath + challenge_details.outfile;
      return (
        <div class="flex flex-col">
          <button onClick={() => {handleDownload(scriptpath, challenge_details.scriptfile)}} class="flex-initial font-IBMPlexMonoRegular text-darkred text-center">{challenge_details.scriptfile}</button>
          <button onClick={() => {handleDownload(outpath, challenge_details.outfile)}} class="flex-initial font-IBMPlexMonoRegular text-darkred text-center">{challenge_details.outfile}</button>
        </div>
      );
    }
  }
  if (complete) {
    if (toggle) {
      return(
        <>
          <div class="flex text-text justify-center text-center p-1" onClick={() => setToggle(false)}>
              <div class="text-text text-center rounded-md border w-2/3  border-navfocus p-1">
                <h1 class="basis-1/2 text-base md:text-lg font-IBMPlexMonoBold">{challenge_details.title}</h1>
                <div class="items-center text-center">
                  <div class=""><a class="font-IBMPlexMonoBold">Author:</a> {challenge_details.author}</div>
                  <div class="">{challenge_details.points} <a class="font-IBMPlexMonoRegular">pts</a></div>
                </div>
                  <p>
                    {texParse(challenge_details.text).map( line => (
                      <span>{line}</span>
                    ))}
                  </p>
                  {fileDownload()}
                <div class="flex flex-row pt-4 pb-2">
                  <a class="w-0 md:w-1/8"></a>
                  <a class="flex-initial w-1 md:w-3/4 back text-green bg-bgmid rounded-md p-1 text-sm md:text-base">Solved Challenge</a>
                  <a class="w-0 md:w-1/8"></a>
                </div>
              </div>
          </div>
        </>
      );
    } else {
      return(
        <div class="flex flex-row text-text justify-center text-center p-1 bg-bgmid border-navfocus border rounded-md" onClick={() => setToggle(true)}>
          <a class="w-1/2 text-highlightdark">{challenge_details.title}</a>
          <a class="w-1/2 text-green">Solved {challenge_details.points}</a>
        </div>
      );
    }
  } else {
    return(
      <>
        <div class="flex text-text justify-center text-center p-1">
            <div class="text-text text-center rounded-md border w-2/3  border-navfocus p-1">
              <h1 class="basis-1/2 text-base md:text-lg font-IBMPlexMonoBold">{challenge_details.title}</h1>
              <div class="items-center text-center">
                <div class=""><a class="font-IBMPlexMonoBold">Author:</a> {challenge_details.author}</div>
                <div class="">{challenge_details.points} <a class="font-IBMPlexMonoRegular">pts</a></div>
              </div>
                <p>
                  {texParse(challenge_details.text).map( line => (
                    <span>{line}</span>
                  ))}
                </p>
                {fileDownload()}
              <div class="flex flex-row pt-4 pb-2">
                <a class="w-0 md:w-1/12"></a>
                <input type="text" id="flag" name="flag" class="flex-initial w-3/4 md:w-7/12 back bg-bgmid rounded-md p-1 text-sm md:text-base" placeholder={challenge_details.placeholder} value={input} onInput={e => setInput(e.target.value)}></input>
                <a class="w-0 md:w-1/12"></a>
                <input class="w-0 hidden" type="text" id="name" name="name" value={challenge_details.name} />
                <button class="flex-initial w-1/4 md:w-2/12 rounded-md bg-green p-1 text-text font-IBMPlexMonoRegular text-sm md:text-base" onClick={() => submitFlag({"name": challenge_details.name, "flag": input})}>SUBMIT</button>
                <a class="w-0 md:w-1/12"></a>
              </div>
            </div>
        </div>
      </>
    );
  }
}
export default Challenge;
  