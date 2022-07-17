# Things to research/look into 
- disclosure behavior [this ARIA practices document with examples](https://www.w3.org/TR/wai-aria-practices-1.1/#disclosure).


# App Requirements: 
[x] When the information for the book is clicked, the section expands to show additional information about said book 
[x] When the information is clicked again, book display collapses to original view 
[x] Book display    
    [x] title
    [x] author 
    [x] short description 
    [x] book cover image 
[x] additional info 
    [x] url 
    [x] publisher
    [x] publication date
    [x] expanded description
    
[x] handle cases where not all data is available (make sure your UI design can accommodate missing or problematic data and/or supply placeholders so the page doesn't look broken without it) conditional rendering 
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
[x] styling 
    [x] image in separate div spaced nicely? something about flex-direction? 
    [x] "Book" heading 
    [x] card: 
        [x] differentiate text chunks 
        [x] button styling? 
[x] conditional rendering: only show up if there's content        

# Fix:
[x] make image show up 


# Rubric: 3s
[x] meets all requirements (see above)
[x] nicely styled
[x] uses aria-expanded attribute 
[x] breaks application into multiple components in a useful way 


# Extras 
[x] provide alternative for broken image src 

# Questions
- Where will the state (basic or expanded) be kept? I'm guessing on the book, since that's the one that will have to be changed? But in the tic tac toe tutorial it was kept on the game board, not the individual square....so....maybe the book list? 

- is it one book component that has two different display options? or like two different component options and one get's displayed depending on...state? 
