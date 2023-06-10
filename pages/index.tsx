import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { TbApps, TbArrowRight, TbBook, TbBrandGithub, TbCloud, TbCloudDownload } from "react-icons/tb";
import { SiAppwrite } from "react-icons/si";

import GitHubButton from 'react-github-btn'

export default function Home() {
	return (
		<>

			<Head>
				<title>Snippad - Open-Source</title>
			</Head>

			<div className="relative">

				<div className="absolute top-0 left-0 w-full flex justify-center">
					<div className="gradient-blue absolute -top-10">&nbsp;</div>
					<div className="gradient-green">&nbsp;</div>
				</div>

				<Container>

					<div className="mt-12 mb-14 sm:flex justify-between items-center">
						<figure className="w-[152px]">
							<Image src="/logo.png" width={304} height={80} alt="Snippad" className="w-auto h-auto" />
						</figure>

						<div className="mt-4 sm:mt-0">
							<GitHubButton href="https://github.com/shahenalgoo/snippad" data-color-scheme="no-preference: light; light: light; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star shahenalgoo/snippad on GitHub">Star</GitHubButton>
							&nbsp;&nbsp;&nbsp;
							<GitHubButton href="https://github.com/shahenalgoo" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Follow @shahenalgoo on GitHub">Follow</GitHubButton>
						</div>
					</div>


					{/* Tagline - Mobile */}
					<div className="sm:hidden mb-2 flex items-center">
						<span className="text-xl mr-3">Open-Source</span>
						<Button href="https://appwrite.io/" target="_blank" variant='black' size='sm' rounded='full' className="text-sm mr-1 text-[#F02E65]">
							Built with <SiAppwrite size={18} className="mx-1" /> Appwrite
						</Button>
					</div>
					<h1 className="sm:hidden mb-2 uppercase text-4xl font-bold">
						Code Snippet & <br />
						note-taking app <br />
						for developers
					</h1>


					{/* Tagline - SM+ */}
					<h1 className="hidden sm:block sm:text-center uppercase sm:mt-32 mb-10">
						<div className="mb-4 flex justify-center items-center">
							<span className="text-2xl mr-3">Open-Source</span>
							<Button href="https://appwrite.io/" target="_blank" variant='black' size='sm' rounded='full' className="text-sm mr-1 text-[#F02E65]">
								Built with <SiAppwrite size={18} className="mx-1" /> Appwrite
							</Button>
						</div>
						<span className="block text-xl font-bold sm:text-4xl lg:text-6xl lg:mb-2">Code snippet & note-taking</span>
						<span className="block text-xl font-bold sm:text-4xl lg:text-6xl">app for developers</span>
					</h1>


					{/* CTA - Mobile */}
					<div className="sm:hidden flex items-center gap-2 mt-10 mb-8">
						<Button href="https://github.com/shahenalgoo/snippad/wiki" target="_blank" rounded='full' variant='gray'>
							<TbBrandGithub size={24} strokeWidth={1} className="mr-2" />
							Read Docs
						</Button>

						<Button href="https://cloud.snippad.io" target="_blank" rounded='full'>
							<TbCloud size={24} className="mr-2" />
							<span className="font-bold">Go to App</span>
						</Button>
					</div>


					{/* CTA - SM+ */}
					<div className="hidden lg:hidden sm:flex justify-center items-center gap-2 mt-10 mb-8">
						<Button href="https://github.com/shahenalgoo/snippad/wiki" target="_blank" rounded='full' size='lg' variant='gray'>
							<TbBrandGithub size={24} strokeWidth={1} className="mr-2" />
							Read Docs
						</Button>

						<Button href="https://cloud.snippad.io" target="_blank" rounded='full' size='lg'>
							<TbCloud size={24} className="mr-2" />
							<span className="font-bold">Go to App</span>
						</Button>
					</div>


					{/* CTA - LG+ */}
					<div className="hidden lg:flex justify-center items-center gap-4 mb-44">
						<Button href="https://github.com/shahenalgoo/snippad/wiki" target="_blank" rounded='full' size='lg' variant='gray'>
							<TbBrandGithub size={24} strokeWidth={1} className="mr-2" />
							Read Docs
						</Button>

						<Button rounded='full' size='lg' variant='gray'>
							<TbCloudDownload size={24} className="mr-2 mb-1" />
							Desktop App
						</Button>

						<Button href="https://cloud.snippad.io" target="_blank" rounded='full' size='lg'>
							<TbCloud size={24} className="mr-2" />
							<span className="font-bold">Go to App</span>
						</Button>
					</div>


					{/* App Preview */}
					<figure className="flex justify-center">
						<Image src="/app.jpg" width={1152} height={710} alt="Snippad" className="w-auto h-auto rounded-xl" />
					</figure>

				</Container>
			</div>
		</>
	)
}
