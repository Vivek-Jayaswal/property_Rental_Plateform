import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import AppLayout from "./AppLayout/AppLayout";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import ViewPropertyDetails from "./ViewDetails/ViewPropertyDetails";
import SearchResults from "./SearchResults/SearchResults";
import UserDetails from "./SubmitDetails/UserDetails";
import AuthenticateUser from "./Authentication/AuthenticateUser";


const App = () => {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/authentication" element={<AuthenticateUser/>} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/view-property-details/:id" element={<ViewPropertyDetails/>} />
              <Route path="/search" element={<SearchResults/>} />
              <Route path="/user-details" element={<UserDetails/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
  )
}

export default App;