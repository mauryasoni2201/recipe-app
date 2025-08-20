import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="container">
        <p className="p text-center">
          © {currentYear}{" "}
          <Link href={"https://www.linkedin.com/in/mauryasoni/"} target="_blank">
            Maurya Soni
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
