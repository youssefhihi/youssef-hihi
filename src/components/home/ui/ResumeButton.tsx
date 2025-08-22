import Link from "next/link";


const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[10rem]"
      href="https://drive.google.com/file/d/1mu5Yq_15RbXaGcTUz9tPCGJJjMWVqL0A/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </Link>
  );
};

export default ResumeButton;