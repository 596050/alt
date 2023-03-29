import {
	BannerWithCallToAction,
	BannerWithTitle,
	Blockquote,
	CallToAction,
	CardWithTopBorderTitleText,
	CardWithVerticalFloatingPanel,
	Container,
	HeaderAnimatedAbstract,
	SlugConstants,
	Title,
} from '@packages/components';

import {ORIENTATION} from '@packages/util-shared-types';
import {internationalization} from '@packages/utils';

// export async function loader({request}: LoaderArgs) {
// 	return json({});
// }

// export async function action({request}: ActionArgs) {
// 	return {};
// }

// export const meta: MetaFunction = () => {
// 	return {};
// };

export default function SearchAutomationDataAI() {
	return (
		<>
			<BannerWithTitle outerClassName="bg-primary-5">
				{internationalization.pages.titles.searchAutomationDataAI}
			</BannerWithTitle>
			<Container className="min-h-screen max-w-screen-2xl xl:max-w-none">
				<div className="relative w-full">
					<HeaderAnimatedAbstract />
				</div>
				<Container
					el="section"
					className="max-w-screen-2xl border-b-[1px] xl:max-w-none"
				>
					<div className="mx-auto max-w-6xl py-4 px-3 lg:px-6 ">
						<CallToAction
							className="font-frutiger-bold text-secondary decoration-primary-1 text-base hover:cursor-pointer hover:underline lg:text-lg"
							containerClassName="inline"
							href={`/${SlugConstants.WhatWeDo}`}
							indicatorOrientation={ORIENTATION.LEFT}
							indicatorClassName="border-primary-1 mb-[1px]"
						>
							{internationalization.pages.titles.whatWeDo}
						</CallToAction>
					</div>
				</Container>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Title el="h1" className="mb-6 pb-2 capitalize">
						{internationalization.pages.titles.searchAutomationDataAI}
					</Title>
				</Container>
				<Container el="section" className="mt-4 max-w-6xl px-3 lg:px-6">
					<p>
						<b>
							An average Fortune 500 company makes 400 million decisions per
							day. These decisions are made in a rapidly changing and complex
							global environment, yet oftentimes they are still based on rules,
							heuristics and gut feel.
						</b>
					</p>
					<br />
					<p>
						Advancements in technology, especially in Data & AI, enable a range
						of unforeseen opportunities to amplify, automate and optimize these
						decisions. Forerunners can already do customer obsession at scale,
						reinvent r&d, optimize entire value chains and upskill the way to do
						design and strategy - all at the same time.
					</p>
					<br />
					<p>
						Strand helps organizations across industries make decisions better,
						faster and at scale with Data & AI.
					</p>
				</Container>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Title className="capitalize">Success stories</Title>
					<div className="mx-auto mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
						{[
							{
								imageProps: {
									className: '[object-position:-27px_-44px]',
								},
								imagePath: 'kaitlyn-baker-vZJdYl5JVXY-unsplash.webp',
								tagName: 'Client story',
								title:
									'Mercedes-Benz: Innovative tools for the sales experience of the future',
								callToAction: {
									children: 'Learn more',
									href: '',
								},
							},
							{
								imagePath: 'compare-fibre-8xnaQKWjDrM-unsplash.webp',
								tagName: 'Client story',
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
								tagName: 'Client story',
								title:
									'Coles Group Limited: Personalizing the customer profile to offer a better shopping experience',
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
					<Title>
						Technology excellence. Business mindset. Extraordinary impact.
					</Title>
					<p className="mt-4">
						Only a third of organizations are able to realize measurable value
						from data. Only 15% of companies have scaled their AI investments
						beyond proof-of-concepts and less than 5% have achieved
						industrialized growth. This happens when investments are seen as
						siloed IT projects instead of cross-organizational transformation.
						Winning with Data & AI requires a holistic approach to modern
						data-enabled and AI-backed technology strategy. A thorough
						understanding of future competencies, use-cases and concepts are
						pre-requisites for successful projects.
					</p>
					<br />
					<p>
						Strand has pioneered many of today’s standard industry practices -
						agile software development, continuous delivery and microservices.
						When all software is getting more and more intelligent, being at the
						forefront of Data & AI development is natural for us.
					</p>
				</Container>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Title className="capitalize">Featured content</Title>
					<div className="mx-auto mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
						{[
							{
								imageProps: {
									className: '[object-position:-27px_-44px]',
								},
								imagePath: 'kaitlyn-baker-vZJdYl5JVXY-unsplash.webp',
								tagName: 'Client story',
								title:
									'Mercedes-Benz: Innovative tools for the sales experience of the future',
								callToAction: {
									children: 'Learn more',
									href: '',
								},
							},
							{
								imagePath: 'compare-fibre-8xnaQKWjDrM-unsplash.webp',
								tagName: 'Client story',
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
								tagName: 'Client story',
								title:
									'Coles Group Limited: Personalizing the customer profile to offer a better shopping experience',
								callToAction: {
									children: 'Learn more',
									href: '',
								},
							},
							{
								imageProps: {
									className: '[object-position:-27px_-44px]',
								},
								imagePath: 'kaitlyn-baker-vZJdYl5JVXY-unsplash.webp',
								tagName: 'Client story',
								title:
									'Mercedes-Benz: Innovative tools for the sales experience of the future',
								callToAction: {
									children: 'Learn more',
									href: '',
								},
							},
							{
								imagePath: 'compare-fibre-8xnaQKWjDrM-unsplash.webp',
								tagName: 'Client story',
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
								tagName: 'Client story',
								title:
									'Coles Group Limited: Personalizing the customer profile to offer a better shopping experience',
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
					<Title className="capitalize">Our services include</Title>
					<div className="mx-auto mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
						{[
							{
								title: 'Data mesh',
								text: 'Apply a product mindset and modern software engineering methods to your data challenges.',
							},
							{
								title: 'Intelligent Products',
								text: 'Build ML-driven systems to embed intelligence in your products.',
							},
							{
								title: 'Decision Science',
								text: 'Combines applied data science with organizational and technology change to holistically improve outcomes for businesses and customers, team members, partners, and society.',
							},
							{
								title: 'Data strategy',
								text: 'Build data literacy into your strategy and processes to create lean and flexible plans to exploit business opportunities.',
							},
							{
								title: 'Decision Factory',
								text: 'A set of concepts, frameworks and integrated data science tools designed to build self-optimizing tools, products, services, systems and processes that supercharge how modern businesses serve their customers and improve their efficiency.',
							},
							{
								title: 'Data platforms',
								text: 'Build solutions to consume, store, process and integrate diverse data services with a continuous delivery mindset.',
							},
							{
								title: 'CD4ML',
								text: 'Adapt the principles of continuous delivery to take your ML models from prototype to production.',
							},
							{
								title: 'Data governance',
								text: 'Treat data as a product and implement governance policies and solutions that enable your users.',
							},
						].map(item => {
							return (
								<CardWithTopBorderTitleText
									key={item.title}
									data={item}
									outerClassName="border-primary-5"
								/>
							);
						})}
					</div>
				</Container>

				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Blockquote
						text="We collaborated with Strand and worked really as one single team. We built the product and delivered it on time and within budget, so it was really an exciting development effort and really a great partnership."
						quoteSource={{
							name: 'Bernadette Minton',
							role: 'VP of Data Science Solutions, MCG Health',
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
						title="How can you achieve faster growth?"
						callToAction={{
							href: SlugConstants.Contact,
							children: 'Connect with us',
							replace: true,
						}}
					/>
				</Container>
			</Container>
		</>
	);
}
