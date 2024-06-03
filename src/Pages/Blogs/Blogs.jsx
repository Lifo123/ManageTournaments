import './Styles/Blogs.css'
import { Suspense, lazy, useEffect, useRef, useState } from 'react'


import Loading from '../../Components/Loading/Loading'

//Lazy Components
const Footer = lazy(() => import("../../Components/Footer/Footer"))
const Header = lazy(() => import("../../Components/Header/Header"))



export default function Blogs() {
    //States
    const [NavList, setNavList] = useState([]);
    const [activeHeading, setActiveHeading] = useState(null);
    const headingsRef = useRef([]);

    useEffect(() => {
        const sections = document.querySelectorAll('body .sec-article h2, body .sec-article h3');
        const sectionList = [];
        let currentSection = null;

        sections.forEach(section => {
            if (section.tagName === 'H2') {
                currentSection = { item: section.innerText, subitems: [] };
                sectionList.push(currentSection);
            } else if (section.tagName === 'H3' && currentSection) {
                currentSection.subitems.push(section.innerText);
            }
        });

        setNavList(sectionList);

    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const id = entry.target.getAttribute('id');
                if (entry.isIntersecting) {
                    setActiveHeading(`#${id.replace(/ /g, '-')}`);
                    console.log(entry);
                }
            });
        }, { rootMargin: '10% 0% -70% 0%', threshold: 1 });

        headingsRef.current.forEach((heading) => {
            observer.observe(heading);
        });

        return () => {
            observer.disconnect();
        };
    }, []);


    return (
        <>
            <Suspense fallback={<Loading t={2} />}><Header /></Suspense>
            <main className='sec-article d-grid g-20 w-80 m-auto g-10 mt-40'>
                <section className='f-col br-10 g-15'>
                    <h1 id='Post'>Blog Post</h1>
                    <h2 id='Title' ref={(el) => (headingsRef.current[1] = el)}>Title</h2>
                    <p>Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages.</p>
                    <p>Using Markdown is <code> different</code> than using a WYSIWYG editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.</p>
                    <p>For example, to denote a heading, you add a number sign before it (e.g., # Heading One). Or to make a phrase bold, you add two asterisks before and after it (e.g., **this text is bold**). It may take a while to get used to seeing Markdown syntax in your text, especially if you’re accustomed to WYSIWYG applications. The screenshot below shows a Markdown file displayed in the Visual Studio Code text editor.</p>
                    <blockquote>
                        <p>The overriding design goal for Markdown’s formatting syntax is to make it as readable as possible. The idea is that a Markdown-formatted document should be publishable as-is, as plain text, without looking like it’s been marked up with tags or formatting instructions.</p>
                    </blockquote>
                    <h2 id='Kicking-the-Tires' ref={(el) => (headingsRef.current[2] = el)}>Kicking the Tires</h2>
                    <li>
                        <p>The best way to get started with Markdown is to use it. That’s easier than ever before thanks to a variety of free tools.</p>
                        <p>You don’t even need to <a href="/">download</a> anything. There are several online Markdown editors that you can use to try writing in Markdown. Dillinger is one of the best online Markdown editors. Just open the site and start typing in the left pane. A preview of the rendered document appears in the right pane.</p>
                    </li>
                    <p>The best way to get started with Markdown is to use it. That’s easier than ever before thanks to a variety of free tools.</p>
                    <p>You don’t even need to <a href="/">download</a> anything. There are several online Markdown editors that you can use to try writing in Markdown. Dillinger is one of the best online Markdown editors. Just open the site and start typing in the left pane. A preview of the rendered document appears in the right pane.</p>
                    <p>
                        <img src="https://mdg.imgix.net/assets/images/dillinger.png" />
                    </p>
                    <p>You’ll probably want to keep the Dillinger website open as you read through this guide. That way you can try the syntax as you learn about it. After you’ve become familiar with Markdown, you may want to use a Markdown application that can be installed on your desktop computer or mobile device.</p>
                    <h2 id='How-Does-it-Work?' ref={(el) => (headingsRef.current[3] = el)}>How Does it Work?</h2>
                    <p>You might be wondering why people use Markdown instead of a WYSIWYG editor. Why write with Markdown when you can press buttons in an interface to format your text? As it turns out, there are several reasons why people use Markdown instead of WYSIWYG editors.</p>
                    <ul>
                        <li>
                            <p>Markdown can be used for everything. People use it to create <a href="#Title">websites</a>, <a href="#Post">documents</a>, <a href="#notes">notes</a>, <a href="#books">books</a>, <a href="#presentations">presentations</a>, <a href="#email">email messages</a>, and <a href="#documentation">technical documentation</a>.</p>
                        </li>
                        <li>
                            <p>Markdown is portable. Files containing Markdown-formatted text can be opened using virtually any application. If you decide you don’t like the Markdown application you’re currently using, you can import your Markdown files into another Markdown application. That’s in stark contrast to word processing applications like Microsoft Word that lock your content into a proprietary file format.</p>
                        </li>
                        <li>
                            <p>Markdown is platform independent. You can create Markdown-formatted text on any device running any operating system.</p>
                        </li>
                        <li>
                            <p>Markdown is future proof. Even if the application you’re using stops working at some point in the future, you’ll still be able to read your Markdown-formatted text using a text editing application. This is an important consideration when it comes to books, university theses, and other milestone documents that need to be preserved indefinitely.</p>
                        </li>
                        <li>
                            <p>Markdown is everywhere. Websites like <a href="/tools/reddit/">Reddit</a> and GitHub support Markdown, and lots of desktop and web-based applications support it.</p>
                        </li>
                    </ul>
                    <p>Dillinger makes writing in Markdown easy because it hides the stuff happening behind the scenes, but it’s worth exploring how the process works in general.</p>
                    <p>When you write in Markdown, the text is stored in a plaintext file that has an .md or .markdown extension. But then what? How is your Markdown-formatted file converted into HTML or a print-ready document?</p>
                    <p>The short answer is that you need a Markdown application capable of processing the Markdown file. There are lots of applications available — everything from simple scripts to desktop applications that look like Microsoft Word. Despite their visual differences, all of the applications do the same thing. Like Dillinger, they all convert Markdown-formatted text to HTML so it can be displayed in web browsers.</p>
                    <p><img src="https://mdg.imgix.net/assets/images/markdown-flowchart.png" /></p>
                    <h2 id="Whats-Markdown-Good-For?" ref={(el) => (headingsRef.current[4] = el)}>Whats Markdown Good For?</h2>
                    <p>Markdown is a fast and easy way to take notes, create content for a website, and produce print-ready documents.</p>
                    <h3 id="Websites" ref={(el) => (headingsRef.current[5] = el)}>Websites</h3>
                    <p>Markdown was designed for the web, so it should come as no surprise that there are plenty of applications specifically designed for creating website content.</p>
                    <p>If you’re familiar with HTML, CSS, and version control, check out Jekyll, a popular static site generator that takes Markdown files and builds an HTML website. One advantage to this approach is that GitHub Pages provides free hosting for Jekyll-generated websites. If Jekyll isn’t your cup of tea, just pick one of the many other static site generators available.</p>
                    <h3 id="Collaboration" ref={(el) => (headingsRef.current[6] = el)}>Collaboration</h3>
                    <p>Collaboration and team messaging applications are a popular way of communicating with coworkers and friends at work and home. These applications don’t utilize all of Markdown’s features, but the features they do provide are fairly useful. For example, the ability to bold and italicize text without using the WYSIWYG interface is pretty handy. <a href="/tools/slack/">Slack</a>, <a href="/tools/discord/">Discord</a>, <a href="/tools/wiki-js/">Wiki.js</a>, and <a href="/tools/mattermost/">Mattermost</a> are all good collaboration applications.</p>
                    <h3 id="Documentation" ref={(el) => (headingsRef.current[7] = el)}>Documentation</h3>
                    <p>Markdown is a natural fit for technical documentation. Companies like GitHub are increasingly switching to Markdown for their documentation — check out their <a href="https://github.com/blog/1939-how-github-uses-github-to-document-github">blog post</a> about how they migrated their Markdown-formatted documentation to <a href="/tools/jekyll/">Jekyll</a>. If you write documentation for a product or service, take a look at these handy tools:</p>
                    <ul>
                        <li><a href="https://readthedocs.org">Read the Docs</a> can generate a documentation website from your open source Markdown files. Just connect your GitHub repository to their service and push — Read the Docs does the rest. They also have a <a href="https://readthedocs.com/">service for commercial entities</a>.</li>
                        <li><a href="/tools/mkdocs/">MkDocs</a> is a fast and simple static site generator that’s geared towards building project documentation. Documentation source files are written in Markdown and configured with a single YAML configuration file. MkDocs has several <a href="https://www.mkdocs.org/user-guide/styling-your-docs/">built in themes</a>, including a port of the <a href="https://readthedocs.org/">Read the Docs</a> documentation theme for use with MkDocs. One of the newest themes is <a href="https://squidfunk.github.io/mkdocs-material/">MkDocs Material</a>.</li>
                        <li><a href="/tools/docusaurus/">Docusaurus</a> is a static site generator designed exclusively for creating documentation websites. It supports translations, search, and versioning.</li>
                        <li><a href="https://vuepress.vuejs.org/">VuePress</a> is a static site generator powered by <a href="https://vuejs.org/">Vue</a> and optimized for writing technical documentation.</li>
                        <li><a href="/tools/jekyll/">Jekyll</a> was mentioned earlier in the section on websites, but it’s also a good option for generating a documentation website from Markdown files. If you go this route, be sure to check out the <a href="https://idratherbewriting.com/documentation-theme-jekyll/">Jekyll documentation theme</a>.</li>
                    </ul>
                    <h2 id='Wasa' ref={(el) => (headingsRef.current[8] = el)}>Wasa</h2>
                    <p>Markdown is a lightweight markup language that you can use to add formatting elements to plaintext text documents. Created by John Gruber in 2004, Markdown is now one of the world’s most popular markup languages.</p>
                    <p>Using Markdown is <code> different</code> than using a WYSIWYG editor. In an application like Microsoft Word, you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.</p>
                </section>
                <aside className='sec-TOC br-10'>
                    <ul className='f-col'>
                        {NavList.map((section, index) => (
                            <li key={index}>
                                <a href={`#${section.item.replace(/ /g, '-')}`} className={activeHeading === `#${section.item.replace(/ /g, '-')}` ? 'toc-active' : ''}>{section.item}</a>
                                {section.subitems.length > 0 && (
                                    <ul>
                                        {section.subitems.map((subitem, idx) => (
                                            <a href={`#${subitem.replace(/ /g, '-')}`} key={idx} className={activeHeading === `#${subitem.replace(/ /g, '-')}` ? 'toc-active' : ''}>{subitem}</a>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </aside>
            </main>
            <Suspense fallback={<Loading t={2} />}><Footer /></Suspense>
        </>
    )
}

