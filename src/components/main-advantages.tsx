import { cn } from "@/lib/utils";

interface MainAdvantagesProps {
	text: string;
	icon: React.ReactNode;
	backgroundColor: string;
}

export function MainAdvantages({
	text,
	icon,
	backgroundColor,
}: MainAdvantagesProps) {
	return (
		<div className="flex items-center gap-2">
			<div
				className={cn(
					"h-8 w-8 rounded-full bg-purple-light flex items-center justify-center text-white",
					backgroundColor
				)}
			>
				{icon}
			</div>

			<span className="text-sm">{text}</span>
		</div>
	);
}
