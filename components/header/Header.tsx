import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher"; // 添加这行

const Header = () => {
  return (
    <header className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="/" className="flex items-center space-x-1 font-bold text-xl">
              <Image alt={siteConfig.name} src="/logo.svg" className="w-8 h-8" width={32} height={32} />
              <span className="text-gray-950 dark:text-gray-300">Clean</span>
              <span className="text-blue-600">Next.js</span>
              <span className="text-gray-950 dark:text-gray-300">Starter</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeSwitcher /> {/* 添加这行 */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
