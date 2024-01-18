import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <main className="App">
      <span></span>
      <article className="article1">
        <Header />
        <div className="flex flex-col  md:flex-row md:pt-[150px] ">
          <Article />
          <Main />
        </div>
        <Footer />
      </article>
    </main>
  );
}

export default App;
