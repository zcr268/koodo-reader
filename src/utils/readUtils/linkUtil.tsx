import { openExternalUrl } from "../serviceUtils/urlUtil";

export const handleLinkJump = async (event: any, rendition: any = {}) => {
  let href;
  if (event.target) {
    href =
      (event.target.innerText &&
        event.target.innerText.indexOf("http") > -1 &&
        event.target.innerText) ||
      event.target.getAttribute("href") ||
      event.target.getAttribute("src") ||
      "";
  }
  if (href && href.indexOf("#") > -1) {
    let pageArea = document.getElementById("page-area");
    if (!pageArea) return;
    let iframe = pageArea.getElementsByTagName("iframe")[0];
    if (!iframe) return;
    let doc: any = iframe.contentDocument;
    if (!doc) {
      return;
    }
    if (href.indexOf("#") !== 0) {
      let chapterInfo = rendition.resolveChapter(href.split("#")[0]);
      await rendition.goToChapter(
        chapterInfo.index,
        chapterInfo.href,
        chapterInfo.label
      );
    }

    let id = href.split("#").reverse()[0];
    await rendition.goToNode(doc.body.querySelector("#" + id) || doc.body);
  } else if (href && rendition.resolveChapter(href)) {
    let chapterInfo = rendition.resolveChapter(href);
    await rendition.goToChapter(
      chapterInfo.index,
      chapterInfo.href,
      chapterInfo.label
    );
  } else if (
    href &&
    href.indexOf("../") === -1 &&
    href.indexOf("http") === 0 &&
    href.indexOf("OEBPF") === -1 &&
    href.indexOf("OEBPS") === -1 &&
    href.indexOf("footnote") === -1 &&
    href.indexOf("blob") === -1 &&
    href.indexOf("data:application") === -1
  ) {
    openExternalUrl(href);
  }
};
