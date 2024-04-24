function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <aside>
        <p>
          Copyright © {year} - All right reserved by Zafeer Mahmood | TaxGPT
          Assignment{" "}
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
