
# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Sarthak Mital**

Time spent: 15 hours spent in total

Link to project: https://glitch.com/edit/#!/sassy-materialistic-marble

## Required Functionality

The following **required** functionality is complete:

* [+] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [+] "Start" button toggles between "Start" and "Stop" when clicked. 
* [+] Game buttons each light up and play a sound when clicked. 
* [+] Computer plays back sequence of clues including sound and visual cue for each button
* [+] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [+] User wins the game after guessing a complete pattern
* [+] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [+] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [+] Buttons use a pitch (frequency) other than the ones in the tutorial
* [+] More than 4 functional game buttons
* [+] Playback speeds up on each turn
* [+] Computer picks a different pattern each time the game is played
* [+] Player only loses after 3 mistakes (instead of on the first mistake)
* [+] Game button appearance change goes beyond color (e.g. add an image)
* [+] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [+] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [+] List anything else that you can get done to improve the app!
* [+] Flash all buttons for each wrong guess
* [+] Repeat the pattern on wrong guess to give user another chance



## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](your-link-here)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
* https://github.com/amaneureka/T-Rex/issues/5
* https://stackoverflow.com/questions/29839996/calling-more-than-1-function-in-settimeout
* https://thenounproject.com/term/glyph/
* https://stackoverflow.com/questions/11380776/replacing-button-with-image

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

While following the tutorial, i got stuck at the part where it asked us to implement sounds for different buttons. The tutorial suggested that it would only take an AudioContext object to generate sound, but it didn't seem to work on my end. I tried switching browsers, devices, but nothing worked. The next step i took to diagnose the issue was pull up the javascript console and look up if there was an error being generated everytime a sound was being played. I've previously used github and stackoverflow to search up problems and after about half an hour, i was at the root of the issue. It turns out that the updated AudioContext requires a user action in order to activate audio on the page. I fixed it using a line from github. This also made realise that this apparent feature could also be the reason why youtube videos dont automatically start playing when you open them in a new tab.

Implementing the timer also proved to be challenge. While placing the actual visual element was relatively easy, making it function correctly was relatively hard. Javascript seems to behave in a weird way, where it would start the time before the cue would finish playing even thought the code to initiate the timer was placed after it. I fixed it by delaying the timer by the time it takes for every play sequence to complete using the setTimeout function.



3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

There are a few questions i have caught upon while making this project. For one, i'm really not sure how asynchronus tasks are performed while developing a website. For example, while developing the flashbutton "animation" for a wrong guess, an iteration over all buttons seemed to work fine but i couldn't actually make them blink simultaneousy. While end result was good enough because of processing speeds, i would like to learn more ways of getting around asynchronous processes since i believe robust websites must involve a lot of them.

I also tried using this website on my phone and the experience was not great. Almost every website made today is scalable from a 4" phone to a 90" TV, and i am really intrigued to learn how that works. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

If i had more time to work on it, I would have definetly have made it look better. It currently looks almost exactly like the one from the tutorial, and it isn't pretty. Moreover, since this was my first time working on a website, or CSS/HTMl/Javascript in general, most of my code looks clunky. The resources i used to implement certain functions(like new sounds, images for the buttons) had multiple ways to implement it but i wanted my first attempt to be simple and functional, not pretty. I would have worked on making the code more concise and readable.

As for additional features, i would have really liked to implement actual animations into it and made it more fun. Additional game modes could also have been interesting(like one with increasing number of cues to no limit, testing the limits of the players memory), along with an online multiplayer pool competing for the fastest times.



## License

    Copyright [Sarthak Mital]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.