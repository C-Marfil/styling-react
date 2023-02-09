# Styling React Components

In the lecture, we learned about three different ways of styling React components; traditional CSS, CSS modules and styled components. Your task is to style the three different containers with each different method of applying CSS. The CSS for each of these containers should be independent of each other.

# Challenge 1

If you re-size the window using inspect mode, you will see that the app is not responsive. One of the main problems are the buttons in the header which bunch together for small screen size. See if you can adjust the CSS to make the responsive by adjusting the CSS. Try using a media query or the flex-wrap property to help you.

# Challenge 2 (hard)

The endpoint we are hitting for each container returns a list of pokemon. For each pokemon we receive an object with a name, and a url. For example:

```js
{
    name: "charmander",
    url: "https://pokeapi.co/api/v2/pokemon/4"
}
```

When you hit that url, you will get an object with lots of info about that pokemon including sprites (small pixellated pictures).

Your task is to create an image in the pokemon card that appears when your mouse hovers over the card. Here are some steps to help you:

1. Create two states in the container: selected, and image
2. Add a `onMouseOver` property to the div containing the pokemon that sets the `selected` state to the url for the pokemon. This should be `thisPokemon.pokemon.url`
3. Create another `useEffect` in the container that hits the url in the `selected` state. Then in the `.then` block, set the image for that pokemon. This should be `res.data.sprites.front_default`
4. Render the image in the same div that displays the name of the pokemon but only have the image render if the pokemon you are hovering over is the same as the selected pokemon.
5. Style the image so that it appears above or below the card without mocing any of the other pokemon divs out of the way.
