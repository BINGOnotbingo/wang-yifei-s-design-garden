import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/30 bg-background py-12 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <h4 className="font-display text-xl font-bold text-primary">Yifei Wang · 王艺菲</h4>
          <p className="mt-1 text-sm text-gray-soft">Game & Interaction Designer · Tsinghua University</p>
        </div>
        <a
          href="mailto:wang-yf24@mails.tsinghua.edu.cn"
          className="group flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
        >
          <Mail className="h-4 w-4 text-primary" />
          <span className="group-hover:underline">wang-yf24@mails.tsinghua.edu.cn</span>
        </a>
      </div>
      <div className="mx-auto mt-8 max-w-6xl border-t border-primary/10 pt-6 text-center text-xs text-gray-soft">
        © {new Date().getFullYear()} Yifei Wang. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
