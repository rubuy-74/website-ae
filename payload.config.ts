import { s3Storage } from "@payloadcms/storage-s3";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import { resendAdapter } from '@payloadcms/email-resend';
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Person } from "./collections/Person";
import { Material } from "./collections/Material";
import { SportsTeam } from "./collections/SportsTeam";
import { Space } from "./collections/Space";
import { Sponsor } from "./collections/Sponsor";
import { Association } from "./collections/Association";
import { StudentGuide } from "./collections/StudentGuide";
import { Link } from "./collections/Link";
import { Position } from "./collections/Position";
import { BoardSection } from "./collections/BoardSection";
import { Product } from "./collections/Product";
import { President } from "./collections/President";
import { Order } from "./collections/Order";
import { Event } from "./collections/Event";
import { DocumentFolder } from "./collections/DocumentFolder";
import { DocFile } from "./collections/DocFile";
import { Video } from "./collections/Video";
import { Faq } from "./collections/Faq";
import { Place } from "./collections/Place";
import { Testimonal } from "./collections/Testimonial";
import { FeedbackLinks } from "./collections/FeedbackLinks";

import { en } from "@payloadcms/translations/languages/en";
import { pt } from "@payloadcms/translations/languages/pt";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    dateFormat: "dd MMMM yyyy",
  },
  collections: [
    Users,
    Media,
    Person,
    Material,
    Space,
    SportsTeam,
    Sponsor,
    Association,
    StudentGuide,
    Link,
    Position,
    BoardSection,
    Product,
    President,
    Order,
    Event,
    DocumentFolder,
    DocFile,
    Video,
    Faq,
    Place,
    Testimonal,
    FeedbackLinks,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  sharp,
  email: resendAdapter({
    defaultFromAddress: process.env.RESEND_EMAIL || '',
    defaultFromName: 'Payload CMS',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  plugins: [
    s3Storage({
      enabled: process.env.STORAGE_METHOD === "r2",
      collections: {
        media: true,
        docfile: true,
        studentGuide: true,
        video: true
      },
      bucket: process.env.R2_BUCKET || "",
      config: {
        endpoint: process.env.R2_ENDPOINT || "",
        credentials: {
          accessKeyId: process.env.R2_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.R2_SECRET_ACCESS_KEY || "",
        },
        region: "auto",
      },
    }),
    // storage-adapter-placeholder
    vercelBlobStorage({
      enabled: process.env.STORAGE_METHOD === "blob", // Optional, defaults to true
      // Specify which collections should use Vercel Blob
      collections: {
        media: true,
        docfile: true,
        studentGuide: true,
        video: true
      },
      // Token provided by Vercel once Blob storage is added to your Vercel project
      token: process.env.BLOB_READ_WRITE_TOKEN || "",
    }),
  ],
  i18n: {
    fallbackLanguage: "pt",
    translations: { pt, en },
    //@ts-ignore
    supportedLanguages: { pt, en },
  },
  upload: {
    limits : {
      fileSize: 100000000 // 100mb
    }
  }
  //livePreview: false, // Lets set it to true if we use pages collection (Globals)
});
