import {
	BannerWithCallToAction,
	BannerWithTitle,
	Blockquote,
	CallToAction,
	CardWithHorizontalFloatingPanel,
	CardWithTopBorderTitleText,
	CardWithVerticalFloatingPanel,
	Container,
	HeaderAnimatedAbstract,
	SlugConstants,
	Title,
} from '@packages/components';

import {ORIENTATION} from '@packages/util-shared-types';
import {internationalization} from '@packages/utils';

// export async function loader({ request }: LoaderArgs) {
//   return json({});
// }

// export async function action({ request }: ActionArgs) {
//   return {};
// }

// export const meta: MetaFunction = () => {
//   return {};
// };

export default function EnterpriseModernisationPlatformsCloud() {
	return (
		<>
			<BannerWithTitle outerClassName="bg-primary-5">
				{
					internationalization.pages.titles
						.enterpriseModernisationPlatformsCloud
				}
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
						{
							internationalization.pages.titles
								.enterpriseModernisationPlatformsCloud
						}
					</Title>
				</Container>
				<Container el="section" className="mt-4 max-w-6xl px-3 lg:px-6">
					<p>
						<b>
							Unpredictable and constant change demands new levels of business
							agility. To achieve adaptability, scale and accelerated evolution,
							enterprises need to modernize and place digital at the heart of
							their operations. But legacy technical environments and
							operational structures limit evolution at the necessary speeds. A
							value-driven strategy for modernization is integral to successful
							transformation initiatives.
						</b>
					</p>
					<br />
					<p>
						We will help you to accelerate your path to innovation and realize
						business benefits faster. From improved customer experiences and
						retention, to increased sales and a reduction of costs, we help you
						to assess and prioritize what will enable you to meet your
						organizational goals​.
					</p>
				</Container>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Title className="capitalize">Our services include</Title>
					<div className="mx-auto mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
						{[
							{
								title: 'Modernization strategy',
								text: 'A holistic value-driven transformation approach across technology, people, process & product, to help you be future fit.',
							},
							{
								title: 'Digital platforms',
								text: 'Adopt cutting-edge technology practices and tooling to create scalable, long-term digital business models and processes.',
							},
							{
								title: 'Architecture modernization',
								text: 'Define a strategy and execution plan to retire, replatform, rebuild or remediate your enterprise systems.',
							},
							{
								title: 'Cloud modernization',
								text: 'Maximize the benefit of the cloud with the right organizational structures, platforms and technologies.',
							},
							{
								title: 'Digital operations',
								text: 'Evolve your existing applications and close the capability gap between for the support and maintenance of cloud-native applications.',
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
					<Title>
						Engineering excellence. Platform acceleration. Evolutionary
						enterprise.
					</Title>
					<p className="mt-4">
						We do more than accelerate sustainable digital transformation – we
						get you to value faster. Our modernization approach helps you
						prioritize your critical applications and platforms, cut through the
						confusion of multi-cloud and identify the key areas to reduce cost
						and complexity. We enable you to begin evolving the skill sets,
						culture and processes of your enterprise,​ to arrive at continuous
						innovation.
					</p>
				</Container>
				<Container
					el="section"
					className="mt-12 max-w-6xl overflow-visible px-3 lg:px-6"
				>
					<CardWithHorizontalFloatingPanel
						data={{
							tagName: 'Report',
							text: 'Every interaction your customers have with a new digital experience from any organization resets their expectations about what is possible. Download the Forrester report compliments of Strand and discover the strategies for creating digital products that delight customers every time.',
							title:
								'Forrester report: Create differentiated digital products by designing for high-value outcomes',
							imagePath: 'header-abstract-1.webp',
							callToAction: {
								children: 'Access now',
								href: '',
							},
						}}
					/>
				</Container>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Title className="capitalize">Client Stories</Title>
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
