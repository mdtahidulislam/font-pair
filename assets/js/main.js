const fonts = [
    {
        hfont: 'Abril Fatface',
        tfont: 'Lato'
    },
    {
        hfont: 'Alegreya',
        tfont: 'Alegreya Sans'
    },
    {
        hfont: 'Archivo',
        tfont: 'Roboto'
    },
    {
        hfont: 'Bebas Neue',
        tfont: 'Old Standard TT'
    },
    {
        hfont: 'Cooper Hewitt',
        tfont: 'Cooper Hewitt'
    },
    {
        hfont: 'Exo2',
        tfont: 'Alegreya Sans'
    },
    {
        hfont: 'Fira Sans',
        tfont: 'PT Serif'
    },
    {
        hfont: 'Josefin Sans',
        tfont: 'Josefin Slab'
    },
    {
        hfont: 'Karla',
        tfont: 'Spectral'
    },
    {
        hfont: 'Lato',
        tfont: 'Merriweather'
    },
    {
        hfont: 'Lato',
        tfont: 'Roboto'
    },
    {
        hfont: 'League Gothic',
        tfont: 'PT Serif'
    },
    {
        hfont: 'League Spartan',
        tfont: 'Libre Baskerville'
    },
    {
        hfont: 'Libre Baskerville',
        tfont: 'Source Sans Pro'
    },
    {
        hfont: 'Libre Franklin',
        tfont: 'Libre Baskerville'
    },
    {
        hfont: 'Lobster',
        tfont: 'Roboto'
    },
    {
        hfont: 'Lora',
        tfont: 'Merriweather'
    },
    {
        hfont: 'Merriweather Sans',
        tfont: 'Merriweather'
    },
    {
        hfont: 'Montserrat',
        tfont: 'Merriweather'
    },
    {
        hfont: 'Montserrat',
        tfont: 'Droid Serif'
    },
    {
        hfont: 'Nexa',
        tfont: 'Crimson Pro'
    },
    {
        hfont: 'Noir',
        tfont: 'Playfair Display'
    },
    {
        hfont: 'Open Sans',
        tfont: 'Source Sans Pro'
    },
    {
        hfont: 'Oswald',
        tfont: 'Montserrat'
    },
    {
        hfont: 'Oswald',
        tfont: 'Old Standard TT'
    },
    {
        hfont: 'Playfair Display',
        tfont: 'Raleway'
    },
    {
        hfont: 'PT Sans',
        tfont: 'PT Serif'
    },
    {
        hfont: 'Raleway',
        tfont: 'Merriweather'
    },
    {
        hfont: 'Source Sans Pro',
        tfont: 'Times New Roman'
    }
]

// get action btn
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

const slideNumber = document.querySelector('.slide-number');
const hFont = document.querySelector('.h-font');
const tFont = document.querySelector('.t-font');

const hFontName = document.querySelector('.heading-font');
const tFontName = document.querySelector('.text-font');

// init counter
let i = 0;

// next btn event
nextBtn.addEventListener('click', () => {
    if (i >= fonts.length - 1) {
        i = -1;
    }
    i++;
    addFont(i);
})

prevBtn.addEventListener('click', () => {
    console.log(i);
    if (i <= 0) {
        i = fonts.length;
    }
    i--;
    console.log(i);
    addFont(i);
})




// dropdown option
const selectHeadingFont = document.getElementById('select-heading-font');
const selectTextFont = document.getElementById('select-text-font');
const fragment = document.createDocumentFragment();

// fonts.forEach((font, index) => {
//     const optionElement = document.createElement('option');
//     optionElement.innerHTML = `${font.hfont} + ${font.tfont}`
//     optionElement.value = `${index}`;
//     fragment.appendChild(optionElement);
// });

// selectFont.appendChild(fragment);

// GET ALL GOOGLE FONTS
const API_KEY = 'AIzaSyAV5-rBFPIkyTkVTi1dsUg3pRj5wOHAF9E';
fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)
    .then(res => res.json())
    .then(data => {
        const fonts = data.items;

        fonts.forEach(font => {

            // DROPDOWN OPTION FOR HEADING
            allGoogleFonts(font, 'select-heading-font');
            // DROPDOWN OPTION FOR TEXT
            allGoogleFonts(font, 'select-text-font');

            // load font
            // WebFont.load({
            //     google: {
            //         families: [family]
            //     }
            // });  
        });
    })

// MAKE DROPDOWN OPTION WITH ALL GOOGLE FONTS
const allGoogleFonts = (font, elementId) => {
    //const allFonts = [];
    const family = font.family;
    //    console.log(family);
    //allFonts.push(family);

    const optionElement = document.createElement('option');
    optionElement.innerHTML = family;
    optionElement.value = family;
    fragment.appendChild(optionElement);
    document.getElementById(elementId).appendChild(fragment);
}

// SELECT FONT FOR HEADING & TEXT
const selectFont = (elementId) => {
    const selectedElement = document.getElementById(elementId);
    const selectedFont = selectedElement.options[selectedElement.selectedIndex].text;
    if (elementId === 'select-heading-font') {
        hFont.style.fontFamily = `'${selectedFont}',sans-serif`;
    }
    if (elementId === 'select-text-font') {
        tFont.style.fontFamily = `'${selectedFont}',sans-serif`;
    }
}


// ADD FONT
const addFont = (i, value) => {
    slideNumber.innerText = i + 1;
    const hfont = fonts[i].hfont;
    const tfont = fonts[i].tfont;

    hFont.style.fontFamily = `'${hfont}',sans-serif`;
    tFont.style.fontFamily = `'${tfont}',sans-serif`;

    hFontName.innerText = hfont;
    tFontName.innerText = tfont;
}


