import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import GalleryPage from "./pages/Gallery";
import GalleryAlbum from "./pages/GalleryAlbum";

import "./index.css"

import store from "./store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <GalleryPage />
      },
      {
        path: '/gallery/:Id',
        element: <GalleryAlbum />
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
