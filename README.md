# Yagols - Yet another Game of Life simulator

<br>

### Yagols is

  * Not a game.

  * A browser (canvas) implementation of the well-known simulation "Conway's Game of Life" (cellular automaton).
  
  * One big .html page with JavaScript and a bit of HTML/CSS. No further dependencies.
  
  * A bit of a hack... But it works. Clean code was not an objective in this project.

<br>

### Features:

  * Sleek real-time user interface.
  
  * Infinite universe.
  
  * Older cells get a darker color.
  
  * Drag sliders to zoom in/out or to change simulation speed.
  
  * Drag universe to change viewing area position.
    
  * Change GoL rule.
  
  * Paste RLE formatted text to add/replace patterns.
  
  * Show all "on" cells in the universe, fitted within the viewing area. Click to change viewing area position.
  
  * Rich & completely modeless interface with lots of feedback. Do anything at any time without restrictions.
  
  * Relatively fast due to some code optimizations.

<br>
<br>

## [To Yagols . . .](http://erps.me/Yagols.html)

<br> 
<br>

### About Conway's Game of Life :

<br>

>#### [conwaylife.com](http://www.conwaylife.com)
>#### [game of life](http://beltoforion.de/article.php?a=game_of_life)
>#### [wonders](http://www.math.com/students/wonders/life/life.html)
>#### [youtube](https://youtu.be/C2vgICfQawE)
>#### [google](https://www.google.nl/search?q=conway+game+of+life)

<br>
<br>

## INSTRUCTIONS

  * Works best with desktop or laptop.
  
  * Double-click to set one cell on or off.
  
  * Click and hold button to set multiple cells on or off. Release button to stop.
    
  * Click and drag the universe to change viewing area position.
  
  * Click || (stopped) to start the simulation, automatically calculating new generations.
  
  * Click >> (playing) to stop the simulation.
  
  * Click > to calculate one new generation. Hold to repeat.
  
  * Click and drag left vertical slider to change simulation speed.
  
  * Click and drag right vertical slider to zoom in or out.
    
  * Click position (x,y) to go to position 0,0 in the universe (center).
    
  * Click # to switch the grid on or off. The grid only shows when not too
    far zoomed out (>16 pixels/cell).
  
  * Click P to show a text box with instructions and to add a pattern to
    the universe by pasting RLE formatted text. Click P again to hide the
    text box.
    
  * Click U to show all "on" cells in the universe, fitted within the viewing
    area. Click anywhere within the shown universe to change the viewing
    area position. Click U again to hide.
    
  * The default rule is B3/S23 (born with 3 neighbour cells, survive with
    2 or 3 neighbour cells). To change the rule just type "b", "B", "s"
    or "S" and one or more digits "0".."8". Press Enter or click "Accept"
    to accept the new rule. Click "Forget" or any key that is not "b", "B",
    "s", "S", "0".."9", "d" or "D" or Enter to forget about it. Press "d"
    or "D" to accept the default rule. Doesn\'t work when P (text box with
    pattern) is active. The new rule will be applied and set when the next
    new generation is calculated. Going back or forth in history sets the
    rule that was set in the visible generation. When a new rule has been
    accepted (but not set) the previous rule shows next to the new rule,
    in darker green and smaller font. Double click on it to re-set the
    previous rule.

  * When Yagols is (re)started (refresh page) the viewing area shows the
    initial cells at a certain size. A bigger viewing area will show bigger
    cells. Cells of that initial size are considered to be 80% zoomed-in.
    The top left of the viewing area shows the number of pixels per cell 
    px/c). Click on it to recalculate the initial cell size, using the
    current size of the viewing area.
    
<br>

### Tips

  * To clear/reset the universe click P, delete all text, then click
    "Run! /Reset". Or refresh the browser.
    
  * To clear the viewing area, click P, replace any text with, for example,
    "100b60$", then click "Run! /Replace". This will clear an area, centered
    in the viewing area, as large as 100x60 cells.
    
  * To let this text appear again, click P, delete all text, click "Run! /Add"
    and then click P again.

<br>
<br>

## Changes

<br>

* V2 (jan 2018)
  
  * The rules can be changed.
  
  * Misc. improvements.

<br>

* V1.3 (jan 2018)
  
  * Button > to calculate one generation.
  
  * Misc. improvements.

<br>

* V1.2 (jan 2018)
  
  * Show all "on" cells in the universe at once.
  
  * Bugfixes and improvements.

<br>

* V1.1 (jan 2018)
  
  * Bugfixes and improvements.
  
<br>
  
* V1 (jan 2018)
  
  * Initial
