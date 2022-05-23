import type { ReactParentProps } from "../shared/customTypes";
import Header from "./header/Header";
import Main from "./main/Main";

const App: React.FC<ReactParentProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  );
};

export default App;
