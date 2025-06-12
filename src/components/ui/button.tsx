import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95 active:transition-transform active:duration-100",
	{
		variants: {
			variant: {
				default: "bg-slate-800 text-white shadow-md border border-slate-700 hover:bg-slate-700 hover:shadow-lg hover:border-slate-600 active:bg-slate-900",
				destructive:
					"bg-red-600 text-white shadow-md border border-red-500 hover:bg-red-700 hover:shadow-lg hover:border-red-600 active:bg-red-800",
				outline:
					"border-2 border-slate-300 bg-white text-slate-700 shadow-sm hover:border-slate-400 hover:bg-slate-50 hover:shadow-md active:bg-slate-100",
				secondary: "bg-slate-100 text-slate-800 shadow-sm border border-slate-200 hover:bg-slate-200 hover:border-slate-300 active:bg-slate-300",
				ghost: "text-slate-700 hover:bg-slate-100 hover:text-slate-800 active:bg-slate-200",
				link: "text-slate-600 underline-offset-4 hover:text-slate-700 hover:underline",
			},
			size: {
				default: "h-10 px-6 py-2",
				sm: "h-8 px-4 text-xs",
				lg: "h-12 px-8 text-base",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, asChild = false, ...props }, ref) => {
		const Comp = asChild ? Slot : "button";
		return (
			<Comp
				className={cn(buttonVariants({ variant, size, className }))}
				ref={ref}
				{...props}
			/>
		);
	},
);
Button.displayName = "Button";

export { Button, buttonVariants };
