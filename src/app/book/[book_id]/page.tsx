import '@react-pdf-viewer/core/lib/styles/index.css';
import PdfRender from "@/components/pdf_render/pdf_render";
export function generateStaticParams() {
    return [
        { category: 'a', product: '1' },
    ]
}
export default function BookRead() {

    return (
        <div style={{height: 900}}>
            <PdfRender url={"https://strong-mammal-witty.ngrok-free.app/static/a.pdf"}/>
        </div>
    );
}

