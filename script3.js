window.addEventListener("load", init);
      
        function init() {        
            const canvas = document.querySelector("#canvas3");
            const context = canvas.getContext("2d");

            for(let i = 1; i < 11; i++){
          
                context.beginPath();
                context.moveTo(5, 30*i);
                context.lineTo(325, 30*i);
                context.moveTo(30*i, 5);
                context.lineTo(30*i, 325);
                context.stroke();
        
        
            };
        };
