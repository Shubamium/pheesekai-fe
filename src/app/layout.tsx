import "./globals.scss";
import type { Metadata } from "next";
import { DotGothic16, Inter } from "next/font/google";
import { Header } from "@/components/layout/header/header";
const dotGothic = DotGothic16({ weight: "400", subsets: ["latin"] });
import { CSSProperties } from "react";
import Footer from "@/components/layout/footer/footer";


const title = "Pheesekai | Vtuber | Content Creator"

const description = "Pheesekai is a Y2K, scene-inspired vtuber and content creator who streams weekly on Twitch. They often stream crafts, art, open world survival crafting games, and first person shooters. Check out what's happening with Phee!"
const banner = 'https://i.ibb.co/7pVBzfT/MIlIf-u8.jpg'

export const metadata: Metadata = {
	title: title,

	metadataBase: new URL('https://pheesekai.com'),

	openGraph:{
		url:'https://pheesekai.com',
		title:title,
		description:description,
		authors:"shubamium",
		images:[
			banner
		]
	},
		twitter:{
		title:title,
		card:'summary_large_image',
		images:[
			banner
		]
	},
	description: description
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={dotGothic.className}
        style={{ "--font-main": `${dotGothic.className}` } as CSSProperties}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
