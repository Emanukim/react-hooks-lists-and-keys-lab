import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  // const linksElements = links.map((link) => {
  // return <a href="link" key={link}>{link}</a>;
  // });

  return <nav>
      {/* {linksElements} */}
      <a href="#home" key={links[0]} >home</a>
      <a href="#about" key={links[1]}  >about</a>
      <a href="#projects" key={links[2]}  >projects</a>
  </nav>;
}

export default NavBar;
