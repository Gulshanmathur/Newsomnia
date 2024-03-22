import myImage from "../assets/img-1.jpeg";

const About = () => {
  return (
    <div className="flex justify-center items-justify bg-gradient-to-r from-blue-300 to-purple-500 ">
      <div className="w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center pb-10 mt-4">
          <img
            className="w-25 h-25 mb-3 rounded-full shadow-lg"
            src={myImage}
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-sm font-sans text-dark dark:text-white">
            Gulshan Mathur
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Web Developer
          </span>
          <div className="p-4">
            <p className="mb-3 text-gray-500 dark:text-gray-600 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-black dark:first-letter:text-gray-700 first-letter:me-3">
              At Newsomnia, we are passionate about informing the public with
              accurate and unbiased news reporting. We utilize technology to
              curate content efficiently and deliver it in a user-friendly
              manner. We believe in the power of information and its role in
              shaping public understanding.
            </p>
            <p className="text-gray-500 dark:text-gray-600">
              It is used{" "}
              <strong>
                <em>News-API</em>
              </strong>{" "}
              to get news from different platforms and redirect to respective
              website. Our development stack combines cutting-edge technologies
              like
              <strong>
                {" "}
                Vite ReactJS, Tailwind CSS, Bootstrap 5, React-Router
              </strong>{" "}
              and several <strong>component</strong> reusability.
            </p>

            <p className="text-gray-500 dark:text-gray-600 mt-3">
              Highly motivated and results-oriented developer with 1.5 years of
              experience in <span className="font-semibold"> ReactJS, TypeScript, and MongoDB </span>. Possesses strong
              problem-solving skills honed through experience with <span className="font-semibold">Data
              Structures and Algorithms (DSA) </span>. Eager to leverage technical
              expertise and problem-solving abilities to contribute to a dynamic
              and innovative team.
            </p>
          </div>

          <div className="flex mt-4 md:mt-6">
            <a
              href="mailto:gulshanmathur556@gmail.com"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Message
            </a>
            {/* <a
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-red-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 "
            >
              
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};


export default About;
