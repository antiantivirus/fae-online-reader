
type Chapter = {
  mdxSource: {
    frontmatter: {
      title?: string;
      chapter_no?: string
    };
  };
  headings: { id: string; title: string }[]
}
