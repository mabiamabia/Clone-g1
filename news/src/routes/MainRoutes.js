import App from "../App";
import ArticleComponent from "../pages/ArticleComponent";
import PageComponent from "../pages/PageComponent";


const MainRoutes = {
  path: "/",
  element: <App />,
  children: [
    {
      path: "/home",
      element: <App />,
    },
    {
      path: "/article",
      element: <ArticleComponent />,
    },
    {
      path: "/page",
      element: <PageComponent />,
    }
  ],
};

export default MainRoutes;
