const fs=requrire('fs');

fs.readFile("a.txt", "utf-8", (err, data)=>{
    let flag=true;
    let text="";
    if(err){
        console.error("Error", err);
    }else{
        console.log(data);
        for(let x in data){
            if(x!==' '){
                flag=true;
                if(flag){
                    text+=x;
                }
            }else if(x ===' ' && flag ===true){
                text+=x;
                flag=false;
            }
        }
    }
    return text;
})