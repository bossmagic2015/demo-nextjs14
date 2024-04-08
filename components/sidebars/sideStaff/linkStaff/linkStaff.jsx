import Link from "next/link";

import { FiHome } from "react-icons/fi";
import { FiBookOpen } from "react-icons/fi";

export default function LinkStaff() {
  const linkStaff = [
    {
      title: "หน้าแรก",
      pathname: "/staff/main",
      icons: <FiHome />,
    },
    {
      title: "รายงาน",
      pathname: "/staff/reports",
      icons: <FiBookOpen />,
    },
  ];

  return (
    <div>
      <ul>
        {linkStaff.map((link) => (
          <Link key={link.title} href={link.pathname}>
            <li>
              {link.icons} <span> {link.title}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
