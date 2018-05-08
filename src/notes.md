Things left to do -

Using media queries for the above now

Add win counter

Finish NoMatchMessage
Edit Check-For-Win console.log to display in Message Center.

Why does cards-played take up most of the screen on screen sizes above mobile? 
    -> cards-played was changed to cards-played-visible etc. Refactor this across every media query. 

*** (needs a fair bit of refactoring for turns)
Create a player-message-center and opponent-message-center. Each one just above/below the deck. Each has it's own state, which will either say it's their turn or be blank. As turns alternate, setState of one as "Your turn" and the other as blank.