import { ReactNode } from "react";

interface LayoutProps {
    children: ReactNode;
}

export default function LayoutTwo({ children }: LayoutProps) {
    return (
        <>
            <div>Nav bar Two</div>
            <main>{children}</main>
            <div>Foor two</div>
        </>
    )
}