import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import DiceProvider from "./contexts/DiceContext";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/game",
            element: <Game />,
        },
    ]);

    return (
        <>
            <DiceProvider>
                <RouterProvider router={router} />
            </DiceProvider>
        </>
    );
}

export default App;
