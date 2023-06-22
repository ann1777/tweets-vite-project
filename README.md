# tweets-cards-gallery

## Project description

Create minimal working App according Project requirements

## Project requirements

1. Create user cards according to the layout.

![Layout](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=VoiYTfiXggVItgVd-1)

2. The Follow button text changes to Following after clicking on the button. Also changes button color and followers numbers increments after that. The initial followers numbers is 100.500 followers, and it becomes 100.501 after button clicking.

3. The final user's actions result should be recorded. F.e. if you click on the button and refresh the page, the button should still remains in the Following state and with the appropriate color, and the followers number doesn't decreases to the initial value.

4. When you click the button again, its text and color change to their initial state. Also the followers number decreases by 1 after that (100.500).

5. The number 100.500 should be written with one value in the code (100500) and displays separated by a comma in the UI (100,500).

6. Create your personal backend using mockapi.io for development.

7. Create the user resource. Use the user resource constructor and describe the user object according following:
   7.1. User should have fields: id, user, tweets, followers, avatar

   ![Users](https://textbook.edu.goit.global/lms-career-homework/uk/img/image-2.jpg)

   7.2. Avatar's images should be added as separated url in the avatar property.

   7.3. Create 12 users with different values in database. Implement pagination. The first page should shows three tweets, and rest of the tweets should be uploaded on Load More button clicking.

   7.4. Edit/replace data for users resource. Data must be an array and a valid JSON.

### Extra tasks

8. Create routing using React Router.

The application must have the following routes. If the user entered by a non-existent route, he must be redirected to the home page. '/' – Home component, home page. Styling and design at your discretion '/tweets' - component tweets, page with display of tweets. The tweets page should have a Back button that leads to the main page.

9. Add filtering. It should be a Dropdown with 3 options: show all, follow, followings. 'show all' - show all tweets. 'follow' - show tweets with follow status. 'followings' - show tweets with following status.
