// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';

// Import lucide icons
import {ExternalLink, Github, Linkedin, Twitter} from "lucide-react";

export default function Home() {
    return (
        <main className="min-h-screen bg-background py-12 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Header with profile and social links in horizontal layout */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16">
                    {/* Left: Profile info and image in horizontal arrangement */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 md:mb-0">
                        <div className="w-24 h-24 rounded-md overflow-hidden mx-auto md:mx-0">
                            <Image
                                src="/mepic3.jpg"
                                alt="Profile Avatar"
                                width={96}
                                height={96}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-primary mb-1 text-center md:text-left">Ali
                                Ghadirli</h1>
                            <p className="text-lg text-muted-foreground text-center md:text-left">
                                Cofounder @ <Link href="https://zroapp.xyz"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  className="text-primary hover:underline">zroapp.xyz</Link>
                            </p>
                        </div>
                    </div>

                    {/* Right: Social media icons */}
                    <div className="flex justify-center md:justify-end gap-6">
                        <Link href="https://twitter.com/ali_ghadirli" target="_blank" rel="noopener noreferrer"
                              className="text-foreground hover:text-primary transition-colors">
                            <Twitter className="w-6 h-6"/>
                        </Link>
                        <Link href="https://github.com/ghadirli" target="_blank" rel="noopener noreferrer"
                              className="text-foreground hover:text-primary transition-colors">
                            <Github className="w-6 h-6"/>
                        </Link>
                        <Link href="https://www.linkedin.com/in/alighadirli/" target="_blank" rel="noopener noreferrer"
                              className="text-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-6 h-6"/>
                        </Link>
                    </div>
                </div>

                {/* Bio content */}
                <div className="mb-16 text-lg leading-relaxed">
                    <p className="mb-6">
                        I am cofounder of ZRO (Zero Reliance Organizations).
                    </p>

                    <p className="mb-6">
                        Previously, I was an MMath student @ UWaterloo, focusing on <Link
                        href="https://uwspace.uwaterloo.ca/items/530d97d9-5970-490d-815b-f5a7f507c77c"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center">
                        theoretical cryptography
                        <ExternalLink className="h-4 w-4 ml-1"/>
                    </Link> under the supervision
                        of <Link href="https://sites.google.com/view/mdhajiabadi/home" target="_blank"
                                 rel="noopener noreferrer" className="text-primary hover:underline">Prof. Mohammad
                        Hajiabadi</Link>.
                        I hold a BSc in Computer Engineering with a minor in Mathematics from Sharif University of
                        Technology.
                    </p>

                    <p className="mb-6">

                    </p>

                    <p className="mb-6">
                        I am interested in everything related to freedom.
                        From cryptography, privacy, and math to economics, political science, and philosophy.
                    </p>

                    <p className="mb-6">
                        I am also an active investor in US stocks and crypto.
                    </p>
                </div>

                {/* Articles Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-8">Articles</h2>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold mb-1">
                                <Link href="https://zroapp.substack.com/p/khrushchevka-kibbutz-taylor-swift?r=ncwcf"
                                      className="text-primary hover:underline flex items-center gap-1">
                                    Khrushchevka, Kibbutz, Taylor Swift
                                    <ExternalLink className="h-4 w-4"/>
                                </Link>
                            </h3>
                            <p>And how to build your Swiftka</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-1">
                                <Link href="https://zroapp.substack.com/p/number-theory-friedman-nozick?r=ncwcf"
                                      className="text-primary hover:underline flex items-center gap-1">
                                    Number Theory, Friedman, Nozick
                                    <ExternalLink className="h-4 w-4"/>
                                </Link>
                            </h3>
                            <p>Should I enroll in a bachelor&apos;s program to take that course and learn from that
                                instructor?</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-1">
                                <Link href="https://zroapp.substack.com/p/george-dwight-havel?r=ncwcf"
                                      className="text-primary hover:underline flex items-center gap-1">
                                    George, Dwight, Havel
                                    <ExternalLink className="h-4 w-4"/>
                                </Link>
                            </h3>
                            <p>Empower things, let them flourish and change sustainably</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-1">
                                <Link href="https://zroapp.substack.com/p/insurance-luigi-daos?r=ncwcf"
                                      className="text-primary hover:underline flex items-center gap-1">
                                    Insurance, Luigi, DAOs
                                    <ExternalLink className="h-4 w-4"/>
                                </Link>
                            </h3>
                            <p>How insurance industry became extractive with a high revenue/innovation</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-1">
                                <Link href="https://zroapp.substack.com/p/how-to-double-gdp-of-earth?r=ncwcf"
                                      className="text-primary hover:underline flex items-center gap-1">
                                    How to Double GDP of Earth
                                    <ExternalLink className="h-4 w-4"/>
                                </Link>
                            </h3>
                            <p>Why onchain organizations can increase the GDP of earth, and where ZRO stands</p>
                        </div>
                    </div>
                </div>

                {/* Books Section */}
                {/* Books Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-8">Books that I like</h2>

                    <div className="space-y-3">
                        {/* Original Books */}
                        <div>
                            <p><span className="font-semibold">Antifragile</span> by Nassim Nicholas Taleb</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">The Machinery of Freedom</span> by David D. Friedman</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Build Baby Build</span> by Brian Caplan</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Future Imperfect</span> by David D. Friedman</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Anarchy, State, and Utopia</span> by Robert Nozick</p>
                        </div>

                        {/* New Books */}
                        <div>
                            <p><span className="font-semibold">Anatomy of the State</span> by Murray Rothbard</p>
                        </div>
                        <div>
                            <p><span className="font-semibold font-bold">The Hard Thing About Hard Things</span> by Ben
                                Horowitz</p>
                        </div>
                        <div>
                            <p><span className="font-semibold font-bold">Web3</span> by Don Tapscott</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Blockchain Revolution</span> by Don Tapscott</p>
                        </div>
                        <div>
                            <p><span
                                className="font-semibold">Open Borders: The Science and Ethics of Immigration</span> by
                                Brian Caplan</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">The Case Against Education</span> by Brian Caplan</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">The Moon Is a Harsh Mistress</span> by Robert A. Heinlein
                            </p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Hackers and Painters</span> by Paul Graham</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Read Write Own</span> by Chris Dixon</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">The Intelligent Investor</span> by Benjamin Graham</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Free to Choose</span> by Milton Friedman</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Price Theory</span> by David D. Friedman</p>
                        </div>
                        <div>
                            <p><span className="font-semibold font-bold">Tyranny of the Status Quo</span> by Milton
                                Friedman</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">The Power of the Powerless</span> by Václav Havel</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">The Machiavellians: Defenders of Freedom</span> by James
                                Burnham</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Four Essays on Liberty</span> by Isaiah Berlin</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">On Liberty</span> by John Stuart Mill</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">Utilitarianism</span> by John Stuart Mill</p>
                        </div>
                        <div>
                            <p><span className="font-semibold">The Open Society and Its Enemies</span> by Karl Popper
                            </p>
                        </div>
                        <div>
                            <p><span className="font-semibold">All Life Is Problem Solving</span> by Karl Popper</p>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}