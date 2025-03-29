import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, image, url }) => {
  const siteTitle = 'Anu & Ash | Musical Duo';
  const defaultDescription = 'Anu & Ash is a musical duo creating beautiful melodies and powerful performances.';
  const defaultImage = '/og-image.jpg'; // This would be a path to a default social sharing image
  const siteUrl = 'https://anuandash.com'; // Update with actual domain when deployed

  const seoTitle = title ? `${title} | Anu & Ash` : siteTitle;
  const seoDescription = description || defaultDescription;
  const seoImage = image || defaultImage;
  const seoUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={`${siteUrl}${seoImage}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seoUrl} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={`${siteUrl}${seoImage}`} />
      
      {/* Canonical link */}
      <link rel="canonical" href={seoUrl} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default SEO; 