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
    const [document] = useAllPrismicDocumentsByType("about");
    console.log("document", document);
    return (
        <div>
            <h1>Test</h1>
            {document && (
                <PrismicRichText field={document[0].data.description} />
            )}
        </div>
    );
}

export default App;
