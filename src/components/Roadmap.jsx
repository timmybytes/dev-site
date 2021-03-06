import React, { useState } from 'react';

export default function Roadmap() {
  const [selected, setSelected] = useState(0);

  function handleClick(e) {
    const getValue = Number(e.target.id);
    setSelected(getValue);
  }

  return (
    <nav className='nav border'>
      <h2>Roadmap {selected}</h2>
      <ol>
        <details>
          <summary
            style={
              selected === 1
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal', color: 'inherit' }
            }
            onClick={handleClick}
            id={1}>
            The Internet
          </summary>
          <ol>
            <li>How does the Internet work?</li>
            <li>What is HTTP?</li>
            <li>Browsers and how they work?</li>
            <li>DNS and how it works?</li>
            <li>What is Domain Name?</li>
            <li>What is hosting?</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 2
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={2}>
            HTML
          </summary>
          <ol>
            <li>Learn the basics</li>
            <li>Writing Semantic HTML</li>
            <li>Forms and validation</li>
            <li>Conventions and best practices</li>
            <li>Accessibility</li>
            <li>SEO Basics</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 3
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={3}>
            CSS
          </summary>
          <ol>
            <li>Learn the Basics</li>
            <li>
              Making Layouts
              <ol>
                <li>Floats</li>
                <li>Positioning</li>
                <li>Display</li>
                <li>Box Model</li>
                <li>CSS Grid</li>
                <li>Flexbox</li>
              </ol>
            </li>
            <li>Responsive Design and Media Queries</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 4
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={4}>
            JavaScript
          </summary>
          <ol>
            <li>Syntax and Basic Constructs</li>
            <li>Learn DOM Manipulation</li>
            <li>Learn fetch, API/AJAX (XHR)</li>
            <li>ES6 & modular JS</li>
            <li>
              Understand the concepts:
              <ol>
                <li>Hoisting</li>
                <li>Event Bubbling</li>
                <li>Scope</li>
                <li>Prototype</li>
                <li>Shadow DOM</li>
                <li>Strict</li>
              </ol>
            </li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 5
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={5}>
            Version Control
          </summary>
          <ol>
            <li>Basic usage of git</li>
            <li>
              Repo Hosting Services
              <ul>
                <li>Github</li>
                <li>GitLab</li>
                <li>BitBucket</li>
              </ul>
            </li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 6
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={6}>
            Web Security Knowledge
          </summary>
          <ol>
            <li>
              Basic Understanding of:
              <ol>
                <li>HTTPS</li>
                <li>CORS</li>
                <li>Content Security Policy</li>
                <li>OWASP Security Risks</li>
              </ol>
            </li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 7
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={7}>
            Package Managers
          </summary>
          <ol>
            <li>npm</li>
            <li>yarn</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 8
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={8}>
            CSS Architecture
          </summary>
          <ol>
            <li>BEM</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 9
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={9}>
            CSS Preprocessors
          </summary>
          <ol>
            <li>SASS/SCSS</li>
            <li>PostCSS</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 10
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={10}>
            Build Tools
          </summary>
          <ol>
            <li>
              Task Runners
              <ol>
                <li>npm Scripts</li>
                <li>Gulp</li>
              </ol>
            </li>
            <li>
              Module Bundlers
              <ol>
                <li>Webpack</li>
                <li>Rollup</li>
                <li>Parcel</li>
              </ol>
            </li>
            <li>
              Linters and Formatters
              <ol>
                <li>Prettier</li>
                <li>ESLint</li>
              </ol>
            </li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 11
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={11}>
            Pick a Framework
          </summary>
          <ol>
            <li>
              React JS
              <ol>
                <li>Redux</li>
                <li>MobX</li>
              </ol>
            </li>
            <li>
              Angular JS
              <ol>
                <li>RxJS</li>
                <li>NgRX</li>
              </ol>
            </li>
            <li>
              Vue JS
              <ol>
                <li>VueX</li>
              </ol>
            </li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 12
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={12}>
            Modern CSS
          </summary>
          <ol>
            <li>Styled Component</li>
            <li>CSS Module</li>
            <li>Styled JSX</li>
            <li>Emotion</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 13
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={13}>
            Web Components
          </summary>
          <ol>
            <li>HTML Templates</li>
            <li>Custom Elements</li>
            <li>Shadow DOM</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 14
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={14}>
            CSS Frameworks
          </summary>
          <ol>
            <li>
              JS-Based (better to use for JS-based frameworks)
              <ol>
                <li>Reactstrap</li>
                <li>Material UI</li>
                <li>Tailwind CSS</li>
                <li>Chakra UI</li>
              </ol>
            </li>
            <li>
              CSS-first (don't come with JS components by default)
              <ol>
                <li>Bootstrap</li>
                <li>Materialize CSS</li>
                <li>Bulma</li>
              </ol>
            </li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 15
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={15}>
            Testing Your Apps
          </summary>
          <ol>
            <li>
              Difference Between:
              <ol>
                <li>Unit Tests</li>
                <li>Integration Tests</li>
                <li>e2e</li>
                <li>Functional</li>
              </ol>
            </li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>Ava</li>
            <li>Jasmine</li>
            <li>
              For Robust Testing:
              <ol>
                <li>Jest</li>
                <li>react-testing-library</li>
                <li>Cypress</li>
                <li>Enzyme</li>
              </ol>
            </li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 16
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={16}>
            Type Checkers
          </summary>
          <ol>
            <li>TypeScript</li>
            <li>Flow</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 17
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={17}>
            Progressive Web Apps (PWAs)
          </summary>
          <ol>
            <li>
              Learn Different Web APIs Used in PWAs:
              <ol>
                <li>Storage</li>
                <li>Web Sockets</li>
                <li>Service Workers</li>
                <li>Location</li>
                <li>Notifications</li>
                <li>Device Orientation</li>
                <li>Payments</li>
                <li>Credentials</li>
              </ol>
            </li>
            <li>
              Calculating, Measuring, and Improving Performance
              <ol>
                <li>PRPL Pattern</li>
                <li>RAIL Model</li>
                <li>Performance Metrics</li>
                <li>Using Lighthouse</li>
                <li>Using DevTools</li>
              </ol>
            </li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 18
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={18}>
            Server Side Rendering
          </summary>
          <ol>
            <li>
              React JS
              <ol>
                <li>Next.js</li>
              </ol>
            </li>
            <li>
              Angular JS
              <ol>
                <li>Universal.js</li>
              </ol>
            </li>
            <li>
              Vue JS
              <ol>
                <li>Nuxt.js</li>
              </ol>
            </li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 19
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={19}>
            GraphQL
          </summary>
          <ol>
            <li>Apollo</li>
            <li>Relay Modern</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 20
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={20}>
            Static Site Generators
          </summary>
          <ol>
            <li>Next.js</li>
            <li>Gatsby.js</li>
            <li>Nuxt.js</li>
            <li>Vuepress</li>
            <li>Jekyll</li>
            <li>Hugo</li>
            <li>Grindsome</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 21
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={21}>
            Mobile Applications
          </summary>
          <ol>
            <li>React Native</li>
            <li>NativeScript</li>
            <li>Flutter</li>
            <li>Ionic</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 22
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={22}>
            Desktop Applications
          </summary>
          <ol>
            <li>Electron</li>
          </ol>
        </details>
        <details>
          <summary
            style={
              selected === 23
                ? { fontWeight: 'bolder', color: '#dfdfeb', backgroundColor: '#1d1d1d' }
                : { fontWeight: 'normal' }
            }
            onClick={handleClick}
            id={23}>
            Web Assembly
          </summary>
          <ol>
            <li>
              Web Assembly or WASM is the binary instructions generated from higher level languages
              like Go, C, C++, or Rust. It is faster than JavaScript and WASM 1.0 has already
              shipped in the major browsers. W3C accepted it as an official standard at the end of
              2019. It will still take some time to go mainstream, however.
            </li>
          </ol>
        </details>
      </ol>
    </nav>
  );
}
