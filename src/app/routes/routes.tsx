import { Route, Routes } from "react-router-dom";
import PageComponent from "../../components/Layout/PageComponents";
import AppPages from "../views/@index";
import { Page } from "../model/app";
import LoginPage from "../views/auth";
import DashboardPage from "../views/dashboard";

const AppPageRouter = () => {
  return (
    <Routes>
      {AppPages.map((page: Page, i: number) => {
        return (
          <>
          <Route
            key={page.name}
            path={page.url}
           
            element={<PageComponent page={page} />}
          />
        {page.dynamicPages?.map((page: Page) => {
          return (
            <Route
              key={i}
              path={page.url}
              element={<PageComponent page={page} />}
            />
          );
        })}
          </>
        );
      })}
    </Routes>
  );
};

export default AppPageRouter;



export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<PageComponent page={LoginPage}/>} />
      <Route path="/register" element={<PageComponent page={LoginPage}/>} />
      <Route path="/forgot-password" element={<PageComponent page={LoginPage}/>} />
      <Route  path= "/dashboard" element={<PageComponent page={DashboardPage}/>} />
    </Routes>
  );
};
