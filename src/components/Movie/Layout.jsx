function Layout({ children }) {
  return (
    <main className="movie-details absolute top-[450px] z-20 w-full">
        {children}
    </main>
  );
}

export default Layout;
