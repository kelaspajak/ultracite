"use client";

import { WordAnimation } from "@/components/word-animation";

export const Hero = () => (
    <header className="space-y-3 text-center sm:text-left">
				<p className="font-semibold text-primary text-sm uppercase tracking-widest">
					Diskusi Pajak
				</p>
				<h1 className="font-bold text-4xl text-foreground tracking-tight sm:text-5xl">
					<span className="before:-inset-x-1 before:-rotate-1 relative z-10 before:pointer-events-none before:absolute before:inset-y-0 before:z-10 before:bg-linear-to-r before:from-blue-500 before:via-purple-500 before:to-orange-500 before:opacity-16 before:mix-blend-hard-light">
						Pusat Pengetahuan Perpajakan
					</span>{" "}
					untuk Keputusan yang Pasti
				</h1>
				<h2 className="text-center text-[100px] text-dotted leading-none md:text-[170px]">
					Dokumentasi • Diskusi • Kolaborasi
				</h2>
				<h2 className="mt-6 max-w-[580px] font-medium text-[#878787] text-[24px] leading-tight md:mt-10 md:text-[36px]">
					Temukan dokumentasi peraturan perpajakan, panduan akuntansi, blog,
					dan kumpulan tanya jawab yang tepercaya untuk <br/><WordAnimation />.
				</h2>
			</header>
  );
