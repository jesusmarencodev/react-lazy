import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import logo from "../logo.svg";
import { routes } from "./routes";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            {routes.map(({ to, name }) => (
              <li key={to}>
                <NavLink
                  
                  to={to}
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <Routes>
          {routes.map(({path, name, component:Component})=>(
            <Route key={name} path={path} element={<Component/>} />

          ))
          }
          <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
