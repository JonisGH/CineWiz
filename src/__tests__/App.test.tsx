import {
  render,
  fireEvent,
  waitFor,
  screen,
  findByRole,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";
import axios from "axios";

test("App renders, placeholder text matches", async () => {
  render(<App />);
  expect(screen.getByRole("textbox")).toHaveTextContent(
    "Search for your favorite movies!"
  );
});

// fireEvent.click(screen.getByText('My stuff')),
// (screen.getByRole('dialog'))
// test('Sidemenu renders onClick'), async () => {
//     render (<App/>)

// }

// })

// expect(screen.getByRole('heading')).toHaveTextContent('hello there')
// expect(screen.getByRole('button')).toBeDisabled()
// test('handles server error', async () => {
//   server.use(
//     rest.get('/greeting', (req, res, ctx) => {
//       return res(ctx.status(500))
//     }),
//   )

//   render(<Fetch url="/greeting" />)

//   fireEvent.click(screen.getByText('Load Greeting'))

//   await waitFor(() => screen.getByRole('alert'))

//   expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!')
//   expect(screen.getByRole('button')).not.toBeDisabled()
// })
