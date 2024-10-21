# FRONTEND REVISION

*Through this very basic example, we will be using the very basic API we created here : https://github.com/LouisAntoninLesieur/backend-revision*.

## 1 - Start a new React project using Vite
To start a new [React](https://react.dev/) project, you can use several available build tools. Let's use [Vite](https://vite.dev/).

### Open a new terminal

```bash
npm create vite@latest
```

Then configure the project the way you want it to be set.

We will be using `React` with `Javascript`. (Sorry TS 💙).

### From the same Terminal

```bash
cd <your_project>
npm i
npm run dev
```

Open a new browser tab. Run port `5173`.

**CONGRATS ! You launched you React application ! :)**

## 2 - Project architecture

```text
REVISION
├── public
│   └── vite.svg (default vite icon, default favicon) *can be replaced*
├── src
│   └── assets
│      └── react.svg (default react icon) *can be replaced*
│   └── components
│      ├── PokemonItem.jsx
│      └── PokemonsList.jsx
│   └── services
│      └── fetchPokemons.js
│   └── styles
│      └── PokemonList.css
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

I have written a few comments in the components files to help you understand how do the props are passed from parents to children.

## 3 - Feel free to practice !

Having reviewed the code and the project, here are a few points of improvement that you can try to implement :

- remove and replace `favicon` (in the `public` folder)
- remove and replace application `title` (in the `index.html` file)
- creation of a button that displays ONLY Pokémon types
- creation of an input that lets you find and display a Pokémon by entering its name in it
- when you click on a Pokémon's name, its specs are displayed

## 4 - Feel free to ask

Any question ? Request ? Feel free to ask me ! PR, Discord, Slack, you know how to reach me buddy ! 😁