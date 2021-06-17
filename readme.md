DOM EVENTS WITH JAVASCRIPT

Mouse Events

When you use a mouse device on a website, mouse events fire. You’ve seen the click and wheel events, but, there are even more mouse events to explore!

The mousedown event is fired when the user presses a mouse button down. This is different from a click event because mousedown doesn’t need the mouse button to be released to fire.

Mouse Down Event Image
The mouseup event is fired when the user releases the mouse button. This is different from the click and mousedown events because mouseup doesn’t depend on the mouse button being pressed down to fire.

Mouse Up Event Image
The mouseover event is fired when the mouse enters the content of an element.

Mouse Over Event Image
The mouseout event is fired when the mouse leaves an element.

Mouse Out Event Image
Instructions
1.
In this exercise, you’ll modify the list elements using mouse events. You can use the reset element that is already programmed to set the other list element back to their default styles.

First, create a function called increaseWidth() that changes the .width of itemOne to any size greater than '400px'.


2.
Now, create an event handler for itemOne that will trigger the increaseWidth() function when the mouse hovers on it.


3.
Next, create a function called changeBackground() that changes the .backgroundColor of itemTwo.


4.
Let’s use the changeBackground() function we just created as an event handler for itemTwo that will be triggered when the mouse is released over the element!


5.
Now, create a function called changeText() that changes the text of itemThree to 'The mouse has left the element'.


6.
Create an event handler for itemThree that will fire changeText() function when the mouse leaves the element.


7.
Finally, let’s create a function called showItem() that makes the itemFive element appear by changing the .display style property to 'block'.


8.
Now, create an event handler for itemFour that triggers the showItem() function when the mouse is pressed down on the element.