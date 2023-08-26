import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink(props) {
  const router = useRouter();
  const active = (router.pathname === props.route) ? " active" : "";

  return (
    <li className="nav-item">
      <Link
        href={props.route}
        className={
          "nav-link" + active
        }
      >
        {props.name}
      </Link>
    </li>
  );
}

