export default function Projects() {
   
  return (
    <section className="flex justify-center items-center min-h-screen px-2 md:px-20 lg:px-40">
     
      <div className="rounded-2xl p-4 gap-4 m-0 md:mt-0 md:p-6 md:gap-10 w-[95%] md:w-[90%] lg:w-[1024px] h-[700px] md:h-[600px] 
        dark:bg-[#0b0f19]/90 bg-[#ffffff] backdrop-blur-md 
        border dark:border-[#1e293b] border-[#d3d3d3] 
        shadow-xl dark:shadow-black/50 shadow-gray-400/40 
        text-gray-900 dark:text-gray-100 overflow-y-scroll 
        scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700 ">

        
        <div className="mb-8 text-center w-full relative pb-6 pt-5">
          <h2 className="absolute inset-x-0 top-3 text-[60px] md:text-[90px] leading-none font-extrabold dark:text-white text-black opacity-10 tracking-widest select-none">
             PROJECTS
          </h2>

          <div className="relative flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3 dark:text-white text-gray-900">
              MY PROJECTS
            </h1>
            <div className="w-40 h-1 bg-gray-300 dark:bg-gray-700 rounded overflow-hidden">
              <div
                className="h-full bg-gradient-to-tr from-cyan-400 to-indigo-500"
                style={{
                  width: "10%",
                  animation: "aboutLine 2s ease-in-out infinite alternate",
                }}
              />
            </div>
          </div>

          <style>{`
            @keyframes aboutLine {
              from { width: 10%; }
              to { width: 100%; }
            }
          `}</style>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-center lg:items-center text-center md:text-center gap-6">
          
        </div>
        
      </div>
      
      
    </section>
    );
}

