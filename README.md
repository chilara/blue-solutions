# WELCOME! 

I implemented modular programming while translating the given mock up design into actual code and integrated it with an API using API Context state management.

With Context API, I was able store data at the top level of the component tree and made it available to all other components that need it without passing props. This helps to prevent "props drilling" and makes my code easier to read and maintain.

I created a context object using the createContext function from the react library. This context object holds the data that I want to share across the application.

After creating a context object, I wrapped the components that need access to the shared data with a Provider component. The Provider component accepts a "value" prop that holds the shared data, and any component that is a child of the Provider component can access that shared data.

To consume the context in other components. I used the "useContext" hook from React.

I created a select dropdown where users can filter from the catalog using the three list of suppliers 
- FragranceX
- FragranceNet
- Morris Costumes

I implemented a search feature on the Navbar where users can also search using any keyword from the catalog.

## Technologies Used

- Next.js
- Tailwind CSS
- React Context API
- Chakra UI
- Git

## Author

- Chisom Timothy Oguine
