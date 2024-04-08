"use client";

// Import React
import { useState } from "react";
import { useRouter } from "next/navigation";

// Import Styles
import styles from "./login.module.css";

// Import Sweetaler2
import Swal from "sweetalert2";

export default function StaffLoginPage() {
  //   ประกาศตัวแปรรับค่า Input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   เรียกใช้งาน router
  const router = useRouter();

  //   ใช้ function นี้ เมื่อ form มีการ submit ใช้งานเป็น arrow function
  const handleSubmit = (e) => {
    e.preventDefault(); //ป้องการไม่ให้ form reset

    try {
      // ตรวจสอบว่าข้อมูลตรงกันกับฐานข้อมูล

      // จำลอง username และ password รอ fetch จาก api
      if (username === "admin" && password === "admin") {
        Swal.fire({
          title: "เข้าสู่ระบบสำเร็จ",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          router.push("/staff/main");
        });
      } else {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: "เข้าสู่ระบบไม่สำเร็จ",
          icon: "error",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div
      className={`${styles.wrap} d-flex align-items-center justify-content-center`}
    >
      <div className={styles.card_login}>
        <div
          className={`${styles.title} d-flex align-items-center justify-content-center`}
        >
          <h4 className="fw-bold">Login</h4>
        </div>
        <div className={styles.content}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">ชื่อผู้ใช้</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">รหัสผ่าน</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="btn_submit d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-3 mb-3">
                เข้าสู่ระบบ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
