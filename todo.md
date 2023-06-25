# TODO

- [x] Breakpoints between mobile and tablet need to be checked, content container is breaking before the image itself
- [ ] Split Multiple image div section into ImageSize component or ImageItems since this is used in most of the compontes in [...slug] pages
- [x] Fix loading skeleton not being properly aligned on /speakers and /earphones routes
- [ ] Create dropdown component and add it to the navigation
- [ ] Create a checkout page
- [ ] Connect stripe checkout with commerce
- [x] refactor navigation so that the bottom white line is not seen on [...slug] pages
- [x] link in category section should be /[category]/[slug] and not hardcoded value of /headphones/[slug]
- [ ] error handling if(!data) should be done in all pages and should throw an error page or redirect to 404 page
- [ ] add a 404 page / style already existing 404 page
- [ ] go back should be made into a link button component since its used in multiple pages

## Checkout page
- [ ] create inputs
- [ ] use react-hook-form
- [ ] only able to check out if logged in - auth check needed only here

## Refactoring
- [ ] refactor Popover component to make it more generic
- [x] refactor useSetPosition and separate it into hook files so it can be used by other components as well

## Cart and Cart Store
- [ ] should add localStorage or maybe via cookies to store cart items even if the browser is refreshed or closed
- [ ] the one above needs to be handled via zustand store, there is probably a way to persist items on refresh with zustand