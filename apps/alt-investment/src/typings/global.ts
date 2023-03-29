declare global {
	type ArrayElement<ArrayType extends readonly unknown[]> =
		ArrayType extends readonly (infer ElementType)[] ? ElementType : never

	type Maybe<T> = T | null

	// module "*.woff";
	// module "*.woff2";

	// module "*.svg" {
	//   import React = require("react");
	//   const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	//   export default ReactComponent;
	// }

	// module "\*.jpg" {
	//   const content: string;
	//   export default content;
	// }

	// module "\*.png" {
	//   const content: string;
	//   export default content;
	// }

	// module "\*.json" {
	//   const content: string;
	//   export default content;
	// }

	type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
	type XOR<T, U> = T | U extends object
		? (Without<T, U> & U) | (Without<U, T> & T)
		: T | U
}

export {}
