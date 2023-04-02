'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Props = {
  children?: React.ReactNode;
}

export default function ScrollTop({ children }: Props) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });



  }, [pathname]);

  return null;
}
