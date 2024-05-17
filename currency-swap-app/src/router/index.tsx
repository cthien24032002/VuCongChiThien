import { CurrencySwapContainer } from "../pages/currency-swap/CurrencySwapContainer";
import { HomeContainer } from "../pages/home/HomeContainer";
import { Problem1Container } from "../pages/problem1/Problem1Page";
import { Problem3Container } from "../pages/problem3/Problem3Page";

export const routerIndex:any = [
    {path: "/",element: <HomeContainer/>},
    {path: "/currency-swap",element: <CurrencySwapContainer/>},
    {path: "/problem1-page",element: <Problem1Container/>},
    {path: "/problem3-page",element: <Problem3Container/>},
]