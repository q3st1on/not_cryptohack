const Home = () => {
  return (
    <div className="App" class = "bg-bgdark flex flex-col items-center min-h-screen">
      <header className="App-header" class = "flex flex-col content-center items-center justify-center align-top min-h-max bg-bgdark text-text pb-5">
        <p class = "text-highlightlight font-IBMPlexMonoBold text-3xl md:text-5xl align-middle">
          CryptoCode
            
        </p>
        <p class = "text-text font-IBMPlexMonoRegular text-sm md:text-base align-middle pr-2 pl-2 md:pr-0 md:pl-0 ">
            Welcome to CryptoCode, the easy and fun way to learn
            how cryptography works, and how to hack it
        </p>
      </header>
    </div>
  );
}
  
export default Home;