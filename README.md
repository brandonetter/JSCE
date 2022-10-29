# JSCE
Javascript Color Engine

Generate and manipulate colors in Javascript with Objects!

## Making a color
Instantiate a color with HEX or RGB
```
const color = JSCE.createColor("#EEAAAE");
const otherColor = JSCE.createColor(200,120,20,255);
```

## Using a color
Created colors can be read as HEX, HSLA or RGBA (preformatted for CSS)
```
someElement.style.backgroundColor = color.hsla // hsla(356,66.7%,80%,1.00)
someElement.style.color =  color.rgba // rgba(238,170,174,255)
```

## Manipulating a color
```
// Generate 3 analogous colors by manipulating the Hue (.h) of any color
const color = JSCE.createColor("#AAAAEE");
const color1 = color.hex;
color.h +=15;
const color2 = color.hex;
color.h +=15;
const color3 = color.hex;
```
![image](https://user-images.githubusercontent.com/4108484/198845909-89583390-8506-4c12-b4fb-b4eae64ce0a2.png)

```
//Generate monochromatic shades with ease (great for gradients and shadows)
const color = JSCE.createColor("#7E7CAE");
const colorShade0 = color.hex;
const colorShade1 = color.monochromatic; 
//18% darker than color if color's lightness as defined by HSLA is >50, otherwise 18% lighter
const colorShade2 = color.monochromatic; 
//36% darker or lighter than color depending on the same criteria. color is not affected.

// .monochromatic will continue adding or subtracting lightness until you reach black or white.
// Changing any value of color
// will reset this count back to the original 18%. This can be overwritten manually
// with color.monochromaticCounter = 1
```
![image](https://user-images.githubusercontent.com/4108484/198845971-c2c40efa-31d8-4afb-9a01-599356b00557.png)

```
// Generate the complementary color
const compColor = color.complementary;
```

```
//Pick a white or black contrasting color for Text depending on the apparent brightness of this color.
const textColor = color.text;
```



