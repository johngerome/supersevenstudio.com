import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-[500px] mx-auto flex items-center">
      <Head>
        <title>Super Seven Studio</title>
        <meta
          name="description"
          content="Photography and videography based on Bohol"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="md:p-10 text-center">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSupersevenstudio-1922796287942969&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=113194052061828"
          width="500"
          height="600"
          style={{ border: 'none', overflow: 'hidden' }}
          scrolling="no"
          frameborder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          className='shadow-lg'
        ></iframe>
        <a
          href="https://www.facebook.com/Supersevenstudio-1922796287942969"
          target="_blank"
          className="mt-6 block bg-green-700 px-6 py-3 text-lg text-white rounded-md"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
