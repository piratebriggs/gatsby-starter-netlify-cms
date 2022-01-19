import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

// CMS.registerMediaLibrary(uploadcare)
// CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)

const config = {
    backend: {
        name: github,
        repo: 'piratebriggs/gatsby-starter-netlify-cms',
      squash_merges: true,
      commit_messages: {
        create: 'docs(nel-site): Create {{collection}} "{{slug}}"',
        update: 'docs(nel-site): Update {{collection}} "{{slug}}"',
        delete: 'docs(nel-site): Delete {{collection}} "{{slug}}"',
        uploadMedia: 'docs(nel-site): Upload "{{path}}"',
        deleteMedia: 'docs(nel-site): Delete "{{path}}"',
      },
      identity_url: "https://romantic-goodall-a60fe4.netlify.app/.netlify/identity",  // https://github.com/hfte/netlify-cms-with-selfhosted-gotrue-and-git-gateway
      gateway_url:  "https://romantic-goodall-a60fe4.netlify.app/.netlify/git",
      site_domain:  "https://romantic-goodall-a60fe4.netlify.app/",
  
    },
  
    load_config_file: false,
  };

CMS.init({ config });
