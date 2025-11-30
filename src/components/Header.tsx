import { createClient } from "@/prismicio";

import Link from "next/link";
import { ButtonLink, Logo } from "../components";
import { PrismicNextLink } from "@prismicio/next";

export const Header = async () => {
  const client = createClient();
  const {
    data: { navigation },
  } = await client.getSingle("settings");

  return (
    <header className="z-50 absolute top-0 left-0 w-full ~h-32/48 md:h-32 ~p-4/6">
      <div className="w-full max-w-6xl grid grid-cols-[auto,auto] md:grid-cols-[1fr,auto,1fr] items-center gap-6 mx-auto">
        <Link href="/" className="justify-self-start">
          <Logo className="~h-12/20 text-brand-purple" />
        </Link>

        <nav
          aria-label="main navbar"
          className="col-span-full row-start-2 md:col-span-1 md:col-start-2 md:row-start-1"
        >
          <ul className="flex justify-center items-center flex-wrap gap-8">
            {navigation.map(({ link }) => (
              <li key={link.text}>
                <PrismicNextLink field={link} className="~text-lg/xl" />
              </li>
            ))}
          </ul>
        </nav>

        <div className="justify-self-end">
          <ButtonLink href="" color="purple" icon="cart" aria-label="cart">
            <span className="md:hidden">1</span>
            <span className=" hidden md:inline-block">Cart (1)</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
};
