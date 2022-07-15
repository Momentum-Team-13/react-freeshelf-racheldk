# Things to research/look into 
- disclosure behavior [this ARIA practices document with examples](https://www.w3.org/TR/wai-aria-practices-1.1/#disclosure).


# App Requirements: 
[ ] When the information for the book is clicked, the section expands to show additional information about said book 
[ ] When the information is clicked again, book display collapses to original view 
[ ] Book display    
    [ ] title
    [ ] author 
    [ ] short description 
    [ ] book cover image 
[ ] additional info 
    [ ] url 
    [ ] publisher
    [ ] publication date
    [ ] expanded description
    
[ ] handle cases where not all data is available (make sure your UI design can accommodate missing or problematic data and/or supply placeholders so the page doesn't look broken without it) _how??_
[ ] copy/paste book list into the code -- _but where??_   

# Things to do! 
[x] sketch views 
[x] delete files you don't need 
[x] can load something on the page 
[x] copy-paste book info 
[x] make one book (expanded version): 
    [x] hardcode 
    [x] pull data in 
[x] loop through books
[x] make component of info to be expanded 
[x] read ARIA thing before expanding button more 
[ ] include state:
    [x] all books expanded or not 
    [ ] button for user to choose expanded or not 
    [ ] button has ARIA stuff https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/
    [ ] make ternery thing to display expanded or not for one instance 
[ ] styling 

# Fix:
[ ] make image show up 


<!-- [ ] sketch children/trees? how will props pass? 

[ ] make book component(s??)
[ ] loop through the list data so each book gets its own component on the page 
[ ] put the list data somewhere so it can be accessed -->




# Questions
- Where will the state (basic or expanded) be kept? I'm guessing on the book, since that's the one that will have to be changed? But in the tic tac toe tutorial it was kept on the game board, not the individual square....so....maybe the book list? 

- is it one book component that has two different display options? or like two different component options and one get's displayed depending on...state? 
