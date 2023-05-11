fetch("http://localhost:3000/colors")
    .then(response => response.json())
    .then((colors) => {
        const container = document.querySelector("ul#colors")
        colors.forEach(color => {
            //name, hue, group
            //create an element to hold the name // maybe h2, h3
            //create element to hold description // p, maybe
            //create a list item to hold the name and description
            //append elements to list item
            //append list item to container
             

        });
    });

    const canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth - 60;
    canvas.height = 500; 

    let context = canvas.getContext("2d");
    let start_background_color = "white";
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);


    let draw_color = "black";
    let draw_width = "2";
    let is_drawing = false;

    let restore_array = [];
    let index = -1;   
     
     canvas.addEventListener("touchstart", start, false);
    canvas.addEventListener("touchmove", draw, false);
    canvas.addEventListener("mousedown", start, false);
    canvas.addEventListener("mousemove", draw, false);

    canvas.addEventListener("touchend", stop, false)
    canvas.addEventListener("mouseup", stop, false)
    canvas.addEventListener("mouseout", stop, false)



    function start(event) {
        is_drawing = true;
        context.beginPath();
        context.moveTo(event.clientX - canvas.offsetLeft, 
                       event.clientY - canvas.offsetTop);
        event.preventDefault();
    }


    function draw(event) {
        if ( is_drawing ) {
            context.lineTo(event.clientX - canvas.offsetLeft, 
                          event.clientY - canvas.offsetTop);
            context.strokeStyle = draw_color;
            context.lineWidth = draw_width;
            context.lineCap = "round";
            context.lineJoin = "round"   
            context.stroke();
            
        }
        event.preventDefault();
        
    }

    function stop(event) {
        if (is_drawing ) {
            context.stroke();
            context.closePath();
            is_drawing = false;             
        }
        event.preventDefault();


        if (event.type != 'mouseout ') {
            restore_array.push(context.getImageData(0, 0, canvas.width, canvas.height));
            index += 1;
        }
     
    }

   function change_color(element) {
        draw_color = element.style.background;
   } 

   function clear_canvas() {  
    context.fillStyle = start_background_color;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillRect(0, 0, canvas.width, canvas.height) ;
   }

   function undo_last(){

   }