import { FC } from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <main className=" overflow-x-hidden">
            {children}
        </main>
    );
}

export default Layout;