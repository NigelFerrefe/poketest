# PokeTest

PokeTest is a web application built with React and Vite that consumes the public Pokémon API [PokéAPI](https://pokeapi.co) to display a list of Pokémon, navigate between pages, toggle between list and grid views, and view details of each Pokémon.

---

## Technology Stack

- **React + Vite**
- **React Router DOM**
- **Zustand**
- **Axios**
- **Cypress**
- **Pure CSS**

---

## Main Features

1. **Pagination**
2. **Toggle View**
3. **Pokémon Detail**
4. **Global State with Zustand**
5. **E2E Tests with Cypress**

---

## Brief Explanation of the Implemented Solution

- **Global State with Zustand**:  
  Keeps track of the current page (`currentPage`) and view type (`currentViewType`) so that when navigating to a Pokémon's detail page and back, the list preserves the exact position and view type.

- **API Consumption with Axios**:  
  - `getPokemonList` fetches paginated lists of Pokémon.  
  - `getPokemonDetail` fetches individual Pokémon information.

- **Navigation with React Router DOM**:  
  - `/` → Paginated Pokémon list.  
  - `/pokemon/:id` → Selected Pokémon's detail page.

- **Toggle View List / Grid**:  
  - Button to switch between list and grid views.  
  - Responsive grid: 4 columns on PC, 3 on tablet, 2 on mobile.

- **Pure CSS Styling**:  
  - Simple and responsive UI using flex and grid.  
  - Each Pokémon displays name, image, and type.

- **Cypress Tests**:  
  - Automated testing of the application's main user flows.


---

## Installation and Running

1. Clone the repository:

```bash
git clone https://github.com/NigelFerrefe/poketest.git
cd poketest


2. Install dependencies:

```bash
npm install

3. Run the application

```bash
npm run dev

---