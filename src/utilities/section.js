import Challenge from "../utilities/challenge";
import texParse from "./texParse";

const subSection = (challenges) => {
    return (
        <>
            {challenges.map( challengeData =>(
                <div class="text-text text-center p-1">
                    {Challenge(challengeData)}
                </div>
            ))
            }
        </>
    );
}

const section = (sectionData, sectionTitle) => {
    return (
        <div className="App" class = "bg-bgdark min-h-screen h-full w-full">
            <header className="App-header" class = "flex flex-col content-center items-center align-middle min-h-fit pb-5 bg-bgdark text-text">
                <p class = "text-highlightlight font-IBMPlexMonoBold text-3xl md:text-5xl align-middle">
                    {sectionTitle}
                </p>
            </header>
            <div class="grid grid-flow-row auto-rows-max text-text text-center rounded-md pt-1 pr-1 pl-1 m-3">
                {sectionData.map(challenges => (
                    <div class="grid grid-flow-row auto-rows-max text-text text-center rounded-md p-1 m-3 border border-navfocus">
                    <h1 class="text-highlightdark text-base md:text-xl font-IBMPlexMonoBold">{challenges[0][0]}</h1>
                    <div class="text-text text-sm md:text-base font-IBMPlexMonoRegular">
                        <p>
                            {texParse((challenges[0][1])).map( line => (
                                line
                            ))}
                        </p>
                    </div>
                    {subSection(challenges[1])}
                    </div>
                ))}
            </div>
        </div>
      );
}
export default section;
