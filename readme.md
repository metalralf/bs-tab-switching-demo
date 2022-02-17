# Bootstrap tab switching demo

It's a basic project to test Bootstrap navs and tabs out.

## Purpose

I wanted to switch the tabs with buttons inside the tabs, without the nav section. 

## Conclusions

- It's very painful to use these tabs with bootstrap logic without the nav section
- You can hide the nav section easily with ```d-none``` if you dont need it
- If you use ```fade``` with ```tab-pane```, you can't hide nav section bc the active item will not show, but it'll be physically there so u can click the button if you know its place 😅

## Improvements

- We don't use onclick this way now
