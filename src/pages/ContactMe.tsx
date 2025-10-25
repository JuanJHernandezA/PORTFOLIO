
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";

export default function ContactMe() {
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => alert("Correo enviado"),
        (error) => alert("Error: " + error.text)
      );
  };

  return (
    <section className="flex justify-center items-center min-h-screen px-2 md:px-20 lg:px-40 transition-colors duration-500">
      <div
        className="rounded-2xl p-4 gap-4 md:p-6 md:gap-10 w-[95%] md:w-[90%] lg:w-[1024px] h-[700px] md:h-[600px]
        dark:bg-[#0b0f19]/90 bg-[#ffffff] backdrop-blur-md 
        border dark:border-[#1e293b] border-[#d3d3d3]
        shadow-xl dark:shadow-black/50 shadow-gray-400/40
        text-gray-900 dark:text-gray-100 overflow-y-scroll 
        scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-700"
      >
        {/* Header */}
        <div className="mb-8 text-center w-full relative pb-6 pt-5">
          <h2 className="absolute inset-x-0 top-3 text-[60px] md:text-[90px] leading-none font-extrabold dark:text-white text-black opacity-10 tracking-widest select-none">
            CONTACT
          </h2>

          <div className="relative flex flex-col items-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-3">
              CONTACT ME
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

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Formulario */}
          <form
            className="w-full max-w-lg bg-transparent"
            onSubmit={sendEmail}
          >
            <div className="space-y-4">
              <input
                className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                id="name"
                type="text"
                placeholder="Name"
                name="to_name"
                required
              />
              <input
                className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                id="email"
                type="email"
                placeholder="Email"
                name="from_email"
                required
              />
              <input
                className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                id="subject"
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea
                className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg w-full py-2 px-3 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                id="message"
                rows={5}
                placeholder="Your Message"
                name="message"
                required
              />
            </div>

            <div className="flex items-center justify-center mt-6">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-2 text-gray-700 dark:text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-500 hover:bg-gradient-to-tr hover:from-cyan-400 hover:to-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>

          {/* Info */}
          <div className="text-left w-full max-w-lg space-y-6">
            <h1 className="text-2xl font-bold">Don't hesitate to contact me</h1>
            <p className="text-gray-700 dark:text-gray-300">
              If you have any questions, ideas, or just want to connect — I'm
              always happy to hear from you.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <FaLocationDot className="text-3xl text-cyan-400" />
                <div>
                  <h4 className="text-lg font-semibold">Address</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    <a
                      href="https://www.google.com/maps?q=Zarzal+Valle+del+Cauca"
                      className="hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Zarzal, Valle del Cauca, Colombia
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-3xl text-cyan-400" />
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    <a href="tel:+573126770253" className="hover:underline">
                      +57 312 677 0253
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MdEmail className="text-3xl text-cyan-400" />
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    <a
                      href="mailto:juanjosehernandezarenas4@gmail.com"
                      className="hover:underline"
                    >
                      juanjosehernandezarenas4@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


