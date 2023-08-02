import {
    PrismicRichText,
    useAllPrismicDocumentsByType,
    useFirstPrismicDocument,
    usePrismicDocumentByUID,
    usePrismicDocumentsByType,
    useSinglePrismicDocument,
} from "@prismicio/react";

function App() {
    // const [document] = useFirstPrismicDocument();
    const [document] = useAllPrismicDocumentsByType("home");
    console.log("document", document);
    return (
        <div>
            {document && <PrismicRichText field={document[0].data.title} />}
        </div>
    );
}

export default App;
