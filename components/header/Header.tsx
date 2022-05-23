import { Avatar, IconButton, Button } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import Nav from "../navbar/Nav";
import StyledHeader from "../styles/header/StyledHeader";
import logo from "../../public/logo.png";
import SearchIcon from "../icons/SearchIcon";
import BookmarkIcon from "../icons/BookmarkIcon";
import bellIcon from "../../public/bell.png";
import BasicButton from "../buttons/BasicButton";
import StyledInput from "../styles/StyledInput";
import Form from "../form/Form";

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <StyledHeader>
      <div style={{ width: "50px" }}>
        <Image src={logo} alt="logo" />
      </div>
      <Nav />
      <Form width="50%">
        <SearchIcon />
        <StyledInput
          style={{ marginLeft: "10px" }}
          type="text"
          value={inputValue}
          placeholder="Cerca su Al.ta Cucina"
          id="searchInput"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </Form>
      <IconButton color="inherit">
        <BookmarkIcon />
      </IconButton>
      <IconButton>
        <Image src={bellIcon} alt="" />
      </IconButton>
      <BasicButton text="Carica Ricetta" bgColor="var(--primary-color)" />
      <Avatar />
    </StyledHeader>
  );
};

export default Header;
