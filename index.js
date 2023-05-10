window.onload =()=>{
            const tt = document.querySelector("#input");
            const words = ['Action movies on spider series','Romance','Anime','Live videos','Nollywood','Hollywood','Browse movies on spider series..'];
            let c=0;
            const changePlaceholder = ()=>{
                tt.setAttribute('placeholder',words[c])
                if(c>=words.length-1) c=0;
                else c++;
            }
            setInterval(changePlaceholder,5000)
        }
