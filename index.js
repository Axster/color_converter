const hexToRgba = require("hex-to-rgba");

const colors = {
    'yellow' : '#FFFF00', 
    'blue': '#0000FF',
    'red': '#FF0000',
    'green': '#008000', 
    'pink': '#FFC0CB',
    'black': '#000000',
    'white': '#FFFFFF',
    'orange': '#FFA500',
    'purple': '#800080',
    'cyan': '#00FFFF',
    'magenta': '#FF00FF',
    'lime': '#00FF00',
    'maroon': '#800000',
    'olive': '#808000',
    'navy': '#000080',
    'teal': '#008080',
    'silver': '#C0C0C0',
    'gray': '#808080'
}

const convertToRgba = (color) => hexToRgba(colors[color])

const convertToString = (rgba) => 
Object.entries(colors).find(([key,value]) => hexToRgba(value) === rgba)[0]




