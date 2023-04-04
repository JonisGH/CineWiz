import * as React from "react";
import { UserListStates, MovieObject } from "../@types/@types.todo";

export const AppContext = React.createContext<UserListStates | null>(null);

const AppProvider: React.FC<React.ReactNode> = (children) => {
  const [favorite, setFavorite] = React.useState<MovieObject[]>([
    // {
    //   title: "Best movie ever",
    //   release_date: "2023-04-01",
    //   poster_path: "/thiswebsite.com",
    //   vote_average: 9,
    //   id: 1337,
    //   overview: "about the best stuff in the world",
    //   favorite: false,
    //   watchlist: false,
    // },
  ]);

  const saveToFavorites = (movie: MovieObject) => {
    const newFavorite: MovieObject = {
      title: movie.title,
      release_date: movie.release_date,
      poster_path: movie.poster_path,
      vote_average: movie.vote_average,
      id: movie.id,
      overview: movie.overview,
      favorite: true,
    };
    setFavorite([...favorite, newFavorite]);
  };
  // const updateTodo = (id: number) => {
  //     todos.filter((todo: ITodo) => {
  //       if (todo.id === id) {
  //         todo.status = true
  //         setTodos([...todos])
  //       }
  //     })

  return (
    <AppContext.Provider
      value={{ favorites: [], watchlist: [], saveToFavorites }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;

// context/todoContext.tsx
// import * as React from 'react';
// import { TodoContextType, ITodo } from '../@types/todo';

// export const TodoContext = React.createContext<TodoContextType | null>(null);

// const TodoProvider: React.FC<React.ReactNode> = ({ children }) => {
//   const [todos, setTodos] = React.useState<ITodo[]>([
//     {
//       id: 1,
//       title: 'post 1',
//       description: 'this is a description',
//       status: false,
//     },
//     {
//       id: 2,
//       title: 'post 2',
//       description: 'this is a description',
//       status: true,
//     },
//   ]);
//   const saveTodo = (todo: ITodo) => {
//     const newTodo: ITodo = {
//       id: Math.random(), // not really unique - but fine for this example
//       title: todo.title,
//       description: todo.description,
//       status: false,
//     };
//     setTodos([...todos, newTodo]);
//   };
//   const updateTodo = (id: number) => {
//     todos.filter((todo: ITodo) => {
//       if (todo.id === id) {
//         todo.status = true;
//         setTodos([...todos]);
//       }
//     });
//   };
//   return <TodoContext.Provider value={{ todos, saveTodo, updateTodo }}>{children}</TodoContext.Provider>;
// };

// export default TodoProvider;
