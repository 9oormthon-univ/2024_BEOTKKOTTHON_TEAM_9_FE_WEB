// src/context/NavigationContext.tsx
"use client";
import React, { createContext, useState, useContext } from "react";

interface NavigationContextType {
	isNavOpen: boolean;
	toggleNav: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
	undefined
);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isNavOpen, setIsNavOpen] = useState(false);

	const toggleNav = () => setIsNavOpen(!isNavOpen);

	return (
		<NavigationContext.Provider value={{ isNavOpen, toggleNav }}>
			{children}
		</NavigationContext.Provider>
	);
};

export const useNavigation = () => {
	const context = useContext(NavigationContext);
	if (context === undefined) {
		throw new Error(
			"useNavigation must be used within a NavigationProvider"
		);
	}
	return context;
};
