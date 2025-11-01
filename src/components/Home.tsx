const Home = () => {
  return (
    <div className="p-4  h-[100vh] flex items-center justify-center ">
      <div className="text-center w-2/3">
        <div className="text-2xl font-bold mb-6">
          Welcome to
          <span className="text-red-600 text-6xl">MSFIN Credit Pvt. Ltd.</span> 
        <div className="text-sm ">Build your business with us — reliable, fast, and customer-focused financial solutions.</div>  </div>
        

        <div className="flex gap-4 justify-center">
         <button className="bg-red-500 rounded-[5px] p-2">Lets get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
