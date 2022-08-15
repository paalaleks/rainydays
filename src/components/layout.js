function Layout({ children }) {
  return (
    <>
      <div className="page-padding">
        <div className="page-center">
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}

export default Layout;
