import icono from '../assets/icono.png';


export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full  text-white ">
      <nav className=" flex items-center justify-between px-6 py-3">
        
        
        <div className="flex items-center gap-3">
          <img
            src={icono} 
            alt="Juan Hernandez"
            className="w-10 h-10 rounded-full object-cover border-2 border-blue-400 bg-blue-400 opacity-90"
          />
          <span className="text-xl font-mono tracking-tight text-blue-400 dark:text-white dark:opacity-100 opacity-80">Juan Hernández</span>
        </div>

       
      </nav>
    </header>
  );
}
