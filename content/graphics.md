---
title: "Graphics"
description: "Graphic tools for web development"
---

# GIMP

### How to manipulate images to make monocolor icons (PNG)

#### 1. How to select an area of specific color

1. Tools ➡ Selection Tools ➡ By Color Select
2. Click on the color area

#### 2. Make a color area transparent

1. Tools ➡ Selection Tools ➡ By Color Select
2. Click on the color area
3. Cut the selected area to make it transparent

#### 3. Make a color area a different color

1. Tools ➡ Selection Tools ➡ By Color Select
2. Click on the color area
3. Right click on the selected area ➡ Colors ➡ Map ➡ Palette Map


# Inkscape

### How to set background transparent

File ➡ Document properties ➡ Page ➡ Background ➡ Checkerboard background

### How to convert PNG to SVG

1. File ➡ Import
2. Choose to "embed" the image.
3. Select the image with the select tool (↖).
4. Path ➡ Trace Bitmap ➡ Multiple scans ➡ Colors:
  * Scans: 2
  * Remove Background checked
5. Select "Update" for a preview until settings are fine.
6. Start tracing with "OK".

Now a vectorized image of your original bitmap will be seen on top of the bitmap. We can resize or move this newly created object, delete the original image, or choose to "Object - Ungroup" in case we need to adapt shapes or colour of sub-object created.

7. If necessary, reduce size of the vectorized image (hold down CTRL to lock ratio), so that it fits on the page. Otherwise it may appear "cropped" when viewed.
8. Use "File - Save As" to save your file in SVG format.


### How to transform a multi-color SVG image to monocolor foreground and transparent background

1. Import SVG file
2. Select all elements and group them together
3. Make white color transparent:
  * Filters ➡ Fill & Transparency Utilities ➡ Light Eraser
  * Expansion: 7.0, Erosion: 10.0, Global opacity: 1.00
4. Make rest of colors white:
  * Filters ➡ Color ➡ Fade to Black or White
  * Level: 0.00, Fade to white