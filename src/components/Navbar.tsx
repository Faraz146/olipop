"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks, brandConfig } from "@/data/drinkData";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (pathname !== "/") return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(`#${entry.target.id}`);
                    }
                });
            },
            { rootMargin: "-40% 0px -60% 0px" }
        );

        navLinks.forEach((link) => {
            const section = document.querySelector(link.href);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [pathname]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMenuOpen(false);
        if (pathname === "/") {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
            }
        }
        // If not on homepage, let the Link handle navigation to /#anchor
    };

    return (
        <>
            <nav
                className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
            >
                <Link href="/" className={styles.logo}>
                    {brandConfig.companyName.slice(0, 3)}
                    <span className={styles.logoAccent}>
                        {brandConfig.companyName.slice(3)}
                    </span>
                </Link>

                <div className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
                    {navLinks.map((link) => {
                        const fullHref = pathname === "/" ? link.href : `/${link.href}`;
                        return (
                            <Link
                                key={link.href}
                                href={fullHref}
                                className={`${styles.navLink} ${activeSection === link.href ? styles.active : ""
                                    }`}
                                onClick={(e) => handleLinkClick(e, link.href)}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                </div>

                <button
                    className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={styles.hamburgerLine} />
                    <span className={styles.hamburgerLine} />
                    <span className={styles.hamburgerLine} />
                </button>
            </nav>

            <div
                className={`${styles.overlay} ${menuOpen ? styles.visible : ""}`}
                onClick={() => setMenuOpen(false)}
            />
        </>
    );
}
