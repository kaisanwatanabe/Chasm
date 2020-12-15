window.onload = function(){
    const q = get_question(document.cookie,"question");
    console.log("cookie:", document.cookie);
    generateText(q);
}

function generateText(prompt){
    console.log('out putting outputs:');
      const inputs = {
      "prompt": prompt,
      "max_characters": 250,
      "top_p": 0.95,
      "seed": 23
    };
  
    fetch("https://self-help2-c6949811.hosted-models.runwayml.cloud/v1/query", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Authorization": "Bearer 4jdvOQs4mpQg4E7RSK133w==",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs)
    })
    .then(response => response.json())
    .then(outputs => {
      const { generated_text, encountered_end } = outputs;
      // use the outputs in your project
      displayText(outputs);
    });
  }
  
  function displayText(outputs){
      const text = outputs.generated_text + "...";
      console.log(text);
      const result = document.getElementById('texttoinject');
      result.innerHTML = text;
    // background(255);
    // inp.value('');
    // console.log(outputs.generated_text+"...");
    // let text = document.getElementById('')
  }

  function get_question(cookie, name){
        const nvs = cookie.split('; ');
        for(const nv of nvs){
            const nv_split = nv.split('=');
            if(nv_split.length === 1){
                if(name === ''){
                    return nv;
                }
            }
            if(nv_split[0] === name){
                return nv.substr(name.length + 1);
            }
        }
        return '';
    }