import Link from "next/link";


const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[10rem]"
      href="/resume/youssefhihi.pdf"
      target="_blank"
      rel="noopener noreferrer"
      download="youssefhihi.pdf"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
