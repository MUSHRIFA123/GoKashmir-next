import Link from 'next/link'

import fs from "fs"
import path from "path"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import { notFound } from 'next/navigation'

import MarkdownRenderer from '@/components/MarkdownRenderer'


import HeadCommon from '@/components/HeadCommon'
import BodyCommon from '@/components/BodyCommon'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import PageHeaderCategory from '@/components/PageHeaderCategory'
import pageData from "@/data/prod/json/fixedpagesData.json"


const FetchMarkdownContent = async (markdownFilePath) => {
  try {
    // Construct the full path to the markdown file
    const fullPath = path.join(process.cwd(), "data", "prod", "markdown", "fixed", `${markdownFilePath}.md`);
    //console.log("fullPath", fullPath)

    // Check if the file exists
    await fs.promises.access(fullPath, fs.constants.F_OK);

    // Read the markdown file content
    const fileContents = await fs.promises.readFile(fullPath, "utf8");

    //console.log(fileContents)

    // Parse the front matter and markdown body
    const { data: frontMatter, content: markdownBody } = matter(fileContents);

    // Return the front matter and markdown body
    return { frontMatter, markdownBody };
  } catch (error) {
    if (error.code === "ENOENT") {
      // File does not exist
      return notFound()
    } else {
      console.error("Error fetching markdown content:", error);
      throw new Error("Failed to fetch markdown content");
    }
  }
};

export default async function FixedPage() {

  const page = "about-us"

  const markdownFilePath = pageData[page]["slug"]
  const title = pageData[page]["title"]
  const bg = pageData[page]["bg"]


  const bgImage = 'img/bg/'+ bg + '.jpg'

  //console.log("markdownFilePath", markdownFilePath)
  const result = await FetchMarkdownContent(markdownFilePath);

  if (typeof result === "string" && result === "No markdown file") {
    // File does not exist
    return notFound()

  } else {
    // File exists, destructure the result
    const { frontMatter, markdownBody } = result;

    const featuredImage = process.env.MEDIA_HOST+'/img'+frontMatter.link_article+'.jpg'

    const markdownBodyWithImages = markdownBody.replaceAll('external/place/', process.env.EXTERNAL_HOST + '/' + process.env.EXTERNAL_PLACE+'/')
                              .replaceAll('external/locality/', process.env.EXTERNAL_HOST + '/' + process.env.EXTERNAL_LOCALITY+'/')
                              .replaceAll('external/other/', process.env.EXTERNAL_HOST + '/' + process.env.EXTERNAL_OTHER+'/')
                              .replaceAll('](img/', ']('+process.env.MEDIA_HOST + '/img/');

    return (
      <>
        <head>
          <title>{title}</title>
          <meta name="description" content={title}/>
          <HeadCommon/>
        </head>
        <body>
          <Navbar/>
          <PageHeaderCategory title={title} bgImage={bgImage}/>

          <section className="relative pb-14">
            <div className="max-w-7xl lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/*<h1 className="text-black py-5 md:text-5xl text-4xl font-bold md:leading-tight leading-normal lg:text-start text-center">
                  {frontMatter.title}
                </h1>*/}
              {/*<div className="py-4 sm:py-6 lg:py-8">
                <img src={featuredImage} />
              </div>*/}
              <div className="prose text-gray-900 prose-p:text-gray-900 prose-a:text-red-600 prose-a:font-medium prose-a:no-underline">
                <MarkdownRenderer markdown={markdownBodyWithImages} />
              </div>
            </div>
          </section>

          <Footer/>
          <BodyCommon/>
        </body>
      </>
    );
  }
}