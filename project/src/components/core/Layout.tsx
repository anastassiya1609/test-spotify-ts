import classNames from "classnames";
import Header from "../layout/Header";
import Sidebar from "../layout/SideBar";
import type {LayoutProps} from "../../types";
import { useTheme } from "../../utils/provider";





export default function Layout(prop: LayoutProps) {
  const {isLightTheme} = useTheme();

  return (

     <div className ={classNames("app", { "light": isLightTheme, "dark": !isLightTheme })}>
        <Header />
        <div className="container">
          <Sidebar />
          {prop.children}
        </div>
      </div>
  );
}


