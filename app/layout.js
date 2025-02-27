import "./globals.css";
import { Inter } from "next/font/google";
import { GeistMono, GeistSans } from "geist/font";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Euclid Learn",
  description: "Euclid Learn - accessible, all-encompassing training programs for gifted students grades 6-12 for national math and computing olympiads and standardized testing.",
  keywords: "online academic coaching, student-oriented learning, personalized test preparation, one-on-one learning, private guidance for students, test preparation services, sat preparation, ap tutoring, aime preparation, usaco training, online sat preparation, online ap tutoring, online aime preparation, online usaco training, free initial consultation, affordable online test prep, high-quality test prep materials, mentorship for test success, customized study plans, google meet tutoring sessions  ",
  openGraph: {
    title: "Euclid Learn ",
    description: "Expert training for USACO, AIME, SAT, and AP exams",
    images: [
      {
        url: 'https://www.euclidlearn.com/logo/logo.svg',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Euclid Learn",
    description: "Expert training for USACO, AIME, SAT, and AP exams",
    images: ['https://www.euclidlearn.com/logo/logo.svg'],
  },
  alternates: {
    canonical: 'https://www.euclidlearn.com'
  }
}

export default function RootLayout({ children }) {
  return (
    <html className={`${GeistSans.variable} ${GeistMono.variable}`} lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="id_sNyAoZTfvcg3UlpPeP0TrdBw8_lRZlBK4HztMexs" />
        <link rel="icon" href="/icons/smiley/smile_blue.svg" sizes="any" />
        {/* Add structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Euclid Learn",
              "url": "https://www.euclidlearn.com",
              "logo": "https://www.euclidlearn.com/icons/smiley/smile_blue.svg",
              "description": metadata.description,
              "sameAs": [
                "https://www.youtube.com/@euclidlearn",
                
              ],
              "hasPart": [
                {
                  "@type": "WebPage",
                  "url": "https://www.euclidlearn.com/ap",
                  "name": "AP Tutoring",
                  "description":
                    "Get fully prepared for your AP exams and master the material."
                },
                {
                  "@type": "WebPage",
                  "url": "https://www.euclidlearn.com/sat",
                  "name": "SAT Private Tutoring",
                  "description":
                    "Score higher on your SAT Exams with Euclid Learn or get your money back."
                },
                {
                  "@type": "WebPage",
                  "url": "https://www.euclidlearn.com/aime",
                  "name": "Excel in AIME",
                  "description":
                    "Master the challenging AIME exam with specialized coaching and problem-solving techniques."
                },

                {
                  "@type": "WebPage",
                  "url": "https://www.euclidlearn.com/usaco",
                  "name": "USA Computing Olympiad",
                  "description":
                    "Achieve higher USACO scores with personalized mentorship from our team of programming experts."
                }
                
              ]
            }),
          }}
        />
       
      </head>
      <body>{children}</body>
    </html>
  );
}
