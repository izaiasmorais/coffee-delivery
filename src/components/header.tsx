"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { MapPinIcon, ShoppingCartIcon } from "@phosphor-icons/react";

export function Header() {
	return (
		<div className="w-full h-[100px] bg-white">
			<div className="w-full h-full max-w-[1200px] mx-auto flex items-center justify-between">
				<Image
					src="/coffee-delivery.png"
					alt="Coffee Delivery"
					width={84.95}
					height={40}
					quality={100}
					priority
				/>

				<div className="flex items-center gap-2">
					<Button className="bg-purple-light hover:bg-purple-light text-purple">
						<MapPinIcon weight="fill" />
						Teresina, PI
					</Button>

					<Button className="bg-yellow-light hover:bg-yellow-light text-yellow">
						<ShoppingCartIcon weight="fill" />
					</Button>
				</div>
			</div>
		</div>
	);
}
