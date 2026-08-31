/**
 * Shared Logo Component
 *
 * - /public/logo.svg — default (light backgrounds)
 * - /public/logo-dark.svg — inverted surfaces (e.g. footer on bg-foreground)
 *
 * @example
 * <Logo className="h-7 w-auto" />
 * <Logo className="h-7 w-auto" inverted />
 */

interface LogoProps {
	className?: string;
	/** Accessible label for the logo */
	ariaLabel?: string;
	/** Light logo for dark/inverted backgrounds (footer) */
	inverted?: boolean;
}

export const Logo = ({ className, ariaLabel = "InsaiVue", inverted = false }: LogoProps) => {
	const src = inverted ? "/logo-dark.png" : "/logo.png";

	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			src={src}
			alt={ariaLabel}
			width={160}
			height={40}
			className={`aspect-[3176/783] h-9 w-auto object-contain ${className ?? ""}`}
		/>
	);
};
