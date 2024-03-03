import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
interface LayoutProps {
  children?: ReactNode;
}
export const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
