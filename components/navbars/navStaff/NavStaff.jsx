"use client";

import { useState } from "react";

import { FiAlignJustify } from "react-icons/fi";

import styles from "./navStaff.module.css";

export default function NavStaff({ toggleSidebar }) {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="nav_toggle">
        <button className="btn btn-outline-secondary" onClick={toggleSidebar}>
          <FiAlignJustify />
        </button>
      </div>
      <div className="nav_title">Admin</div>
    </div>
  );
}
