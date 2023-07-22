# book-of-sand
This repo is mostly going to be a training ground for app/coding ideas.  

The Book of Sand is a short story by Jorge Borges.  It's been a long time since I read it, but it's basically a story about a book that is constantly evolving and never retains its content, even when you go back pages.  It seems like a solid project idea to start messing with.

The basic idea will be a mad lib style find and replace application that takes a term and searches google for content and returns html \<p>\ tabs and eventually swaps content and becomes something resembling pages in a bizarre story.  

So you start with a search term or something.
Plop that term into a google search and return the html content of the nth indexed result
Find all info in <p> tags - scan these for content length to avoid short, trivial bits - we want story-like content.
Take the target paragraph of text, and run it through a Natural Language Parser.  
Grab the interesting elements - nouns, probably
And run those elements as search items into another search
Do something similar, find the nth result, grab the paragraph of interest - and re-scan in an NLP for interesting bits.  Nouns..
Find and replace a few of the nouns in the first search paragraph with nouns from the second.
These would concievably be similar/related nouns, and so the resulting text should be strange but almost sensible?

And right now the plan is to just write that first strange content into a 'page'.  
Then you have a forward button on the page (eventually will become a continuous scroll?)
This will basically re-do the whole process, but using some collection of NLP elements for a search term

The goal is to have something that almost seems sensible.  Some kind of continuity.  This may mean retaining a collection of items (history list) that hold ties back to the early searches

Eventually, the 'storyline' would not only evolve in the forward direction -- the events of the 'present' page could also change the past.  So the 'previous' page from a story would be similar to what it was - but also a little bit different.  Then going back forward would similarly be just a bit off.

It would probably also be interseting to have image or video content.  And audio.  So the whole thing could become a strangely evolving multimedia journey.

And who knows, maybe I could paramaterize 'sensitivity to initial conditions' to set expectations on the influence of random parts.  So the nth could be limited to the top 3, or top 300.  

Content thresholds could also play a factor.  Lower thresholds might introduce more noise, since it might find <p> tags that are routine content.  So, do you want 1000 characters or 10000?

Using scrolling instead of page button switches could get interesting too.  As soon as text is out of view, it could be a candidate for content-switching.  And maybe I could supply a degree of shift.  Like the further you go back up the story, the more it reaches out for new/out-of-context content.

So this readme is just notes.  I need to actually write some code.  We'll see what happens.
