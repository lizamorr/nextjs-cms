import React from "react";
const bunyan = require("bunyan");
const logger = bunyan.createLogger({ name: "logger" });

function Page(props) {
  const { sections } = props;

  return sections.map((section, index) => {
    try {
      const { default: Component } = require(`../components/${section.type}`);
      return <Component key={index} {...section.props} />;
    } catch (error) {
      logger.error("Error finding component: ", error.message);
      return null;
    }
  });
}

export async function getStaticProps({ params: { path } }) {
  const fs = require("fs").promises;
  const dataFiles = await fs.readdir("./data");
  let props = {};

  if (!dataFiles) {
    logger.error("No data files found");
    return {
      notFound: true,
    };
  }

  dataFiles.forEach((dataFile) => {
    const dataFileContents = require(`../data/${dataFile}`);
    const languages = Object.keys(dataFileContents);
    languages.forEach((lng) => {
      let filePath = dataFileContents[lng].path;
      filePath = filePath.charAt(0) === "/" ? filePath.slice(1) : filePath;
      if (filePath === path.join("/")) {
        props = { ...dataFileContents[lng] };
      }
    });
  });

  return {
    props,
  };
}

export async function getStaticPaths() {
  const fs = require("fs").promises;
  const dataFiles = await fs.readdir("./data");
  const paths = [];

  if (!dataFiles) {
    return {
      notFound: true,
    };
  }

  dataFiles.forEach((dataFile) => {
    const dataFileContents = require(`../data/${dataFile}`);
    const languages = Object.keys(dataFileContents);
    languages.forEach((lng) => {
      let filePath = dataFileContents[lng].path;
      filePath = filePath.charAt(0) === "/" ? filePath.slice(1) : filePath;
      paths.push({
        params: {
          path: filePath.split("/"),
        },
      });
    });
  });

  return {
    paths,
    fallback: false,
  };
}

export default Page;
