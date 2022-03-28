import { debounce } from "lodash";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { HomePage } from "./pages/home-page";
import { ImagePage } from "./pages/image-page";
import { store } from "./store";
import { saveState } from "./store/images/reducer";

store.subscribe(
  debounce(() => {
    saveState(store.getState());
  }, 800)
);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header title=".image gallery" />
          <Routes>
            <Route path="/image-gallery/images/:id" element={<ImagePage />} />
            <Route path="/image-gallery" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
