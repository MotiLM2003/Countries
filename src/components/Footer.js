import React from 'react';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; כל הזכויות שמורות למוחמד בשיר - {date}</p>
    </footer>
  );
}

export default Footer;
