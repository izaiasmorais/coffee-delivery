"use client";
import {
	ClockIcon,
	CoffeeIcon,
	PackageIcon,
	ShoppingCartIcon,
} from "@phosphor-icons/react";
import { MainAdvantages } from "./main-advantages";
import Image from "next/image";

export function Main() {
	return (
		<div className="w-full bg-white">
			<div className="w-full h-full max-w-[1200px] mx-auto flex items-center justify-between py-[100px]">
				<div className="flex flex-col gap-12">
					<div>
						<h1 className="text-5xl block mb-4 !font-[800]">
							Encontre o café perfeito para qualquer hora do dia
						</h1>

						<p className="text-zinc-500">
							Com o Coffee Delivery você recebe seu café onde estiver, a
							qualquer hora
						</p>
					</div>

					<div className="grid grid-cols-2 gap-4 max-w-max">
						<MainAdvantages
							text="Compra simples e segura"
							icon={<ShoppingCartIcon weight="fill" />}
							backgroundColor="bg-[#C47F17]"
						/>

						<MainAdvantages
							text="Embalagem mantém o café intacto"
							icon={<PackageIcon weight="fill" />}
							backgroundColor="bg-[#403937]"
						/>

						<MainAdvantages
							text="Entrega rápida e rastreada"
							icon={<ClockIcon weight="fill" />}
							backgroundColor="bg-[#DBAC2C]"
						/>

						<MainAdvantages
							text="O café chega fresquinho até você"
							icon={<CoffeeIcon weight="fill" />}
							backgroundColor="bg-[#8047F8]"
						/>
					</div>
				</div>

				<Image
					src="/main-coffee.png"
					alt="Coffee Delivery"
					width={476}
					height={360}
					quality={100}
				/>
			</div>
		</div>
	);
}
