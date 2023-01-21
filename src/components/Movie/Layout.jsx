function Layout({ children }) {
  return (
    <main className="movie-details absolute top-[350px] z-20 w-full max-xl:px-6">
        {children}
    </main>
  );
}

export default Layout;
