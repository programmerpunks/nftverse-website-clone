import { Navbar } from "@/components/Navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
