import { Route, Routes } from "react-router-dom";
import { Default } from "./layouts/DefaultLayout";
import { Home } from "./screens/Home";
import { Issue } from "./screens/Issue";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route path="/" element={<Home />} />
        <Route path="/issue" element={<Issue />} />
      </Route>
    </Routes>
  )
}