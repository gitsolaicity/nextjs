import Link from "next/link";
import React from "react"

const SimpleFeatures = () => {
    return (
        <section className="m-4 md:m-8 bg-gray-800 text-gray-100">
	<div className="container p-4 mx-auto my-6 space-y-1 text-center">
		<span className="text-xs font-semibold tracking-wider uppercase text-violet-400">shortcut to your dream ui</span>
		<h2 className="pb-3 text-3xl font-bold md:text-4xl">Create a stylish website in minutes</h2>
		<p>Get a jumpstart to creating your new webpage! With our fully responsive and carefully styled components you can get the structure of your website done with just a couple of clicks.</p>
	</div>
	<div className="container grid justify-center gap-4 mx-auto lg:grid-cols-2 xl:grid-cols-4">
		<div className="flex flex-col px-8 py-6">
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Components</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">Individual components that can be re-used multiple times in your designs.</p>
			<Link className="inline-flex items-center space-x-2 text-sm text-violet-400" href="/components">
				<span>Learn More</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</Link>
		</div>
		<div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Sections</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">Pre-made building blocks that you can stack on top of each other like Legos to build a website of your own in minutes.</p>
			<Link className="inline-flex items-center space-x-2 text-sm text-violet-400" href="/sections">
				<span>Learn More</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</Link>
		</div>
		<div className="flex flex-col px-8 py-6">
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Templates</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">Full pages that showcase pieces of what you can achieve with the building blocks that are in this UI kit.</p>
			<Link className="inline-flex items-center space-x-2 text-sm text-violet-400" href="/templates">
				<span>Learn More</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</Link>
		</div>
		<div className="flex flex-col px-8 py-6">
			<h2 className="mb-2 text-lg font-semibold sm:text-xl title-font text-gray-100">Customization</h2>
			<p className="flex-1 mb-4 text-base leading-relaxed text-gray-400">Choose your primary color from any of the Tailwind CSS 2.0 colors. You can also view all of the components in our light and dark themes.</p>
			<Link className="inline-flex items-center space-x-2 text-sm text-violet-400" href="/docs">
				<span>Learn More</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</Link>
		</div>
	</div>
</section>
    )
}

export default SimpleFeatures;