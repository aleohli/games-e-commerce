## Comments on the implementation

- I’ve changed a bit the menu and `Clear Cart` button linear gradient to look more like on the mockup - the properties’ values from Figma looked much different.
- There were multiple different styles for the text, colours etc. - I kept it as it is because it was mentioned ‘accurately’ in the task - however in a real work I would opt for unification.
- Badge `OWNED` styling was mismatched between the mockup and the Figma properties - I adjusted it as I preferred.
- I added some stuff for better experience → loader, animation when product added to cart and some styling for buttons in different states (disabled, hover).
- I focused on accessibility to a basic extent, as it was not specified in the requirements.

## Fields for improvement

- Style variables unification (as mentioned above)
- Error handling - e.g. showing error toast on request failure
- Information that there are no products when empty products fetched
- Wildcard path for PageNotFound
- Using SSR
