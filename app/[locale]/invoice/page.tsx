import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FolkSectionBackground from "../../components/FolkSectionBackground";
import InvoiceWorkspace from "../../components/invoice/InvoiceWorkspace";
import { buildPageMetadata } from "../../utils/seo";
import enMessages from "../../../messages/en.json";
import teMessages from "../../../messages/te.json";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const seo =
    locale === "te" ? teMessages.invoice.seo : enMessages.invoice.seo;

  return buildPageMetadata({
    locale,
    path: `/${locale}/invoice`,
    title: seo.title,
    description: seo.description,
    noIndex: true,
  });
}

export default async function InvoicePage() {
  return (
    <>
      <div className="print:hidden">
        <Navbar />
      </div>
      <main className="relative min-h-screen overflow-hidden pb-16 pt-28 print:bg-white print:pt-0 print:pb-0">
        <div className="print:hidden">
          <FolkSectionBackground variant="cream" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <InvoiceWorkspace />
        </div>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
