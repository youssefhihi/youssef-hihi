import Link from "next/link";
import Strings from "@/constants/strings";
import ResumeButton  from "@/components/home/ui/ResumeButton";

const TalkButton = () => {
  return (
      <Link
        className="app__filled_btn min-w-[10rem]"
        href={Strings.whatsappLink}
        target="_blank"
      >
        Let&apos;s Talk
      </Link>
  );
};

export default TalkButton;
