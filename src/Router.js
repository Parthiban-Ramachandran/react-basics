import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DisplayList from "./components/DisplayList";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import NoPage from "./components/NoPage";
import PrintApiData from "./components/PrintApiData";
import SearchFilter from "./components/SearchFilter";
import SimpleCounter from "./components/SimpleCounter";
import BasicForm from "./components/Form";
import DataTable from "./components/DataTable";


function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route index element={<SimpleCounter />} />
        <Route path="list_data" element={<DisplayList />} />
        <Route path="login" element={<Login />} />
        <Route path="api_data" element={<PrintApiData />} />
        <Route path="search_filter" element={<SearchFilter />} />
        <Route path="counter" element={<SimpleCounter />} />
        <Route path="form" element={<BasicForm />} />
        <Route path="data_table" element={<DataTable />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default Router;