import { useRouter } from "next/router";
import BasicButton from "../buttons/BasicButton";
import type { ReactParentProps } from "../../shared/customTypes";
import Link from "next/link";
import { createRef } from "react";

type NavItemProps = ReactParentProps & {
  text: string;
  path: string;
};

const NavItem: React.FC<NavItemProps> = (props) => {
  const router = useRouter();
  const ref = createRef<HTMLButtonElement>();

  const isActive = () => {
    return router.asPath === props.path;
  };

  return (
    <Link href={props.path}>
      <li style={{ margin: "0 5px" }}>
        <BasicButton
          ref={ref}
          {...props}
          color={isActive() ? "var(--secondary-color)" : "inherit"}
          bgColor={isActive() ? "#fad389" : "white"}
        ></BasicButton>
      </li>
    </Link>
  );
};

export default NavItem;
