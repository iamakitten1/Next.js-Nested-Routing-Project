
import React, { ReactNode } from "react";

interface ProfileLayoutProps {
  children: ReactNode;
}

export default function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <div>
      <h2>Profile</h2>
      {children}
    </div>
  );
}

