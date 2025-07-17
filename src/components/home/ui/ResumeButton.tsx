import Link from "next/link";


const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[10rem]"
      href="https://drive.google.com/file/d/1VHBrrNtPLC9oAUZBUYqx0fj51jYreomG/view?usp=drive_link"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </Link>
  );
};

export default ResumeButton;