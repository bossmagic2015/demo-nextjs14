"use client";

// Import React
import React, { useState } from "react";

// Import Styles
import styles from "./main.module.css";

// Import Layouts
import NavStaff from "@/components/navbars/navStaff/NavStaff";
import SideStaff from "@/components/sidebars/sideStaff/sideStaff";

export default function StaffMainLayout({ children }) {
  // Toggle show & hide sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log();
  };

  return (
    <div className={styles.body_wrap}>
      <div className={`${styles.sidebar} ${!isSidebarOpen && styles.closed}`}>
        <div className={styles.sidebar_menu}>
          <SideStaff />
        </div>
      </div>
      <div className={styles.content}>
        <div className={`${styles.navbar}`}>
          <NavStaff toggleSidebar={toggleSidebar} />
        </div>
        <div className={styles.main_content}>{children}</div>
        <div className={styles.footer}>Footer</div>
      </div>
    </div>
  );
}
