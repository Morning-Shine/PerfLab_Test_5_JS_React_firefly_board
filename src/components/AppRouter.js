import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../views/routs";
import ScreenDashboard from "../views/ScreenDashboard";
import ScreenAuthorization from "../views/ScreenAuthorization";
import { DASHBOARD, LOGIN_ROUTE } from "../utils/constants";

export default function AppRouter() {
  //переделать на роутер-дом версии 6, проверить рендер компонентов и exact
  const user = false;
  return user ? (
    <Routes>
      {privateRoutes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
      <Route path="*" element={<Navigate to={DASHBOARD} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, element }) => (
        <Route path={path} element={element} key={path} />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} />} />
    </Routes>
  );
}
