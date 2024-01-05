const Footer = () => {
  return (
    <div className="text-xs flex items-center justify-end text-gray-400 mt-2 mr-2">
      <a href="https://github.com/sjq1412/todo-list" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 inline"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
        <span className="ml-2">sjq1412</span>
      </a>
    </div>
  );
};

export default Footer;
