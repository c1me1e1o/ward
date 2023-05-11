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





// const colors = {
//     "colors": 
//       {
//         "color": "black",
//         "category": "hue",
//         "type": "primary",
//         "code": {
//           "rgba": [255,255,255,1],
//           "hex": "#000"
//         }
//       },
//       {
//         "color": "white",
//         "category": "value",
//         "code": {
//           "rgba": [0,0,0,1]
//           }
//         }
//     }