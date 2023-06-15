import { FC } from "react";
import Footer from "../Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}

export default Layout;