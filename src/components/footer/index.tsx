import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between px-4">
        <p className="text-sm">
          &copy; 2023 this site is owned and operated by Berlot Maximiliano. All
          rights reserved.
        </p>
        <div>
          <p className="text-sm">Email: maxiberlot@gmail.com</p>
          <p className="text-sm">Phone: +54 9 1169955775</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
