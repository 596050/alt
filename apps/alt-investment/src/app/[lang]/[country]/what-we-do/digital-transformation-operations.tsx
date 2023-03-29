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

// Productivity

export default function DigitalTransformationOperations() {
	return (
		<>
			<BannerWithTitle outerClassName="bg-primary-5">
				{internationalization.pages.titles.digitalTransformationOperations}
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
						{internationalization.pages.titles.digitalTransformationOperations}
					</Title>
				</Container>
				<Container el="section" className="mt-4 max-w-6xl px-3 lg:px-6">
					<p>
						<b>
							What does it take for business to thrive in the digital era? We do
							it with a formula that puts organizational evolution at the
							forefront. It involves aligning around customer outcomes, and
							enabling people. Developing a pragmatic execution plan, and
							streamlining processes. Focusing investments, and delivering value
							faster.
						</b>
					</p>
					<br />
					<p>
						The impact? An evolutionary organization that can face ongoing
						market disruptions head-on, seize new opportunities as they emerge,
						and capitalize on technology to accelerate growth.
					</p>
					<p>
						Organizations are challenged to transform to adapt and grow in the
						face of continuous disruption. Modern digital businesses have an
						advantage: they have learned to adapt, but must keep evolving their
						processes, people, and technology to continuously innovate and
						compete.
					</p>
				</Container>
				<Container el="section" className="mt-12 max-w-6xl px-3 lg:px-6">
					<Title className="capitalize">Our services include</Title>
					<div className="mx-auto mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
						{[
							{
								title: 'Delivery transformation',
								text: 'nBuild a high-performing agile software delivery capability by evolving your skills, practices, structures and team cultures.',
							},
							{
								title: 'Technology strategy',
								text: 'nEnable your business strategy and deliver new capabilities with a defined technology roadmap and aligned investments.',
							},
							{
								title: 'Digital fluency',
								text: 'Create sustainable business transformation by clarifying your digital aspiration and strategic outcomes.',
							},
							{
								title: 'Organization transformation',
								text: "Accelerate growth by transforming your organization's culture, operating model and ways of working.",
							},
							{
								title: 'Value-driven portfolio management',
								text: 'Create organizational visibility and transparency to better measure your progress through alignment of investments and strategic outcomes.',
							},
							{
								title: 'Executive advisory services',
								text: 'Drive transformation with transparent leadership practices that help you to navigate ambiguity.',
							},
							{
								title: 'Digital foundations training',
								text: 'Improve your organizational capabilities with agile and modern digital business practices.',
							},
							{
								title: 'Digital talent strategy',
								text: 'Execute on strategic digital initiatives by developing, engaging, and retaining high-performing talent.',
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
					<Title>
						Customer outcomes. Pragmatic execution. Accelerated value.
					</Title>
					<ul className="mx-3 mt-4 md:max-w-[80%] lg:mx-6">
						<li className="list-disc">
							<p>
								We bring together your entire organization to help you create a
								holistic vision for transformation.
							</p>
						</li>
						<li className="list-disc">
							<p>
								We help you navigate your own digital path by building on our
								experience working across multiple business and technology
								domains, and different geographies and work cultures worldwide.
							</p>
						</li>
						<li className="list-disc">
							<p>
								We use our Digital Fluency Model to help you understand your
								aspirations, readiness and capabilities.
							</p>
						</li>
						<li className="list-disc">
							<p>
								We work with you to create a pragmatic roadmap that enables you
								to deliver value faster.
							</p>
						</li>
					</ul>
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
									text: 'Learn more',
									href: '',
								},
							},
							{
								imagePath: 'compare-fibre-8xnaQKWjDrM-unsplash.webp',
								tagName: 'Client story',
								title:
									'Veterans Affairs: Assisting emergency room physicians with COVID-19 Patient Manager',
								callToAction: {
									text: 'Learn more',
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
									text: 'Learn more',
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
						text="Strand were the stand-out choice to partner with us in developing our flagship Lens platform while supporting our next-level digital transformation. Our shared core values around Lean, Customer-Value, and Agile Software Development enabled us to quickly establish an effective working style that led to rapid and iterative development of our L48 Lens solution. Today, the Strand partnership continues to drive innovation in our products and working practices that ultimately provide greater value to our customers."
						quoteSource={{
							name: 'Phil Boyle',
							role: 'Vice President of Product Operations, Wood Mackenzie',
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
						].map(item => {
							return (
								<CardWithVerticalFloatingPanel
									key={`${item.title}`}
									data={item}
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
						title="How can you improve productivity and quality simultaneously?"
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
