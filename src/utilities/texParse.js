const texParse = (content) => {
    let Latex = require('react-latex');
    let output=[];
    for (let x = 0; x<content.length; x++) {
        let line = content[x];
        if (line=="$breakhere$") {
            output.push(<p>‍</p>)
        } else if (line.charAt(0)=="$" && line.charAt(line.length-1) == "$") {
            output.push(<Latex trust={true}>{line}</Latex>);
        } else if (line.charAt(0)=="`" && line.charAt(line.length-1) == "`") {
            output.push((<code class="text-highlightlight rounded-sm bg-bgmid text-sm">{line.slice(1, -1)}</code>));
        } else {
            output.push((<span class="text-text">{line}</span>));
        }
    }
    return(output);
}

export default texParse;