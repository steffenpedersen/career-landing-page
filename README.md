# Career Landing Page

The project is built with Vue Cli using Babel, Router, Vuex, CSS Pre-processor (SCSS) and Linter.

I have written about this at the bottom.

- [Career Landing Page](#career-landing-page)
  - [Run Project](#run-project)
  - [Folder Structure](#folder-structure)
  - [Further Development](#further-development)
    - [Dependencies](#dependencies)
    - [Consistency](#consistency)
    - [Responsive](#responsive)
    - [Vue.js](#vuejs)

## Run Project

This is how you run the project. You don't need to do anything else than `npm install` and `npm run serve`.

**Project setup**
```
npm install
```

**Run the project**
```
npm run serve
```

## Folder Structure

Here is a list with a description of the content of the folders. I have used the structure from Vue Cli.

* **root**: The root contains all of the configurations like `.gitignore`, `babel.config.js` and `package.json`.
  * **public**: The content of this folder will simply be copied and not go through webpack. This is mainly for `index.html` and static assets `favicon.ico` and `/fonts`.
  * **src**: This folder contains all of the main `src` files.
    * **assets**: This folder contains the project’s assets such as `/images`.
    * **components**: This folder contains the Vue components.
    * **css**: This folder contains the CSS with ITCSS architecture.
    * **routes**: This folder contains all of the configuration for routes <sup>1</sup>.
    * **store**: This folder contains all of the Vuex modules <sup>1</sup>.
    * **views**: This folder contains all of the views.

<sup>1</sup> I didn't use it, so it could be deleted.

## Further Development

I have written down a few thoughts on possible further development.

### Dependencies

I am not a fan of using too many dependencies. In this project, I have used Rellax, Vue Carousel and Animate On Scroll. In the most ideal case, it would be great to make some of these features custom, so we don't end up with too much unused JavaScript and CSS.

### Consistency

I imported [my own boilerplate](https://github.com/steffenpedersen/bemit-boilerplate) for the ITCSS architecture with BEM naming convention. If I should do this again, I would be more aware of making sure the variables are matching the project design. That way, we don't end up with too many custom values in the CSS.

```css
p {
    font-size: 2em;
}

p {
    font-size: $use-a-variable;
}
```

### Responsive

As a developer, I would talk to mainly a designer on what to do with some of the elements on mobile view. The spinning circle doesn't really work small or big. When it's small, you can't read the text, and when it's big, it takes too much focus from the other elements.

### Vue.js

Maybe it was a bit too much to use the Vue CLI setup, because I didn't get to use much of what I selected. Maybe I used the setup, because it _"kriblede i mine fingre"_ to make subpages for the colleagues.
