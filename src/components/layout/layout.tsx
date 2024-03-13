import { ReactNode } from "react";
import Navbar1 from "./navbar";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
        <Navbar1/>
        <main>{children}</main>
        <div>Foor One</div>
    </>
    )
  }