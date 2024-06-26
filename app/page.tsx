// components/Integrations.js

const Integrations = () => {
  return (
    <section className="py-10 bg-background sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">Integrate with apps</h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-muted">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 lg:mt-16 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="relative overflow-hidden bg-card rounded-lg shadow hover:bg-hover transition duration-300 ease-in-out">
            <div className="p-8">
              <div className="flex items-center">
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/gmail-logo.png"
                  alt="Gmail"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-foreground">Gmail</p>
                  <p className="mt-px text-sm text-muted">Direct Integration</p>
                </div>
                <svg
                  className="hidden w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-muted mt-7">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
            </div>
            <a href="https://www.gmail.com" className="absolute bottom-4 right-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Invite</a>
          </div>
          {/* Card 2 */}
          <div className="relative overflow-hidden bg-card rounded-lg shadow hover:bg-hover transition duration-300 ease-in-out">
            <div className="p-8">
              <div className="flex items-center">
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/slack-logo.png"
                  alt="Slack"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-foreground">Slack</p>
                  <p className="mt-px text-sm text-muted">Direct Integration</p>
                </div>
                <svg
                  className="block w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-muted mt-7">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
            </div>
            <a href="https://www.slack.com" className="absolute bottom-4 right-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Invite</a>
          </div>
          {/* Card 3 */}
          <div className="relative overflow-hidden bg-card rounded-lg shadow hover:bg-hover transition duration-300 ease-in-out">
            <div className="p-8">
              <div className="flex items-center">
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/shopify-logo.png"
                  alt="Shopify"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-foreground">Shopify</p>
                  <p className="mt-px text-sm text-muted">Direct Integration</p>
                </div>
                <svg
                  className="hidden w-5 h-5 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-muted mt-7">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
            </div>
            <a href="https://www.shopify.com" className="absolute bottom-4 right-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Invite</a>
          </div>
          {/* Repeat for other cards */}
          {/* Card 4 */}
          <div className="relative overflow-hidden bg-card rounded-lg shadow hover:bg-hover transition duration-300 ease-in-out">
            <div className="p-8">
              <div className="flex items-center">
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/intercom-logo.png"
                  alt="Intercom"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-foreground">Intercom</p>
                  <p className="mt-px text-sm text-muted">Direct Integration</p>
                </div>
                <svg
                  className="block w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-muted mt-7">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
            </div>
            <a href="https://www.intercom.com" className="absolute bottom-4 right-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Invite</a>
          </div>
          {/* Card 5 */}
          <div className="relative overflow-hidden bg-card rounded-lg shadow hover:bg-hover transition duration-300 ease-in-out">
            <div className="p-8">
              <div className="flex items-center">
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/twitter-logo.png"
                  alt="Twitter"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-foreground">Twitter</p>
                  <p className="mt-px text-sm text-muted">Direct Integration</p>
                </div>
                <svg
                  className="block w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-muted mt-7">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
            </div>
            <a href="https://www.twitter.com" className="absolute bottom-4 right-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Invite</a>
          </div>
          {/* Card 6 */}
          <div className="relative overflow-hidden bg-card rounded-lg shadow hover:bg-hover transition duration-300 ease-in-out">
            <div className="p-8">
              <div className="flex items-center">
                <img
                  className="flex-shrink-0 w-12 h-auto"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/integration/3/sketch-logo.png"
                  alt="Sketch"
                />
                <div className="ml-5 mr-auto">
                  <p className="text-xl font-semibold text-foreground">Sketch</p>
                  <p className="mt-px text-sm text-muted">Direct Integration</p>
                </div>
                <svg
                  className="block w-6 h-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
              <p className="text-base leading-relaxed text-muted mt-7">
                Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et
                dolore.
              </p>
            </div>
            <a href="https://www.sketch.com" className="absolute bottom-4 right-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ease-in-out">Invite</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
