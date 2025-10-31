import { QueryProvider } from "./providers/query-provider";
import { RouterProvider } from "./router/router";

export const App = () => {
  return (
    <QueryProvider>
      <RouterProvider />;
    </QueryProvider>
  );
};
