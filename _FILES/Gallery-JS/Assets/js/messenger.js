        // giv alle de billeder der skal vises i et andet billede den class den styles efter
        let imgSrc = document.getElementsByClassName("imgCon");
        //id på det billede der skal erstattes
        let imgCon = document.querySelector("#imgCon");

        Array.from(imgSrc).forEach((element) => {
        element.addEventListener("click", () => {
       //console.log(element);
        imgCon.src = element.src;
        });
        });