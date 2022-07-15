# Things to research/look into 
- disclosure behavior [this ARIA practices document with examples](https://www.w3.org/TR/wai-aria-practices-1.1/#disclosure).


# App Requirements: 
[x] When the information for the book is clicked, the section expands to show additional information about said book 
[x] When the information is clicked again, book display collapses to original view 
[ ] Book display    
    [x] title
    [x] author 
    [x] short description 
    [ ] book cover image 
[x] additional info 
    [x] url 
    [x] publisher
    [x] publication date
    [x] expanded description
    
[ ] handle cases where not all data is available (make sure your UI design can accommodate missing or problematic data and/or supply placeholders so the page doesn't look broken without it) _how??_
[x] copy/paste book list into the code 

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
[x] include state:
    [x] all books expanded or not 
    [x] button for user to choose expanded or not 
    [x] button has ARIA stuff https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/ 
[x] components in separate files    
[ ] styling 
    [ ] image in separate div spaced nicely? something about flex-direction? 
    [ ] "Book" heading 
    [ ] card: 
        [ ] differentiate text chunks 
        [ ] button styling? 

# Fix:
[x] make image show up 


# Rubric: 3s
[ ] meets all requirements (see above)
[ ] nicely styled
[x] uses aria-expanded attribute 
[ ] breaks application into multiple components in a useful way 


<!-- [ ] sketch children/trees? how will props pass? 

[ ] make book component(s??)
[ ] loop through the list data so each book gets its own component on the page 
[ ] put the list data somewhere so it can be accessed -->




# Questions
- Where will the state (basic or expanded) be kept? I'm guessing on the book, since that's the one that will have to be changed? But in the tic tac toe tutorial it was kept on the game board, not the individual square....so....maybe the book list? 

- is it one book component that has two different display options? or like two different component options and one get's displayed depending on...state? 
