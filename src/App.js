import { PrismicRichText, useFirstPrismicDocument } from "@prismicio/react";

function App() {
    const [document] = useFirstPrismicDocument();

    return (
        <div>{document && <PrismicRichText field={document.data.title} />}</div>
    );
}

export default App;
