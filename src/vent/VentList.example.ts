import { marked } from "marked";

interface VentComponents {
  date: Date;
  content: string;
  images?: string;
}

function parseContent(content: string) {
  return marked.parseInline(content, {
    gfm: true, breaks: true
  });
};

const Things: Array<VentComponents> = [

];

export default Things;