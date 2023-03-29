import {
	BannerWithCallToAction,
	Blockquote,
	CardWithImageTextCTA,
	CardWithVerticalFloatingPanel,
	Container,
	HeaderAnimatedAbstract,
	SlugConstants,
	Title,
} from '@packages/components';

import {internationalization} from '@packages/utils';

import Head from 'next/head';

// const timings: TimingsServerTimeHeader = {};

// export async function loader({request}: LoaderArgs) {
// 	return json(
// 		{},
// 		{
// 			headers: loaderDataHeaders,
// 		},
// 	);
// }

// export async function action({request}: ActionArgs) {}

// export const meta: MetaFunction = () => {
// 	return {
// 		title: internationalization.pages.titles.whatWeDo,
// 		description: internationalization.pages.meta.whatWeDo,
// 	};
// };

// export const headers: HeadersFunction = reuseUsefulLoaderHeaders;

export default function WhatWeDo() {
	return (
		<>
			<Head>
				<title>{internationalization.pages.titles.whatWeDo}</title>
				<meta
					property="og:title"
					content={internationalization.pages.titles.whatWeDo}
					key="title"
				/>
				<meta
					name="description"
					content={internationalization.pages.meta.whatWeDo}
					key="desc"
				/>
				<meta
					property="og:description"
					content={internationalization.pages.meta.whatWeDo}
				/>
			</Head>
			<Container className="min-h-screen max-w-screen-2xl xl:max-w-none ">
				<div className="relative w-full">
					<HeaderAnimatedAbstract />
				</div>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<div className="w-full overflow-hidden sm:flex">
						<div className="flex-1 pb-3 pr-0 sm:pr-3 sm:pb-0">
							<div className="last:mb-0">
								<Title el="h1" className="mb-6 pb-2 capitalize">
									{internationalization.pages.titles.whatWeDo}
								</Title>

								<Blockquote
									text={internationalization.quotes.internal.whatWeDo}
									className="mb-6 text-base md:text-xl"
								/>

								<p className="mb-6 text-base md:text-lg">
									We are a leading global technology consultancy that integrates
									strategy, design and software engineering to enable
									enterprises and technology disruptors across the globe to
									thrive as modern digital businesses.
								</p>
								<p className="mb-6 text-base md:text-lg">
									Ongoing digital disruption is challenging enterprises to keep
									pace with the accelerating rate of technological change. This
									is where Strand can help. We've been at the forefront of
									technology innovation as a thought leader over the past 28
									years.
								</p>
								<p className="mb-6 text-base md:text-lg">
									We leverage our vast experience to improve our clients’
									ability to respond to change; utilize data assets to unlock
									new sources of value; create adaptable technology platforms
									that move with business strategies; and rapidly design,
									deliver and evolve exceptional digital products and
									experiences at scale.
								</p>
								<p className="text-base md:text-lg">
									We work at the pace which suits you, incremental, fine-tuned
									adoption? We make the progress you need as you evolve, when
									you need it. Do you need revolution yesterday? We start
									immediately, and allocate the resources according to your
									discretion.
								</p>
							</div>
						</div>
					</div>
				</Container>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Title className="capitalize">Opportunity and scope</Title>
					<div className="mx-auto mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
						{[
							{
								title:
									internationalization.pages.titles
										.customerExperienceProductDesign,
								text: 'Drive value through extraordinary customer experiences powered by integrated technology and design.',
								callToAction: {
									children: (
										<span>
											<p>
												Optimize customer experience and generate more value,
												faster
											</p>
											{internationalization.generic.learnMore}
										</span>
									),
									href: SlugConstants.CustomerExperienceProductDesign,
								},

								imageClassName: 'grayscale filter',
								imagePath: 'yender-fonseca--8V-GDR24bY-unsplash.webp',
							},
							{
								title: internationalization.pages.titles.searchAutomationDataAI,
								text: 'Maximize the business value and enable better decision making with pragmatic data strategies, governance and unrivalled skill sets in predictive AI and ML programming.',
								callToAction: {
									children: (
										<span>
											<p>
												Increase capacity and reduce waste with data and
												scalable automation
											</p>
											{internationalization.generic.learnMore}
										</span>
									),
									href: SlugConstants.SearchAutomationDataAI,
								},

								imageClassName: 'grayscale filter',
								imagePath: 'guillaume-lebelt-GNyy-D-SNN8-unsplash.webp',
							},
							{
								title:
									internationalization.pages.titles
										.digitalTransformationOperations,
								text: 'Evolve your organization with focused operational models and pragmatic strategies for organizational change that increase your agility, resilience and ability to compete.',
								callToAction: {
									children: (
										<span>
											<p>
												Gain competitive advantages with unique technology and
												strategy
											</p>
											{internationalization.generic.learnMore}
										</span>
									),
									href: SlugConstants.DigitalTransformationOperations,
								},

								imageClassName: 'grayscale filtercontrast-100',
								imagePath: 'silvio-kundt-Fixg8KipOg8-unsplash.webp',
							},
							{
								title:
									internationalization.pages.titles
										.enterpriseModernisationPlatformsCloud,
								text: 'Modernize your operations, platforms, development and delivery practices to deliver business value faster.',
								callToAction: {
									children: (
										<span>
											<p>
												Future-proof workflows using the latest management tools
												and tech
											</p>
											{internationalization.generic.learnMore}
										</span>
									),
									href: SlugConstants.EnterpriseModernisationPlatformsCloud,
								},
								imageClassName: 'grayscale filter',
								imagePath: 'yender-fonseca-VaIANQGfmA0-unsplash.webp',
							},
						].map(item => {
							return <CardWithImageTextCTA data={item} key={`${item.title}`} />;
						})}
					</div>
				</Container>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Title className="capitalize">Featured Content</Title>
					<div className="mx-auto mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
						{[
							{
								imagePath: 'header-abstract-1.webp',
								tagName: 'Article',
								title:
									'Five surprising business problems you can tackle with machine learning',
								callToAction: {
									children: 'Read Article',
									href: '',
								},
							},
							{
								imagePath: 'header-abstract-1.webp',
								tagName: 'Article',
								title: 'Three things to consider when moving to the cloud',
								callToAction: {
									children: 'Read Article',
									href: '',
								},
								imageProps: {
									className: '[object-position:37px_-70px]',
								},
							},
							{
								imageProps: {
									className: '[object-position:24px_50px]',
								},
								imagePath: 'header-abstract-1.webp',
								tagName: 'Article',
								title:
									'Transformative business use cases for blockchain and cryptocurrency',
								callToAction: {
									children: 'Read Article',
									href: '',
								},
							},
						].map(({imageProps, ...item}) => {
							return (
								<CardWithVerticalFloatingPanel
									key={`${item.title}`}
									data={item}
									imageProps={imageProps}
								/>
							);
						})}
					</div>
				</Container>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Title className="capitalize">Client Stories</Title>
					<div className="mx-auto mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
						{[
							{
								imageProps: {
									className: '[object-position:-27px_-77px]',
								},
								imagePath: 'kaitlyn-baker-vZJdYl5JVXY-unsplash.webp',
								tagName: 'ML and AI',
								title:
									'Alma Media: Producing the next journalistic masterpieces with machine learning',
								callToAction: {
									children: 'Learn more',
									href: '',
								},
							},
							{
								imagePath: 'compare-fibre-8xnaQKWjDrM-unsplash.webp',
								tagName: 'Experience design',
								title:
									'Veterans Affairs: Assisting emergency room physicians with COVID-19 Patient Manager',
								callToAction: {
									children: 'Learn more',
									href: '',
								},
							},
							{
								imagePath:
									'rebecca-orlov-epic-playdate-HGVtA1zSHo4-unsplash.webp',
								tagName: 'Platforms',
								title:
									'84.51°: Transforming customer data into actionable insights',
								callToAction: {
									children: 'Learn more',
									href: '',
								},
							},
							{
								imageProps: {
									className: '[object-position:28px_-77px]',
								},
								imagePath: 'venti-views-1cqIcrWFQBI-unsplash.webp',
								tagName: 'Data science and analytics',
								title: 'BMMRO: Powering scientific research, remotely',
								callToAction: {
									children: 'Learn more',
									href: '',
								},
							},
							{
								imagePath: 'dan-schiumarini-dcL8ESbsGis-unsplash.webp',
								tagName: 'Platforms',
								title:
									"OTTO: Fast and flexible platforms ignite OTTO's digital transformation",
								callToAction: {
									children: 'Learn more',
									href: '',
								},
							},
							{
								imagePath: 'zak-7wBFsHWQDlk-unsplash.webp',
								tagName: 'Platforms',
								title:
									"Government Digital Service (GDS): World class digital products to meet UK citizens' needs",
								callToAction: {
									children: 'Learn more',
									href: '',
								},
							},
						].map(({imageProps, ...item}) => {
							return (
								<CardWithVerticalFloatingPanel
									key={`${item.title}`}
									data={item}
									imageProps={imageProps}
								/>
							);
						})}
					</div>
				</Container>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Blockquote
						text="Strand helped transform our vision for the Coles app into a
            reality by facilitating the development and roll out of a new
            customer profile management portal."
						quoteSource={{
							name: 'Assaf Warshitzky',
							role: 'Digital Manager Engineering Architecture & Strategy, Coles',
						}}
						callToAction={{
							children: 'Learn more about this client story',
							href: '',
						}}
					/>
				</Container>
				<Container
					el="section"
					className="bg-primary-5 relative  mx-auto mt-12 h-full max-w-full overflow-hidden"
					clean
				>
					<BannerWithCallToAction
						title="Want to talk to us about your digital journey?"
						callToAction={{
							href: SlugConstants.Contact,
							children: 'Contact us',
							replace: true,
						}}
					/>
				</Container>
			</Container>
		</>
	);
}
