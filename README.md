# Yagols - Yet another Game of Life simulator

Yagols is a browser (canvas) implementation of the well-known cellular automaton simulation Conway's Game of Life.
<br>
<br>
Yagols is one .html page with JavaScript and a bit of HTML/CSS, with no further dependencies.
<br>
<br>

Features:

  * Dynamic & non-restrictive user interface
  * Infinite universe
  * Set cells on or off in "continuous" mode
  * Drag sliders to zoom in/out or to change speed
  * Drag universe to change viewing area
  * Paste an RLE formatted text to add a pattern to the universe
  * Show all "on" cells in the universe at once; click to position viewing area

<br> 

About Conway's Game of Life :

>#### [www.conwaylife.com](http://www.conwaylife.com)
>#### [rules](http://web.stanford.edu/~cdebs/GameOfLife/#rules)
>#### [youtube](https://youtu.be/C2vgICfQawE)
>#### [google](https://www.google.nl/search?q=conway+game+of+life)

<br>

## [To Yagols . . .](http://erps.me/Yagols.html)


<br>

## INSTRUCTIONS

  * Use a mouse.
  
  * Double-click to set a cell on or off.
  
  * Click and hold button to start setting cells on or of continuously.
    Release button to stop.
    
  * Click and drag the universe to change viewing position.
  
  * Click || (stopped) to start the simulation.
  
  * Click >> (running) to stop.
  
  * Click / drag left vertical slider to change simulation speed.
  
  * Click / drag right vertical slider to zoom in or out.
    
  * Click position (x,y) to go to position 0,0 in the universe (center).
    
  * Click # to switch the grid on or off.
    The grid only shows when not too far zoomed out (>16 pixels/cell).
  
  * Click P to show a text box with instructions and to add a pattern to
    the universe by pasting RLE formatted text. Click P again to hide the
    text box.
    
  * To clear/reset the universe click P, delete all text, then click
    "Run! /Reset". Or "refresh" the browser.
    
  * Click O to show all "on" cells in the universe at once. Click anywhere
    within the cells to position the viewing area. Click O again to hide.

  * When Yagols is (re)started (refresh page) the viewing area shows the
     cells at a certain size. A bigger viewing area will show bigger cells.
     Cells of that initial size are considered to be 80% zoomed-in. The top
     left of the viewing area shows the number of pixels per cell (px/c).
     Click on it to recalculate the initial cell size.


<br>

## Changes

<br>

* V1.2 (jan 2018)
  
  * Show all "on" cells in the universe at once
  
  * Bugfixes and improvements.

<br>

* V1.1 (jan 2018)
  
  * Bugfixes and improvements.
  
<br>
  
* V1 (jan 2018)
  
  * Initial
