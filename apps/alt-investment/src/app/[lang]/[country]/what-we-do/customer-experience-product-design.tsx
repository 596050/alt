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

// type LoaderData = {
// 	headerImage: string;
// };

// export async function loader({ request }: LoaderArgs) {
//   const headerImage = "yender-fonseca--8V-GDR24bY-unsplash.webp";
//   return json(
//     { headerImage },
//     {
//       headers: loaderDataHeaders,
//     },
//   );
// }

// export async function action({ request }: ActionArgs) {
//   return {};
// }

// export const meta: MetaFunction = () => {
//   return {};
// };

// export const headers: HeadersFunction = reuseUsefulLoaderHeaders;

export default function CustomerExperienceProductDesign() {
	// const { headerImage } = useLoaderData<LoaderData>();
	return (
		<>
			<BannerWithTitle outerClassName="bg-primary-5">
				{internationalization.pages.titles.customerExperienceProductDesign}
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
						{internationalization.pages.titles.customerExperienceProductDesign}
					</Title>
				</Container>
				<Container el="section" className="mt-4 max-w-6xl px-3 lg:px-6">
					<p>
						<b>
							A new mandate for comprehensive and continuous digital experiences
							has put a spotlight on designing products that meet customers’
							expanding demands. Embedding customer experience into products and
							design is more important than ever. Today, only by creating
							extraordinary and dynamic digital customer experiences can
							organizations drive brand equity and revenue growth.
						</b>
					</p>
					<br />
					<p>
						We align product thinking with platform expertise and digital
						execution to deliver holistic customer experiences that are
						different by design. We help you embed customer experience into
						product strategy to drive engagement, preference and purchase.
					</p>
				</Container>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Title className="capitalize">Our services include</Title>
					<div className="mx-auto mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
						{[
							{
								title: 'Idea to market',
								text: 'Create innovative products, services and business models that generate new digital revenue streams.',
							},
							{
								title: 'Customer experience strategy',
								text: 'Put the customer at the center of your strategy and design differentiated experiences across departments, products and services that combine the digital and physical.',
							},
							{
								title: 'Product management transformation',
								text: 'Grow, scale and sustain your product management capabilities, systems, processes and people to become a customer-centric digital product organization.',
							},
							{
								title: 'Product design and delivery',
								text: 'Scale a proven product idea or MVP using a lean product development approach and evolve existing products into new digital product experiences.',
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
						Platform excellence. Design mindset. Extraordinary customer
						experiences.
					</Title>
					<p className="mt-4">
						We help you to rapidly drive value through extraordinary customer
						experiences, powered by integrated technology, digital innovation,
						and design. By combining customer experience-led design thinking
						with software engineering excellence, we help you build digital
						products that create immersive, engaging experiences. Enabling you
						to grow through adding unique value to your customers, with proven
						methodologies that ensure that the experiences you create and your
						business objectives are always aligned.
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
					<Title className="capitalize">Recommended content</Title>
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
