

fetch("http://localhost:3000/colors")
    .then(response => response.json())
    .then(json => console.log(json))

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