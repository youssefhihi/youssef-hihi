import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstrainedBox from "@/components/core/constrained-box";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";
import SocialButton from "./ui/SocialButton";
import socialLinks from "@/data/socialLinks";
import ContactForm from "@/components/common/contact";
import React from "react";

const HomeSection6 = ({ id }: { id: string }) => {

  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--dialogColor)] bg-[var(--dialogColor)] min-h-screen items-center justify-center dark:bg-dot-white/[0.15] bg-dot-white/[0.15] items-center justify-center"
      id={id}
    >
      <ConstrainedBox classNames="p-4 py-16">
        <SectionTitle>Get in Touch</SectionTitle>
        <div className='flex flex-col lg:flex-row justify-evenly mt-10 w-full'>
          <div className='flex flex-col gap-16 w-full lg:w-1/2 items-center justify-center  lg:flex'>
            <p className='text-white font-semibold text-xl xl:mr-10 mb-7 xl:mb-0  text-center '>
              I am always excited to connect with new people and explore opportunities for collaboration. Whether you
              have a project idea, need assistance with development, or just want to chat about technology and
              innovations, feel free to reach me. Let's create something amazing together!
            </p>
          </div>
          <div className='w-full lg:w-1/2'>
            <ContactForm/>
          </div>
        </div>

        <Column classNames="mt-16  w-full">
          <GridBox classNames="sm:grid-cols-2 w-full mx-auto gap-4">
            {socialLinks.map((link, index) => {
              return (
                  <SocialButton
                      key={`social-link-${index}`}
                      text={link.text}
                      icon={link.icon}
                      url={link.url}
                  />
              );
            })}
          </GridBox>
          <p className="text-center mx-auto mt-16 text-2xl/6 font-semibold">
            I&apos;m{" "}
            <span className="text-[var(--primaryColor)]">available</span> for freelancing,{" "}
            <span className="text-[var(--primaryColor)]">full-time positions (CDI)</span>, or{" "}
            <span className="text-[var(--primaryColor)]">part-time position (CDD)</span>.
          </p>

        </Column>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;