Project 3

Next JS Todo App
==

    The purpose of this app, is to allow users to:
        Create multiple lists of items
            Have the ability to mark individual items on their own list as completed (they default to incomplete when created)
            Have the ability to sort individual items on their own lists
        Allow anyone (logged in or not logged in) to see the lists publicly
        Public lists should always be server components

You can work in up to groups of 2, NO EXCEPTIONS

    Use Next JS 13.3.2
    Use Tailwind for styling
        Style, design and creativity are part of the grading process
    Use Supabase for authentication + managing data
    Model the data (can be a simple JSON representation)
    As a non-logged-in user, I should be able to:
        Register for an account from a link in the header
        Login to my account from a link in the header
        View other users’ todo lists
        Note: I should be redirected to the login page if I try to access a route that requires a user to be logged in
    As a logged-in user I should be able to :
        Be able to log out from a link in the header
        Have my name displayed in the header
        See my lists
        Create a new list
        When viewing one of my own lists, I should be able to edit it:
        Add items to my lists — saving should happen in real-time, i.e., i should not have to hit a save button (see https://www.berrycast.com/conversations/e4719b42-5759-5f34-a698-933a69fafcba) for clarification
        Reorder items on my list — saving should happen in real-time, i.e., i should not have to hit a save button
        Mark items as done on my list — saving should happen in real-time, i.e., i should not have to hit a save button
        Note: I should be redirected to the homepage page if I try to access a route that requires a user not to be logged in (register, login, etc.)
    Deploy to Vercel

Resources

Routes to use on the app:

    / a list of all available lists that have been created grouped user, the list names should be a link to view the list
    /user/{user_id} a list of all of the lists for a particular user
    /list/create – logged in users’ create a new list (hint it should have a name and list items (which should have a order,text,status))
    /user/{user_id}/list/{list_id} – output the current list (each item, order, status) if it is your own list, you should be redirected to /user/{user_id}/list/{list_id}/edit
    /user/{user_id}/list/{list_id}/edit edit the list_id, e.g., add, remove, reorder, mark as done. if a non-logged in user, or anyone but user_id is logged in it should redirect the user back to the homepage
    /login – login to your account
    /register – register for a new account

Deliverables:

    Data model
    Notes that you took to explain why you made decisions
    URL for app deployed to vercel
    Repo for the project

 

Notes:

    A user should have be able to create multiple lists per user
    Bonus points if you add functionality to delete a list (you can only delete your own lists!)
    Bonus points if you add a favorite system (where a user can favorite as many lists as they wish and view them in a profile page)
