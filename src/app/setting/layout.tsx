import { ReactNode } from "react";

interface SettingsLayoutProps {
    children : ReactNode;
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
    return (
        <div>
            <h2> Settings </h2>
            {children}
        </div>
    );
}
