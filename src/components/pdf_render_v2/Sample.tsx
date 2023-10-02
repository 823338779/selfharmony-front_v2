'use client';

import { useState } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

import './Sample.css';

import type { PDFDocumentProxy } from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();

const options = {
  cMapUrl: '/cmaps/',
  standardFontDataUrl: '/standard_fonts/',
};

type PDFFile = string | File | null;

export default function Sample() {
  const [file, setFile] = useState<PDFFile>('./sample.pdf');
  const [numPages, setNumPages] = useState<number>(0);

  function onFileChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const { files } = event.target;

    if (files && files[0]) {
      setFile(files[0] || null);
    }
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
    setNumPages(2);
    console.log(nextNumPages)
  }

  return (
      <div className="Example">
        <header>
          <h1>react-pdf sample page</h1>
        </header>
        <div className="Example__container" style={{width:"100%"}}>
          <div className="Example__container__load">
            <label htmlFor="file">Load from file:</label>{' '}
            <input onChange={onFileChange} type="file" />
          </div>
          <div className="Example__container__document" style={{width:"100%"}}>
            <Document  file={file} renderMode={"canvas"} options={options} onLoadSuccess={onDocumentLoadSuccess}>
              {!numPages ? null : <Page scale={1.3} key={`${numPages}`} pageNumber={numPages + 1}/>}
              {/*{Array.from(new Array(numPages), (el, index) => (*/}
              {/*  <Page key={`${numPages}`} pageNumber={numPages + 1}/>*/}
              {/*))}*/}
            </Document>
          </div>
        </div>
      </div>
  );
}
