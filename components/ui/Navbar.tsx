import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray900.value
      }}
    >
      <Link
        href="/"
      >
        <a
          style={{
            display: 'flex',
          }}
        >
          <Image 
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'
            alt='Ditto'
            width={70}
            height={70}
          />
          <Text color='white' h2>P</Text>
          <Text color='white' h3>okémon</Text>
        </a>
      </Link>

      <Spacer css={{ flex: 1 }} />
      
      <Link
        href="/favorites"
      >
        <a>
          <Text color='white'>Favoritos</Text>
        </a>
      </Link>
    </div>
  )
};
